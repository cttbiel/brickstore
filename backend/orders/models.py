from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from products.models import Product


class Cart(models.Model):
    """Modelo para carrinho de compras"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Usuário")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Criado em")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Atualizado em")

    class Meta:
        verbose_name = "Carrinho"
        verbose_name_plural = "Carrinhos"

    def __str__(self):
        return f"Carrinho de {self.user.username}"

    @property
    def total(self):
        """Calcula o total do carrinho"""
        return sum(item.subtotal for item in self.items.all())

    @property
    def item_count(self):
        """Retorna o número de itens no carrinho"""
        return sum(item.quantity for item in self.items.all())


class CartItem(models.Model):
    """Modelo para itens do carrinho"""
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='items', verbose_name="Carrinho")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="Produto")
    quantity = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)], verbose_name="Quantidade")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Adicionado em")

    class Meta:
        verbose_name = "Item do Carrinho"
        verbose_name_plural = "Itens do Carrinho"
        unique_together = ['cart', 'product']

    def __str__(self):
        return f"{self.quantity}x {self.product.name}"

    @property
    def subtotal(self):
        """Calcula o subtotal do item"""
        return self.product.price * self.quantity


class Order(models.Model):
    """Modelo para pedidos"""
    STATUS_CHOICES = [
        ('pending', 'Pendente'),
        ('paid', 'Pago'),
        ('shipped', 'Enviado'),
        ('delivered', 'Entregue'),
        ('cancelled', 'Cancelado'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Usuário")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending', verbose_name="Status")
    total = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Total")
    shipping_address = models.TextField(verbose_name="Endereço de Entrega")
    payment_id = models.CharField(max_length=100, blank=True, null=True, verbose_name="ID do Pagamento")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Criado em")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Atualizado em")

    class Meta:
        verbose_name = "Pedido"
        verbose_name_plural = "Pedidos"
        ordering = ['-created_at']

    def __str__(self):
        return f"Pedido #{self.id} - {self.user.username}"


class OrderItem(models.Model):
    """Modelo para itens do pedido"""
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items', verbose_name="Pedido")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="Produto")
    quantity = models.PositiveIntegerField(verbose_name="Quantidade")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Preço Unitário")

    class Meta:
        verbose_name = "Item do Pedido"
        verbose_name_plural = "Itens do Pedido"

    def __str__(self):
        return f"{self.quantity}x {self.product.name}"

    @property
    def subtotal(self):
        """Calcula o subtotal do item"""
        return self.price * self.quantity 