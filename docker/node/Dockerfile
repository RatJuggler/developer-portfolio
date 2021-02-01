# Build the template application.
FROM node:lts-alpine AS builder

# Location of the source code.
WORKDIR /build

# Install the build dependencies.
COPY package.json /build
RUN npm install

# Copy the sources and run the build.
COPY ./ /build
RUN node_modules/.bin/gulp build


# Create the Node template application image.
FROM node:lts-alpine AS portfolio-template

ARG BUILD_TAG=local
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Node Template Application"

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "app/app.js", "app/templates", "app/data", "http://localhost:8001"]

# Create a folder to serve the template application from.
WORKDIR /srv

# Install the runtime dependencies.
COPY package.json /srv
RUN npm install

# Copy the template application files from the build.
COPY --from=builder /build/dist/ /srv
