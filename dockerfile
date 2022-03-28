#Docker File for Quota
FROM node:12.14.1-alpine3.10

LABEL maintainer="IBM"

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install -g pm2
RUN npm install

COPY ./src .

# COPY --chown=node:node ./code .

RUN npm run build

EXPOSE 80

ENTRYPOINT ["sh", "./entrypoint.sh"]
