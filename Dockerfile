FROM node:12.2.0-alpine
WORKDIR /usr/src/casasmagalhaes

COPY ./package.json .

RUN npm install --only=prod

# COPY ./dist ./dist
