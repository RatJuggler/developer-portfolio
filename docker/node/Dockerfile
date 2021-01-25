# Build the node application.
FROM node:lts-alpine AS builder

# Location of the source code.
WORKDIR /build

# Install the build dependencies.
COPY package.json /build
RUN npm install

# Copy the sources and run the build.
COPY ./ /build
RUN node_modules/.bin/gulp build


# Create the Node application image.
FROM node:lts-alpine AS portfolio-application

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "./app/app.js", "app/"]

# Create a folder to serve the application from.
WORKDIR /srv

# Install the runtime dependencies.
COPY package.json /srv
RUN npm install

# Copy the application files from the build.
COPY --from=builder /build/dist/ /srv
