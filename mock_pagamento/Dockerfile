FROM node:alpine
RUN apk update && apk add --no-cache dumb-init
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["dumb-init", "node", "server.js"]