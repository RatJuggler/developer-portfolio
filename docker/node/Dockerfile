# Install application dependencies.
FROM node:12.20.0 AS builder

ENV NODE_ENV=production

WORKDIR /install
COPY package.json .
RUN npm install

# Create Node application image.
FROM node:12.20.0

ENV NODE_ENV=production

EXPOSE 80
CMD ["node", "./app/app.js", "app/"]

WORKDIR /srv
COPY --from=builder /install/node_modules/ /srv/node_modules/
COPY app/ app/
COPY public/ public/
