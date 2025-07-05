from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator


class Category(models.Model):
    """Modelo para categorias de produtos da construção civil"""
    name = models.CharField(max_length=100, verbose_name="Nome")
    description = models.TextField(blank=True, verbose_name="Descrição")
    image = models.ImageField(upload_to='categories/', blank=True, null=True, verbose_name="Imagem")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Criado em")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Atualizado em")

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"
        ordering = ['name']

    def __str__(self):
        return self.name


class Product(models.Model):
    """Modelo para produtos da construção civil"""
    name = models.CharField(max_length=200, verbose_name="Nome")
    description = models.TextField(verbose_name="Descrição")
    price = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        validators=[MinValueValidator(0.01)],
        verbose_name="Preço"
    )
    stock = models.PositiveIntegerField(default=0, verbose_name="Estoque")
    category = models.ForeignKey(
        Category, 
        on_delete=models.CASCADE, 
        related_name='products',
        verbose_name="Categoria"
    )
    image = models.ImageField(upload_to='products/', blank=True, null=True, verbose_name="Imagem")
    is_active = models.BooleanField(default=True, verbose_name="Ativo")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Criado em")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Atualizado em")

    class Meta:
        verbose_name = "Produto"
        verbose_name_plural = "Produtos"
        ordering = ['-created_at']

    def __str__(self):
        return self.name

    @property
    def in_stock(self):
        """Verifica se o produto está em estoque"""
        return self.stock > 0


class Favorite(models.Model):
    """Modelo para favoritos dos usuários"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Usuário")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="Produto")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Adicionado em")

    class Meta:
        verbose_name = "Favorito"
        verbose_name_plural = "Favoritos"
        unique_together = ['user', 'product']
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user.username} - {self.product.name}" 