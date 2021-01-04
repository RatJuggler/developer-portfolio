# Build the public files.
FROM node:12-alpine AS test-builder

# Location of the source code.
WORKDIR /build
# Install the build dependencies.
COPY package.json .
RUN npm install
# Copy the sources and run the build.
COPY ./ .
RUN node_modules/.bin/gulp build


# Create a Nginx image.
FROM nginx:alpine AS test-nginx-public-files

EXPOSE 80

# Use a custom Nginx configuration.
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Create a folder to serve the public files from.
WORKDIR /srv
# Copy the distribution files.
COPY --from=test-builder /build/dist/public ./public
