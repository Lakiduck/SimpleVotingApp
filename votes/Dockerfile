FROM node:lts-alpine as base
WORKDIR /usr/src/app
COPY ./ ./

FROM base as test
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "test"]

FROM base as prod
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]