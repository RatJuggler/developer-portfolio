# Build the public files and application.
FROM node:lts-alpine AS builder

# Location of the source code.
WORKDIR /build
# Install the build dependencies.
COPY package.json .
RUN npm install
# Copy the sources and run the build.
COPY ./ .
RUN node_modules/.bin/gulp build


# Create the Node application image.
FROM node:lts-alpine AS node-application

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "./app/app.js", "app/"]

# Create a folder to serve the application from.
WORKDIR /srv
# Install the runtime dependencies.
COPY package.json .
RUN npm install
# Copy the application files from the build.
COPY --from=builder /build/dist/ .


# Create the Nginx web server image.
FROM nginx:stable-alpine AS nginx-public-files

EXPOSE 80

# Use a basic Nginx configuration with a reverse proxy to the application.
COPY docker/combined/nginx.conf /etc/nginx/conf.d/default.conf

# Create a folder to serve the public files from.
WORKDIR /srv
# Copy the static distribution files from the build.
COPY --from=builder /build/dist/public ./public
