FROM node:16-alpine as builder

WORKDIR /app

ENV HTTP_HOST http://localhost:3020

COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.16.1

COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d

# Default port exposure
EXPOSE 80

# Start Nginx server
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
