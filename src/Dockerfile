# Usar uma imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação (incluindo o diretório src)
COPY . .

# Construir a aplicação
RUN npm run build

# Usar uma imagem leve para servir a aplicação
FROM nginx:alpine

# Copiar os arquivos da build para o nginx
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expor a porta do Nginx
EXPOSE 80
