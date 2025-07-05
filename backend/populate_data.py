#!/usr/bin/env python
"""
Script para popular o banco de dados com dados de exemplo
"""
import os
import django

# Configurar Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'brickstore.settings')
django.setup()

from products.models import Category, Product
from django.contrib.auth.models import User

def create_categories():
    """Cria categorias de exemplo"""
    categories_data = [
        {
            'name': 'Tijolos e Blocos',
            'description': 'Tijolos, blocos de concreto e outros materiais de alvenaria'
        },
        {
            'name': 'Cimento e Argamassa',
            'description': 'Cimentos, argamassas e produtos relacionados'
        },
        {
            'name': 'Ferragens',
            'description': 'Arames, vergalhões, telas e outros produtos de ferro'
        },
        {
            'name': 'Madeiras',
            'description': 'Madeiras para construção, vigas e caibros'
        },
        {
            'name': 'Telhas',
            'description': 'Telhas de cerâmica, fibrocimento e outros tipos'
        },
        {
            'name': 'Ferramentas',
            'description': 'Ferramentas manuais e elétricas para construção'
        }
    ]
    
    for data in categories_data:
        category, created = Category.objects.get_or_create(
            name=data['name'],
            defaults={'description': data['description']}
        )
        if created:
            print(f"Categoria criada: {category.name}")

def create_products():
    """Cria produtos de exemplo"""
    products_data = [
        {
            'name': 'Tijolo Baiano 6 Furos',
            'description': 'Tijolo cerâmico baiano com 6 furos, ideal para alvenaria estrutural',
            'price': 0.85,
            'stock': 1000,
            'category_name': 'Tijolos e Blocos'
        },
        {
            'name': 'Bloco de Concreto 14x19x39cm',
            'description': 'Bloco de concreto estrutural 14x19x39cm',
            'price': 2.50,
            'stock': 500,
            'category_name': 'Tijolos e Blocos'
        },
        {
            'name': 'Cimento Portland CP-II',
            'description': 'Cimento Portland CP-II 50kg, ideal para obras gerais',
            'price': 28.90,
            'stock': 200,
            'category_name': 'Cimento e Argamassa'
        },
        {
            'name': 'Argamassa Mista 20kg',
            'description': 'Argamassa mista pronta para uso, 20kg',
            'price': 15.50,
            'stock': 150,
            'category_name': 'Cimento e Argamassa'
        },
        {
            'name': 'Vergalhão CA-50 6mm',
            'description': 'Vergalhão CA-50 6mm, 12 metros',
            'price': 12.80,
            'stock': 300,
            'category_name': 'Ferragens'
        },
        {
            'name': 'Tela Galvanizada 1x1m',
            'description': 'Tela galvanizada 1x1m, malha 1/2"',
            'price': 8.90,
            'stock': 100,
            'category_name': 'Ferragens'
        },
        {
            'name': 'Viga de Madeira 6x12cm',
            'description': 'Viga de madeira de lei 6x12cm, 3 metros',
            'price': 45.00,
            'stock': 80,
            'category_name': 'Madeiras'
        },
        {
            'name': 'Caibro 5x7cm',
            'description': 'Caibro de madeira 5x7cm, 3 metros',
            'price': 18.50,
            'stock': 200,
            'category_name': 'Madeiras'
        },
        {
            'name': 'Telha Cerâmica Colonial',
            'description': 'Telha cerâmica colonial, 40x25cm',
            'price': 3.20,
            'stock': 5000,
            'category_name': 'Telhas'
        },
        {
            'name': 'Telha Fibrocimento 2.44m',
            'description': 'Telha de fibrocimento 2.44m, cor natural',
            'price': 22.80,
            'stock': 1000,
            'category_name': 'Telhas'
        },
        {
            'name': 'Furadeira de Impacto 1/2"',
            'description': 'Furadeira de impacto 1/2", 800W',
            'price': 189.90,
            'stock': 50,
            'category_name': 'Ferramentas'
        },
        {
            'name': 'Serra Circular 7 1/4"',
            'description': 'Serra circular 7 1/4", 1400W',
            'price': 299.90,
            'stock': 30,
            'category_name': 'Ferramentas'
        }
    ]
    
    for data in products_data:
        try:
            category = Category.objects.get(name=data['category_name'])
            product, created = Product.objects.get_or_create(
                name=data['name'],
                defaults={
                    'description': data['description'],
                    'price': data['price'],
                    'stock': data['stock'],
                    'category': category
                }
            )
            if created:
                print(f"Produto criado: {product.name} - R$ {product.price}")
        except Category.DoesNotExist:
            print(f"Categoria não encontrada: {data['category_name']}")

def create_superuser():
    """Cria um superusuário para administração"""
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser('admin', 'admin@brickstore.com', 'admin123')
        print("Superusuário criado: admin/admin123")

if __name__ == '__main__':
    print("Populando banco de dados com dados de exemplo...")
    create_categories()
    create_products()
    create_superuser()
    print("Dados de exemplo criados com sucesso!") 