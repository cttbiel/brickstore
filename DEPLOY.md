# 🚀 Guia de Deploy - BrickStore

## 📋 Pré-requisitos

- Conta no GitHub
- Conta no Vercel
- Banco PostgreSQL (Railway, Supabase, etc.)

## 🔧 Passos para Deploy

### 1. Preparar o Repositório

```bash
# Verificar se tudo está funcionando localmente
npm run build
npm run lint
```

### 2. Subir para o GitHub

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: BrickStore e-commerce"

# Adicionar repositório remoto (substitua pela sua URL)
git remote add origin https://github.com/seu-usuario/brickstore.git

# Enviar para o GitHub
git push -u origin main
```

### 3. Configurar Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe o repositório `brickstore`
5. Configure as variáveis de ambiente:

#### Variáveis de Ambiente no Vercel:

```env
DATABASE_URL="postgresql://seu-usuario:sua-senha@seu-host:5432/seu-banco"
NEXTAUTH_URL="https://seu-projeto.vercel.app"
NEXTAUTH_SECRET="sua-chave-secreta-muito-segura"
MERCADO_PAGO_ACCESS_TOKEN="seu-token-mercado-pago"
MERCADO_PAGO_PUBLIC_KEY="sua-chave-publica-mercado-pago"
```

### 4. Configurar Banco de Dados

1. Crie um banco PostgreSQL (Railway, Supabase, etc.)
2. Copie a URL de conexão
3. Cole no `DATABASE_URL` no Vercel
4. Execute as migrações:

```bash
# No Vercel, vá em Functions > Deploy Hooks
# Ou execute localmente com as variáveis de produção
npx prisma db push
```

### 5. Deploy Automático

- O Vercel fará deploy automático a cada push no GitHub
- Configure branch principal (main/master)
- Ative preview deployments se desejar

## 🔍 Verificações Pós-Deploy

1. ✅ Site carrega sem erros
2. ✅ Imagens aparecem corretamente
3. ✅ Navegação funciona
4. ✅ Responsividade OK
5. ✅ Banco de dados conectado
6. ✅ Autenticação funcionando

## 🛠️ Comandos Úteis

```bash
# Verificar build local
npm run build

# Verificar linting
npm run lint

# Testar produção local
npm run start

# Atualizar schema do banco
npx prisma db push

# Gerar cliente Prisma
npx prisma generate
```

## 📞 Suporte

Se houver problemas:

1. Verifique os logs no Vercel
2. Confirme variáveis de ambiente
3. Teste build local primeiro
4. Verifique conexão com banco

## 🎯 Próximos Passos

- [ ] Configurar domínio customizado
- [ ] Configurar SSL
- [ ] Implementar analytics
- [ ] Configurar monitoramento
- [ ] Backup automático do banco
