FROM nginx:alpine

RUN apk add curl

COPY . /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf



EXPOSE 3030

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost:3030 || exit 1
