from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db import transaction
from django.shortcuts import get_object_or_404
from .models import Cart, CartItem, Order, OrderItem
from .serializers import (
    CartSerializer, CartItemSerializer, OrderSerializer, 
    OrderItemSerializer, CheckoutSerializer
)


class CartViewSet(viewsets.ModelViewSet):
    """ViewSet para gerenciar carrinho"""
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return CartItem.objects.filter(cart=cart)

    def perform_create(self, serializer):
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        serializer.save(cart=cart)

    @action(detail=False, methods=['get'])
    def summary(self, request):
        """Retorna resumo do carrinho"""
        cart, created = Cart.objects.get_or_create(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def update_quantity(self, request, pk=None):
        """Atualiza quantidade de um item"""
        item = self.get_object()
        quantity = request.data.get('quantity', 1)
        
        if quantity <= 0:
            item.delete()
            return Response({'message': 'Item removido do carrinho'})
        
        item.quantity = quantity
        item.save()
        serializer = CartItemSerializer(item)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def remove(self, request, pk=None):
        """Remove item do carrinho"""
        item = self.get_object()
        item.delete()
        return Response({'message': 'Item removido do carrinho'})


class OrderViewSet(viewsets.ModelViewSet):
    """ViewSet para gerenciar pedidos"""
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    @action(detail=False, methods=['post'])
    def checkout(self, request):
        """Processa checkout e cria pedido"""
        serializer = CheckoutSerializer(data=request.data)
        if serializer.is_valid():
            with transaction.atomic():
                # Obter carrinho do usuário
                cart, created = Cart.objects.get_or_create(user=request.user)
                
                if not cart.items.exists():
                    return Response(
                        {'error': 'Carrinho vazio'}, 
                        status=status.HTTP_400_BAD_REQUEST
                    )
                
                # Criar pedido
                order = Order.objects.create(
                    user=request.user,
                    total=cart.total,
                    shipping_address=serializer.validated_data['shipping_address']
                )
                
                # Criar itens do pedido
                for item in cart.items.all():
                    OrderItem.objects.create(
                        order=order,
                        product=item.product,
                        quantity=item.quantity,
                        price=item.product.price
                    )
                
                # Limpar carrinho
                cart.items.all().delete()
                
                # Aqui você pode integrar com Mercado Pago
                # Por enquanto, apenas retornamos o pedido criado
                
                response_serializer = OrderSerializer(order)
                return Response(response_serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 