# Use Node.js 18 Alpine
FROM node:18-alpine

# Instalar dependências do sistema
RUN apk add --no-cache git

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar TODAS as dependências (incluindo dev para build)
RUN npm ci && npm cache clean --force

# Copiar código fonte
COPY . .

# Build da aplicação SSR
RUN npm run build:ssr

# Remover dependências de desenvolvimento após o build
RUN npm prune --production

# Expor porta
EXPOSE 8080

# Definir usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app
USER nextjs

# Comando de inicialização
CMD ["node", "server-prod.js"]