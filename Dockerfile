### STAGE 1: Build ###
FROM node:16-alpine AS build
WORKDIR /app
RUN npm cache clean --force

COPY . .

RUN npm ci
RUN npm run build:docker

### STAGE 2: Run ###
FROM nginx:1.21.3-alpine AS ngx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
