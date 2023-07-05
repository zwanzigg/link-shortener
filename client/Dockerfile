FROM node:16 AS builder
WORKDIR /app/client
COPY ./package.json ./package-lock.json tsconfig.json ./
RUN npm ci
COPY ./ .
EXPOSE 3000
CMD ["npm", "run", "start"]
