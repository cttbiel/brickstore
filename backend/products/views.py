from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Product, Favorite
from .serializers import CategorySerializer, ProductSerializer, FavoriteSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet para categorias - apenas leitura"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'description']


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet para produtos - apenas leitura para clientes"""
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'is_active']
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'price', 'created_at']
    ordering = ['-created_at']

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def toggle_favorite(self, request, pk=None):
        """Adiciona ou remove produto dos favoritos"""
        product = self.get_object()
        user = request.user
        
        favorite, created = Favorite.objects.get_or_create(
            user=user, 
            product=product
        )
        
        if not created:
            favorite.delete()
            return Response({'message': 'Produto removido dos favoritos'}, status=status.HTTP_200_OK)
        
        return Response({'message': 'Produto adicionado aos favoritos'}, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def favorites(self, request):
        """Lista produtos favoritos do usuário"""
        favorites = Favorite.objects.filter(user=request.user)
        serializer = FavoriteSerializer(favorites, many=True)
        return Response(serializer.data)


class FavoriteViewSet(viewsets.ModelViewSet):
    """ViewSet para gerenciar favoritos"""
    serializer_class = FavoriteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user) 