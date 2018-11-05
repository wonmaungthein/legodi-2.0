FROM node:8-alpine
WORKDIR  /app
COPY . .
RUN apk add make gcc g++ && apk add python
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]
