from rest_framework import serializers
from .models import Cart, CartItem, Order, OrderItem

# Importação local para evitar referência circular
class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    image = serializers.CharField(allow_null=True)


class CartItemSerializer(serializers.ModelSerializer):
    """Serializer para itens do carrinho"""
    product = ProductSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)
    subtotal = serializers.ReadOnlyField()
    
    class Meta:
        model = CartItem
        fields = ['id', 'product', 'product_id', 'quantity', 'subtotal', 'created_at']
        read_only_fields = ['cart']

    def create(self, validated_data):
        return super().create(validated_data)


class CartSerializer(serializers.ModelSerializer):
    """Serializer para carrinho"""
    items = CartItemSerializer(many=True, read_only=True)
    total = serializers.ReadOnlyField()
    item_count = serializers.ReadOnlyField()
    
    class Meta:
        model = Cart
        fields = ['id', 'items', 'total', 'item_count', 'created_at', 'updated_at']


class OrderItemSerializer(serializers.ModelSerializer):
    """Serializer para itens do pedido"""
    product = ProductSerializer(read_only=True)
    subtotal = serializers.ReadOnlyField()
    
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'price', 'subtotal']


class OrderSerializer(serializers.ModelSerializer):
    """Serializer para pedidos"""
    items = OrderItemSerializer(many=True, read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    
    class Meta:
        model = Order
        fields = [
            'id', 'status', 'status_display', 'total', 'shipping_address', 
            'payment_id', 'items', 'created_at', 'updated_at'
        ]
        read_only_fields = ['user', 'payment_id']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)


class CheckoutSerializer(serializers.Serializer):
    """Serializer para checkout"""
    shipping_address = serializers.CharField(max_length=500)
    items = serializers.ListField(
        child=serializers.DictField(),
        write_only=True
    ) 