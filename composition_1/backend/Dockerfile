FROM mhart/alpine-node:10

RUN apk add curl

WORKDIR /app

COPY . .

RUN npm install

CMD npm run start