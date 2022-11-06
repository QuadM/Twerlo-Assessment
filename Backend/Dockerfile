FROM node:19-alpine

COPY . /backend-express

WORKDIR /backend-express
RUN npm i
EXPOSE 8080
ENV PORT=8080

CMD ["node","index.js"]