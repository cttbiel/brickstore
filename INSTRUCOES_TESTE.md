# 🧪 Instruções para Testar o BrickStore

Este documento contém instruções detalhadas para configurar e testar o projeto BrickStore.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Python 3.8+** - [Download Python](https://www.python.org/downloads/)
- **Node.js 16+** - [Download Node.js](https://nodejs.org/)
- **Git** - [Download Git](https://git-scm.com/)

## 🚀 Configuração Inicial

### 1. Clone o Repositório

```bash
git clone <url-do-repositorio>
cd BrickStore
```

### 2. Configurar Backend Django

```bash
# Navegar para a pasta backend
cd backend

# Criar ambiente virtual
python -m venv venv

# Ativar ambiente virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Criar arquivo .env (baseado no env.example)
cp env.example .env

# Executar migrações
python manage.py makemigrations
python manage.py migrate

# Popular banco com dados de exemplo
python populate_data.py

# Iniciar servidor
python manage.py runserver
```

### 3. Configurar Frontend React

```bash
# Em outro terminal, navegar para a pasta frontend
cd frontend

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

## 🌐 Acessos

Após a configuração, você terá acesso a:

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api
- **Admin Django:** http://localhost:8000/admin
  - Usuário: `admin`
  - Senha: `admin123`

## 🧪 Testando as Funcionalidades

### 1. Navegação Básica

- ✅ Acesse http://localhost:3000
- ✅ Verifique se a página inicial carrega
- ✅ Teste a responsividade (redimensione a janela)

### 2. Registro e Login

- ✅ Clique em "Cadastrar" no header
- ✅ Preencha o formulário de registro
- ✅ Faça login com as credenciais criadas
- ✅ Verifique se o nome do usuário aparece no header

### 3. Produtos

- ✅ Navegue para "Produtos" no menu
- ✅ Verifique se os produtos carregam
- ✅ Teste a busca por produtos
- ✅ Clique em um produto para ver detalhes

### 4. Favoritos

- ✅ Faça login na aplicação
- ✅ Clique no ícone de coração em um produto
- ✅ Verifique se o produto foi adicionado aos favoritos
- ✅ Acesse a página de favoritos

### 5. Carrinho de Compras

- ✅ Faça login na aplicação
- ✅ Clique em "Adicionar" em um produto
- ✅ Verifique se o produto aparece no carrinho
- ✅ Teste alterar quantidade
- ✅ Teste remover item do carrinho

### 6. API Endpoints (Teste Manual)

#### Autenticação

```bash
# Registro
curl -X POST http://localhost:8000/api/register/ \
  -H "Content-Type: application/json" \
  -d '{"username":"teste","email":"teste@email.com","password":"senha123","password2":"senha123","first_name":"Teste","last_name":"Usuario"}'

# Login
curl -X POST http://localhost:8000/api/login/ \
  -H "Content-Type: application/json" \
  -d '{"username":"teste","password":"senha123"}'
```

#### Produtos

```bash
# Listar produtos
curl http://localhost:8000/api/products/

# Listar categorias
curl http://localhost:8000/api/categories/

# Buscar produtos
curl "http://localhost:8000/api/products/?search=tijolo"
```

#### Carrinho (requer autenticação)

```bash
# Adicionar ao carrinho (substitua TOKEN e PRODUCT_ID)
curl -X POST http://localhost:8000/api/cart/ \
  -H "Authorization: Token TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"product_id":1,"quantity":2}'

# Ver carrinho
curl -H "Authorization: Token TOKEN" http://localhost:8000/api/cart/
```

## 🔧 Solução de Problemas

### Backend não inicia

```bash
# Verificar se o ambiente virtual está ativo
# Windows: venv\Scripts\activate
# Linux/Mac: source venv/bin/activate

# Verificar dependências
pip list

# Reinstalar dependências
pip install -r requirements.txt
```

### Frontend não inicia

```bash
# Verificar Node.js
node --version
npm --version

# Limpar cache
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro de CORS

- Verifique se o backend está rodando em http://localhost:8000
- Verifique se o frontend está rodando em http://localhost:3000
- As configurações de CORS já estão configuradas no backend

### Banco de dados vazio

```bash
# Executar novamente o script de população
cd backend
python populate_data.py
```

## 📊 Dados de Exemplo

O script `populate_data.py` cria:

### Categorias

- Tijolos e Blocos
- Cimento e Argamassa
- Ferragens
- Madeiras
- Telhas
- Ferramentas

### Produtos

- Tijolo Baiano 6 Furos - R$ 0,85
- Bloco de Concreto 14x19x39cm - R$ 2,50
- Cimento Portland CP-II - R$ 28,90
- Argamassa Mista 20kg - R$ 15,50
- Vergalhão CA-50 6mm - R$ 12,80
- Tela Galvanizada 1x1m - R$ 8,90
- Viga de Madeira 6x12cm - R$ 45,00
- Caibro 5x7cm - R$ 18,50
- Telha Cerâmica Colonial - R$ 3,20
- Telha Fibrocimento 2.44m - R$ 22,80
- Furadeira de Impacto 1/2" - R$ 189,90
- Serra Circular 7 1/4" - R$ 299,90

### Usuário Administrativo

- Usuário: `admin`
- Senha: `admin123`
- Email: `admin@brickstore.com`

## 🎯 Próximos Testes

Após testar as funcionalidades básicas, você pode:

1. **Testar responsividade** em diferentes dispositivos
2. **Testar performance** com muitos produtos
3. **Testar segurança** tentando acessar rotas protegidas
4. **Testar acessibilidade** com leitores de tela
5. **Testar diferentes navegadores** (Chrome, Firefox, Safari, Edge)

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs do console do navegador
2. Verifique os logs do servidor Django
3. Consulte a documentação do README.md
4. Abra uma issue no repositório

---

**Boa sorte com os testes! 🚀**
