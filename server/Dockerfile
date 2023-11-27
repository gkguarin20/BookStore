FROM node:16.16.0

WORKDIR /Mern/server

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .
EXPOSE 5000
CMD [ "node", "server.js" ]
