# Build the public files and application.
FROM node:12-alpine AS builder

# Location of the source code.
WORKDIR /build
# Install the build dependencies.
COPY package.json .
RUN npm install
# Copy the sources and run the build.
COPY ./ .
RUN node_modules/.bin/gulp build


# Create the Nginx image.
FROM nginx:alpine AS nginx-public-files

# Use a custom Nginx configuration.
COPY docker/combined/nginx.conf /etc/nginx/conf.d/default.conf
# Create a folder to serve the public files from.
WORKDIR /srv
# Copy the distribution files.
COPY --from=builder /build/dist/public ./public


# Create the Node application image.
FROM node:12-alpine AS node-application

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "./app/app.js", "app/"]

# Create a folder to serve the application from.
WORKDIR /srv
# Install the runtime dependencies.
COPY package.json .
RUN npm install

# Copy the distribution files.
COPY --from=builder /build/dist/ .
