# Build the static files.
FROM node:lts-alpine3.11 AS builder-portfolio-static

# Location of the source code.
WORKDIR /build

# Install the build dependencies.
COPY package*.json ./
RUN npm ci

# Copy the sources and run the build.
COPY . .
RUN node_modules/.bin/gulp build


# Create an Nginx image to serve the static files.
FROM johnchase/golden-nginx:latest AS portfolio-static

ARG BUILD_TAG=local
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Ngninx Static Files"

# Create a folder to serve the static files from.
WORKDIR /srv

# Use a basic Nginx configuration.
COPY docker/portfolio-static/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the distribution files.
COPY --from=builder-portfolio-static /build/dist/public /srv/public
