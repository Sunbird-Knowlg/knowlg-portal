# Dockerfile for the knowlg portal setup
FROM node:16.13.2-alpine
WORKDIR /app
COPY . .
RUN  apk add --update python make g++\
   && rm -rf /var/cache/apk/*
RUN npm i
RUN npm run deploy
WORKDIR /app/server
RUN npm i
EXPOSE 3000
CMD [ "node", "index.js" ]