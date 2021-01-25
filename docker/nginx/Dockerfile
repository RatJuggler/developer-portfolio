# Build the public files.
FROM node:lts-alpine AS test-builder

# Location of the source code.
WORKDIR /build
# Install the build dependencies.
COPY package.json .
RUN npm install
# Copy the sources and run the build.
COPY ./ .
RUN node_modules/.bin/gulp build


# Create a Nginx image.
FROM johnchase/golden-nginx:latest AS test-nginx-public-files

# Create a folder to serve the public files from.
WORKDIR /srv

# Use a custom Nginx configuration.
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the distribution files.
COPY --from=test-builder /build/dist/public /srv/public
