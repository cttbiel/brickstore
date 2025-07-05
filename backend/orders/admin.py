from django.contrib import admin
from .models import Cart, CartItem, Order, OrderItem


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['user', 'item_count', 'total', 'created_at']
    list_filter = ['created_at']
    search_fields = ['user__username']
    ordering = ['-created_at']


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ['cart', 'product', 'quantity', 'subtotal', 'created_at']
    list_filter = ['created_at']
    search_fields = ['cart__user__username', 'product__name']
    ordering = ['-created_at']


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'status', 'total', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['user__username', 'shipping_address']
    ordering = ['-created_at']
    list_editable = ['status']


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['order', 'product', 'quantity', 'price', 'subtotal']
    list_filter = ['order__status']
    search_fields = ['order__user__username', 'product__name']
    ordering = ['-order__created_at'] 