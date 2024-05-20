FROM node:18-alpine AS BUILDER

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY index.js .

EXPOSE 3000

CMD [ "node", "index.js" ]

