#FROM node:20
FROM 532607548077.dkr.ecr.us-east-1.amazonaws.com/mynodeapp-frontend-dev:latest
WORKDIR /app
COPY package.json ./
COPY webpack.config.js ./
COPY src ./src
RUN npm install
RUN npm run build
CMD ["npx", "webpack", "serve", "--host", "0.0.0.0"]
