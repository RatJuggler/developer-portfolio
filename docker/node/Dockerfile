# Build the public files and application.
FROM node:lts-alpine AS test-builder

# Location of the source code.
WORKDIR /build
# Install the build dependencies.
COPY package.json .
RUN npm install
# Copy the sources and run the build.
COPY ./ .
RUN node_modules/.bin/gulp build


# Create a Node application image.
FROM node:lts-alpine AS test-node-application

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "./app/app.js", "app/"]

# Create a folder to serve the application from.
WORKDIR /srv
# Install the runtime dependencies.
COPY package.json .
RUN npm install

# Copy the distribution files.
COPY --from=test-builder /build/dist/ .
