FROM node:19-alpine

WORKDIR /frontend-angular
COPY package.json .

RUN npm install
RUN npm install http-server
COPY . .
ENV NODE_ENV=PRODUCTION
EXPOSE 80

CMD ["npm","start"]