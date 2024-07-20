# Use uma imagem base do Node.js
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /var/www

# Copia o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do npm
RUN npm install

# Copia todo o código fonte para o diretório de trabalho no contêiner
COPY . .

# Comando padrão para iniciar sua aplicação
CMD [ "npm", "run", "dev" ]
