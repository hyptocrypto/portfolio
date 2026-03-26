FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
