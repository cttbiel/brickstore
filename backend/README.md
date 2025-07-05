# 🏗️ BrickStore - Backend

Backend Django para o e-commerce BrickStore, focado no setor da construção civil.

## 🚀 Tecnologias

- **Django 4.2.7** - Framework web
- **Django REST Framework** - API REST
- **PostgreSQL/SQLite** - Banco de dados
- **Mercado Pago** - Gateway de pagamento
- **CORS Headers** - Cross-origin resource sharing

## 📦 Instalação

1. **Clone o repositório e navegue para o backend:**

```bash
cd backend
```

2. **Crie um ambiente virtual:**

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate  # Windows
```

3. **Instale as dependências:**

```bash
pip install -r requirements.txt
```

4. **Configure as variáveis de ambiente:**

```bash
cp env.example .env
# Edite o arquivo .env com suas configurações
```

5. **Execute as migrações:**

```bash
python manage.py makemigrations
python manage.py migrate
```

6. **Popule o banco com dados de exemplo:**

```bash
python populate_data.py
```

7. **Inicie o servidor:**

```bash
python manage.py runserver
```

O backend estará disponível em `http://localhost:8000`

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` baseado no `env.example`:

```env
SECRET_KEY=sua-chave-secreta-aqui
DEBUG=True
MERCADO_PAGO_PUBLIC_KEY=sua-chave-publica-mercado-pago
MERCADO_PAGO_ACCESS_TOKEN=seu-token-mercado-pago
```

### Banco de Dados

Por padrão, o projeto usa SQLite para desenvolvimento. Para produção, configure PostgreSQL:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'brickstore',
        'USER': 'seu_usuario',
        'PASSWORD': 'sua_senha',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## 📚 API Endpoints

### Autenticação

- `POST /api/register/` - Registro de usuário
- `POST /api/login/` - Login
- `POST /api/logout/` - Logout
- `GET /api/profile/` - Perfil do usuário
- `PUT /api/profile/update/` - Atualizar perfil
- `POST /api/profile/change-password/` - Alterar senha

### Produtos

- `GET /api/products/` - Listar produtos
- `GET /api/products/{id}/` - Detalhes do produto
- `GET /api/categories/` - Listar categorias
- `POST /api/products/{id}/toggle_favorite/` - Favoritar/desfavoritar
- `GET /api/products/favorites/` - Produtos favoritos

### Carrinho

- `GET /api/cart/` - Itens do carrinho
- `POST /api/cart/` - Adicionar item
- `PUT /api/cart/{id}/` - Atualizar quantidade
- `DELETE /api/cart/{id}/` - Remover item
- `GET /api/cart/summary/` - Resumo do carrinho

### Pedidos

- `GET /api/orders/` - Listar pedidos
- `GET /api/orders/{id}/` - Detalhes do pedido
- `POST /api/orders/checkout/` - Finalizar compra

## 👤 Usuário Administrativo

Após executar `populate_data.py`, você terá acesso ao painel administrativo:

- **URL:** `http://localhost:8000/admin/`
- **Usuário:** `admin`
- **Senha:** `admin123`

## 🧪 Testes

```bash
python manage.py test
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Configure o arquivo `vercel.json`
2. Conecte seu repositório ao Vercel
3. Configure as variáveis de ambiente no painel do Vercel

### Railway/Render

1. Conecte seu repositório
2. Configure as variáveis de ambiente
3. Deploy automático

## 📝 Estrutura do Projeto

```
backend/
├── brickstore/          # Configurações principais
├── products/           # App de produtos
├── users/              # App de usuários
├── orders/             # App de pedidos
├── manage.py           # Script de gerenciamento
├── requirements.txt    # Dependências
└── populate_data.py    # Dados de exemplo
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
