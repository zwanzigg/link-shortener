FROM node:16 AS builder
WORKDIR /app/server
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app/server
COPY --from=builder /app/server ./
RUN pwd
RUN ls -la
EXPOSE 4000
CMD ["npm", "run", "start:prod"]

