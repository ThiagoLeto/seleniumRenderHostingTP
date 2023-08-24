from node:18.15.0

WORKDIR /user/src/app/

COPY package*.json ./

RUN npm install

RUN npm i angular

RUN npm install @angular/cli@15.2.9

COPY . .

EXPOSE 4200

CMD ["ng","serve"]