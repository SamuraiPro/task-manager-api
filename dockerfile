# Dockerfile
FROM node:18-alpine

# Metadados
LABEL maintainer="seu-email@example.com"
LABEL description="Task Manager API - DevOps Project"

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código fonte
COPY src ./src

# Expor porta
EXPOSE 3000

# Usuário não-root
USER node

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Comando de inicialização
CMD ["node", "src/server.js"]