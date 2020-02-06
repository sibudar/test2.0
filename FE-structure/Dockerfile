# building an img

FROM node:12.14.1-alpine3.9 as builder

WORKDIR /app

COPY package.json ./

COPY . . 

RUN npm run build

# serves angular project

FROM nginx

COPY --from=builder /app/dist/FE-structure  /usr/share/nginx/html

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]
