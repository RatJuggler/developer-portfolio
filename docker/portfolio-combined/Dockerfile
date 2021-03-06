# Define gloabl args for multi-stage docker file.
ARG REGISTRY=""
ARG REPOSITORY=""
ARG BUILD_TAG=local

# Build the static files and the template application.
FROM node:lts-alpine3.11 AS builder-portfolio-combined

# Location of the source code.
WORKDIR /build

# Install the build dependencies.
COPY package*.json ./
RUN npm ci

# Copy the sources and run the build.
COPY . .
RUN node_modules/.bin/gulp build


# Create the Node template application image.
FROM node:lts-alpine3.11 AS portfolio-template

ARG BUILD_TAG
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Node Template Application"

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "app/app.js", "app/templates", "../public", "http://portfolio-static:80/json", "http://portfolio-map:8001", "http://portfolio-sql:8002"]

HEALTHCHECK --interval=5m --timeout=30s --start-period=60s --retries=3 \
    CMD ["node", "app/healthcheck.js"]

# Create a folder to serve the template application from.
WORKDIR /srv

# Install the runtime dependencies.
COPY package*.json ./
RUN npm ci

# Copy the template application files from the build.
COPY --from=builder-portfolio-combined /build/dist/ .


# Create an Nginx image to serve the static files.
ARG REGISTRY
ARG REPOSITORY
FROM ${REGISTRY}${REPOSITORY}golden-nginx:latest AS portfolio-static

ARG BUILD_TAG
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Ngninx Static Files"

# Create a folder to serve the static files from.
WORKDIR /srv

# Use a basic Nginx configuration.
COPY docker/portfolio-static/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the distribution files.
COPY --from=builder-portfolio-combined /build/dist/public /srv/public


# Create a Nginx image for the reverse proxy front-end.
ARG REGISTRY
ARG REPOSITORY
FROM ${REGISTRY}${REPOSITORY}golden-nginx:latest AS portfolio-site

ARG BUILD_TAG
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Nginx Site Front-End"

# Use an Nginx configuration with reverse proxy's to the static files and template application.
COPY docker/portfolio-combined/nginx.conf /etc/nginx/conf.d/default.conf
