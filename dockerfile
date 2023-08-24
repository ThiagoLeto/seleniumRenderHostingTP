FROM node:18

RUN mkdir -p /dist/angular-app

WORKDIR /dist/angular-app

COPY . /dist/angular-app

RUN npm ci

RUN npm run build

EXPOSE 80 

ENV PORT 80

CMD [ "ng", "build", "--prod" ]