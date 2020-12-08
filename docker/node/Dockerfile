# Build the application.
FROM node:12.20.0 AS builder

# Location of source code.
WORKDIR /build
# Install build dependencies.
COPY package.json .
RUN npm install
# Copy the sources and run the build.
COPY ./ .
RUN node_modules/.bin/gulp build


# Create the Node application image.
FROM node:12.20.0

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "./app/app.js", "app/"]

# Create a folder to serve the application from.
WORKDIR /srv
# Install dependencies.
COPY package.json .
RUN npm install

# Copy distribution files.
COPY --from=builder /build/dist/ .
