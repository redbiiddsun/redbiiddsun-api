# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.17.0

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

RUN npx prisma generate

RUN npm run build

CMD [ "npm", "run", "start" ]