FROM node:18

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm ci

RUN npm run build

EXPOSE 4200 

ENV PORT 4200

CMD [ "ng", "build", "--prod" ]