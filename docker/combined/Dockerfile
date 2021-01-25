# Build the public static files and the node application.
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


# Create an Nginx image to serve the static files.
FROM johnchase/golden-nginx:latest AS portfolio-static

# Create a folder to serve the static files from.
WORKDIR /srv

# Use a custom Nginx configuration.
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the distribution files.
COPY --from=builder /build/dist/public /srv/public


# Create a Nginx image for the reverse proxy front-end.
FROM johnchase/golden-nginx:latest AS portfolio-site

# Use a basic Nginx configuration with reverse proxy's to the static files and application.
COPY docker/combined/nginx.conf /etc/nginx/conf.d/default.conf
