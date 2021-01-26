# Build the public static files.
FROM node:lts-alpine AS builder

# Location of the source code.
WORKDIR /build

# Install the build dependencies.
COPY package.json /build
RUN npm install

# Copy the sources and run the build.
COPY ./ /build
RUN node_modules/.bin/gulp build


# Create an Nginx image to serve the static files.
FROM johnchase/golden-nginx:latest AS portfolio-static

ARG BUILD_TAG=local
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio Static Files"

# Create a folder to serve the static files from.
WORKDIR /srv

# Use a custom Nginx configuration.
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the distribution files.
COPY --from=builder /build/dist/public /srv/public
