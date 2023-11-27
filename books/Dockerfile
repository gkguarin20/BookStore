FROM node:16 as Test
WORKDIR /Mern/app
COPY package.json .
RUN npm install
COPY . . 
ENV REACT_APP_NAME=Books
EXPOSE 3000
CMD ["npm", "start"]
