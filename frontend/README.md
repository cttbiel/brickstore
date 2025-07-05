# 🏗️ BrickStore - Frontend

Frontend React para o e-commerce BrickStore, focado no setor da construção civil.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Framework CSS
- **Headless UI** - Componentes acessíveis
- **Heroicons** - Ícones

## 📦 Instalação

1. **Navegue para a pasta frontend:**

```bash
cd frontend
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do frontend:

```env
VITE_API_URL=http://localhost:8000/api
```

### Backend

Certifique-se de que o backend Django está rodando em `http://localhost:8000`

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── contexts/       # Contextos React (Auth, Cart)
│   ├── pages/          # Páginas da aplicação
│   ├── services/       # Serviços de API
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utilitários
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Ponto de entrada
├── public/             # Arquivos estáticos
├── index.html          # HTML template
└── package.json        # Dependências
```

## 🎨 Design System

### Cores

- **Primary**: Laranja (#ed7516) - Cor principal da marca
- **Secondary**: Cinza (#64748b) - Cor secundária
- **Success**: Verde (#16a34a) - Sucesso/estoque
- **Error**: Vermelho (#dc2626) - Erro/fora de estoque

### Componentes

- **Button**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`
- **Card**: `.card`
- **Input**: `.input`
- **Label**: `.label`

## 📱 Responsividade

O projeto é totalmente responsivo e funciona bem em:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🔐 Autenticação

O sistema de autenticação inclui:

- Login/Logout
- Registro de usuário
- Proteção de rotas
- Gerenciamento de token

## 🛒 Funcionalidades

### Carrinho de Compras

- Adicionar/remover produtos
- Atualizar quantidades
- Resumo do carrinho
- Persistência entre sessões

### Produtos

- Listagem com paginação
- Busca e filtros
- Favoritos
- Detalhes do produto

### Usuário

- Perfil do usuário
- Histórico de pedidos
- Gerenciamento de conta

## 🚀 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Executa ESLint
```

## 🧪 Testes

```bash
npm run test         # Executa testes
npm run test:watch   # Executa testes em modo watch
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Netlify

1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

## 🔗 Integração com Backend

O frontend se comunica com o backend Django através de:

- **Base URL**: `http://localhost:8000/api` (desenvolvimento)
- **Autenticação**: Token-based
- **CORS**: Configurado no backend

## 📝 Próximos Passos

- [ ] Páginas de login/registro
- [ ] Página de produtos com filtros
- [ ] Página do carrinho
- [ ] Página de checkout
- [ ] Integração com Mercado Pago
- [ ] Página de perfil do usuário
- [ ] Página de pedidos
- [ ] Página de favoritos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
