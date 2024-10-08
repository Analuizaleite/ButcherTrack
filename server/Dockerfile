# server/Dockerfile
# Usar a imagem oficial do Node.js
FROM node:16

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código para o container
COPY . .

# Expor a porta do backend (mesma do Express)
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["npm", "start"]
