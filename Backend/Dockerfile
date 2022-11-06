FROM node:19-alpine

COPY . /backend-express

WORKDIR /backend-express
RUN npm i
EXPOSE 4000

CMD ["node","index.js"]