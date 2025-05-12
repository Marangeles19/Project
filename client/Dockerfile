# Construcción de la app con Node.js
FROM node:20 AS build

WORKDIR /app

# Copiar archivos de dependencias e instalar
COPY client/package.json client/package-lock.json ./
RUN npm install --frozen-lockfile

# Copiar el código y compilar
COPY client ./
RUN npm run build

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]