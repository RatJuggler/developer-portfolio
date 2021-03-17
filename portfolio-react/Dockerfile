# Build the react application.
FROM node:lts-alpine3.11 AS builder-portfolio-react

# Location of the source code.
WORKDIR /build

# Install the build dependencies.
COPY package*.json ./
RUN npm ci

# Don't inline scripts to meet CSP requirements.
ENV INLINE_RUNTIME_CHUNK=false

# Copy the sources and run the build.
COPY . .
RUN npm run vendor
RUN npm run build


# Create an Nginx image to serve the react files.
ARG REGISTRY
ARG REPOSITORY
FROM ${REGISTRY}${REPOSITORY}golden-nginx:latest AS portfolio-react

ARG BUILD_TAG
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Ngninx React Files"

# Create a folder to serve the static files from.
WORKDIR /srv

# Use a basic Nginx configuration.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the distribution files.
COPY --from=builder-portfolio-react /build/build /srv/react
