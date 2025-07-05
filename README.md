# 🏗️ BrickStore - Building Value, One Brick at a Time

**BrickStore** é uma plataforma de e-commerce moderna e intuitiva focada no setor da construção civil.  
Conectando indivíduos, pequenas empresas e profissionais em busca de materiais, serviços e soluções inteligentes — tudo em um só lugar.

---

## 🚀 Status do Projeto

✅ **Next.js 15** - Implementado com App Router  
✅ **TypeScript** - Configurado e funcional  
✅ **Tailwind CSS** - Design system implementado  
✅ **Prisma ORM** - Banco de dados configurado  
🔄 **NextAuth.js** - Autenticação em desenvolvimento  
🔄 **Mercado Pago** - Integração em desenvolvimento  
🔄 **Deploy** - Em configuração

---

## 💡 Funcionalidades

### ✅ Implementadas

- 🏠 **Página inicial** com hero section e componentes
- 🧱 **Navegação responsiva** com header e footer
- 🛒 **Sistema de carrinho** com contexto React
- 📱 **Design responsivo** para mobile, tablet e desktop
- 🎨 **UI moderna** com Tailwind CSS
- 🔧 **Estrutura escalável** com Next.js App Router

### 🔄 Em Desenvolvimento

- 🔐 **Autenticação de usuários** com NextAuth.js
- 📦 **Gestão de produtos** e categorias
- ❤️ **Sistema de favoritos**
- 💳 **Integração com Mercado Pago**
- 📊 **Painel administrativo**
- 🚚 **Sistema de entrega**

---

## 🛠️ Stack Tecnológica

### Frontend & Backend (Full-Stack)

- **Next.js 15** - Framework React full-stack
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS
- **Prisma** - ORM para banco de dados
- **NextAuth.js** - Autenticação
- **Mercado Pago** - Gateway de pagamento

### Banco de Dados

- **PostgreSQL** - Banco de dados principal
- **Prisma Client** - ORM type-safe

### Deploy

- **Vercel** - Hospedagem e deploy automático

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- PostgreSQL (local ou remoto)

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/brickstore.git
cd brickstore
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/brickstore"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Mercado Pago
MERCADO_PAGO_ACCESS_TOKEN="your-mercado-pago-access-token"
MERCADO_PAGO_PUBLIC_KEY="your-mercado-pago-public-key"
```

4. **Configure o banco de dados**

```bash
npx prisma generate
npx prisma db push
```

5. **Execute o projeto**

```bash
npm run dev
```

### Acessos

- **Frontend:** http://localhost:3000
- **Prisma Studio:** http://localhost:5555 (execute `npx prisma studio`)

---

## 📁 Estrutura do Projeto

```
brickstore/
├── src/
│   ├── app/                 # App Router (Next.js 13+)
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página inicial
│   │   └── globals.css      # Estilos globais
│   ├── components/          # Componentes React
│   │   ├── header.tsx       # Cabeçalho
│   │   ├── footer.tsx       # Rodapé
│   │   ├── hero.tsx         # Hero section
│   │   ├── providers.tsx    # Providers (NextAuth, etc.)
│   │   └── ...              # Outros componentes
│   ├── contexts/            # Contextos React
│   │   └── cart-context.tsx # Contexto do carrinho
│   └── lib/                 # Utilitários
│       └── utils.ts         # Funções utilitárias
├── prisma/                  # Configuração do banco
│   └── schema.prisma        # Schema do Prisma
├── public/                  # Assets estáticos
└── package.json
```

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

### Vercel (Recomendado)

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Variáveis de Ambiente para Produção

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://seu-dominio.vercel.app"
NEXTAUTH_SECRET="seu-secret-produção"
MERCADO_PAGO_ACCESS_TOKEN="seu-token-produção"
MERCADO_PAGO_PUBLIC_KEY="sua-chave-pública-produção"
```

---

## 📝 Próximos Passos

- [ ] Implementar autenticação com NextAuth.js
- [ ] Criar páginas de produtos e categorias
- [ ] Integrar Mercado Pago
- [ ] Implementar sistema de favoritos
- [ ] Criar painel administrativo
- [ ] Sistema de notificações
- [ ] Relatórios e analytics
- [ ] App mobile (React Native)

---

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📫 Contato

Se você tem interesse em discutir, colaborar ou simplesmente trocar ideias:

📧 Email: **cttbiel@gmail.com**  
🔗 LinkedIn: [Gabriel Carvalho](https://www.linkedin.com/in/cttbiel/)

---

Obrigado por visitar!  
Vamos construir valor, um tijolo de cada vez. 💪🧱✨
