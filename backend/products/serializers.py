from rest_framework import serializers
from .models import Category, Product, Favorite


class CategorySerializer(serializers.ModelSerializer):
    """Serializer para categorias"""
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'image', 'created_at']


class ProductSerializer(serializers.ModelSerializer):
    """Serializer para produtos"""
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    in_stock = serializers.ReadOnlyField()
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'stock', 
            'category', 'category_id', 'image', 'is_active', 
            'in_stock', 'created_at'
        ]

    def create(self, validated_data):
        category_id = validated_data.pop('category_id')
        validated_data['category_id'] = category_id
        return super().create(validated_data)


class FavoriteSerializer(serializers.ModelSerializer):
    """Serializer para favoritos"""
    product = ProductSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = Favorite
        fields = ['id', 'product', 'product_id', 'created_at']
        read_only_fields = ['user']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data) 