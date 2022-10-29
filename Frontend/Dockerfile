FROM node:19-alpine

WORKDIR /frontend-angular
COPY package.json .

RUN npm install
RUN npm install http-server
COPY . .

EXPOSE 4200

CMD ["npm","start"]