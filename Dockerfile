FROM node:8.1.2

ADD . /usr/src/app

WORKDIR /usr/src/app

RUN npm install 
EXPOSE 6020
CMD node server.js
