# Build the static files and the template application.
FROM node:lts-alpine3.11 AS builder-portfolio-combined

# Location of the source code.
WORKDIR /build

# Install the build dependencies.
COPY package.json .
RUN npm install

# Copy the sources and run the build.
COPY . .
RUN node_modules/.bin/gulp build


# Create the Node template application image.
FROM node:lts-alpine3.11 AS portfolio-template

ARG BUILD_TAG=local
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Node Template Application"

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "app/app.js", "app/templates", "app/data", "../public", "http://portfolio-spring:8001"]

# Create a folder to serve the template application from.
WORKDIR /srv

# Install the runtime dependencies.
COPY package.json .
RUN npm install

# Copy the template application files from the build.
COPY --from=builder /build/dist/ .


# Create an Nginx image to serve the static files.
FROM johnchase/golden-nginx:latest AS portfolio-static

ARG BUILD_TAG=local
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Ngninx Static Files"

# Create a folder to serve the static files from.
WORKDIR /srv

# Use a basic Nginx configuration.
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the distribution files.
COPY --from=builder /build/dist/public /srv/public


# Create a Nginx image for the reverse proxy front-end.
FROM johnchase/golden-nginx:latest AS portfolio-site

ARG BUILD_TAG=local
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Nginx Site Front-End"

# Use an Nginx configuration with reverse proxy's to the static files and template application.
COPY docker/combined/nginx.conf /etc/nginx/conf.d/default.conf
