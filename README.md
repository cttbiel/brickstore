# 🏗️ BrickStore — Building Value, One Brick at a Time

**BrickStore** é uma plataforma de e-commerce moderna e intuitiva focada no setor da construção civil.  
Conectando indivíduos, pequenas empresas e profissionais em busca de materiais, serviços e soluções inteligentes — tudo em um só lugar.

---

## 🚀 Status do Projeto

✅ **Backend Django** - Implementado e funcional  
✅ **Frontend React** - Implementado e funcional  
🔄 **Integração Mercado Pago** - Em desenvolvimento  
🔄 **Deploy** - Em configuração

---

## 💡 Funcionalidades

### ✅ Implementadas

- 🧱 **Navegação por produtos** com filtros e busca
- ❤️ **Sistema de favoritos** para usuários logados
- 🛒 **Carrinho de compras** completo
- 🔐 **Autenticação de usuários** (login/registro)
- 📦 **Gestão de pedidos** e histórico
- 📱 **Design responsivo** para mobile, tablet e desktop

### 🔄 Em Desenvolvimento

- 💳 **Integração com Mercado Pago**
- 📊 **Painel administrativo** avançado
- 🚚 **Sistema de entrega** e rastreamento
- ⭐ **Sistema de avaliações** e comentários

---

## 🛠️ Stack Tecnológica

### Backend

- **Django 4.2.7** - Framework web
- **Django REST Framework** - API REST
- **PostgreSQL/SQLite** - Banco de dados
- **Mercado Pago** - Gateway de pagamento

### Frontend

- **React 18** - Biblioteca JavaScript
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **React Router** - Roteamento
- **Axios** - Cliente HTTP

---

## 🚀 Como Executar

### Pré-requisitos

- Python 3.8+
- Node.js 16+
- npm ou yarn

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate     # Windows

pip install -r requirements.txt
python manage.py migrate
python populate_data.py
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Acessos

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api
- **Admin Django:** http://localhost:8000/admin
  - Usuário: `admin`
  - Senha: `admin123`

---

## 📁 Estrutura do Projeto

```
BrickStore/
├── backend/           # API Django
│   ├── brickstore/    # Configurações principais
│   ├── products/      # App de produtos
│   ├── users/         # App de usuários
│   ├── orders/        # App de pedidos
│   └── requirements.txt
├── frontend/          # Aplicação React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── contexts/
│   └── package.json
└── assets/            # Logo e recursos
```

---

## 🔗 API Endpoints

### Autenticação

- `POST /api/register/` - Registro
- `POST /api/login/` - Login
- `POST /api/logout/` - Logout

### Produtos

- `GET /api/products/` - Listar produtos
- `GET /api/categories/` - Listar categorias
- `POST /api/products/{id}/toggle_favorite/` - Favoritar

### Carrinho

- `GET /api/cart/` - Itens do carrinho
- `POST /api/cart/` - Adicionar item
- `DELETE /api/cart/{id}/` - Remover item

### Pedidos

- `GET /api/orders/` - Listar pedidos
- `POST /api/orders/checkout/` - Finalizar compra

---

## 🎨 Design System

### Cores Principais

- **Primary:** Laranja (#ed7516) - Marca
- **Secondary:** Cinza (#64748b) - Textos
- **Success:** Verde (#16a34a) - Sucesso
- **Error:** Vermelho (#dc2626) - Erros

### Componentes

- Botões, cards, inputs padronizados
- Design responsivo mobile-first
- Acessibilidade implementada

---

## 🌐 Deploy

### Frontend (Vercel)

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Backend (Railway/Render)

1. Conecte o repositório
2. Configure PostgreSQL
3. Configure variáveis de ambiente

---

## 📝 Próximos Passos

- [ ] Integração completa com Mercado Pago
- [ ] Sistema de notificações
- [ ] Relatórios e analytics
- [ ] App mobile (React Native)
- [ ] Sistema de cupons e promoções
- [ ] Integração com sistemas de estoque

---

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

## 📫 Contato

Se você tem interesse em discutir, colaborar ou simplesmente trocar ideias:

📧 Email: **cttbiel@gmail.com**  
🔗 LinkedIn: [Gabriel Carvalho](https://www.linkedin.com/in/cttbiel/)

---

Obrigado por visitar!  
Vamos construir valor, um tijolo de cada vez. 💪🧱✨
