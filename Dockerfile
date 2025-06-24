FROM node:20
WORKDIR /app
COPY package.json ./
COPY webpack.config.js ./
COPY src ./src
RUN npm install
RUN npm run build
CMD ["npx", "webpack", "serve", "--host", "0.0.0.0"]
