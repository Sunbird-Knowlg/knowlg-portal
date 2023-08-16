# Dockerfile for the knowlg portal setup
FROM node:16.13.2-alpine
WORKDIR /app
COPY . .
RUN apk add g++ make py3-pip
RUN npm i --force
RUN npm run deploy
WORKDIR /app/server
RUN npm i
EXPOSE 3000
CMD [ "node", "index.js" ]
