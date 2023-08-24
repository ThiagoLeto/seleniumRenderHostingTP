from node:18.15.0

WORKDIR /user/src/app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["ng","serve"]