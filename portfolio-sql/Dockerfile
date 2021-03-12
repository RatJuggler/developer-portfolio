# Build the service.
ARG REGISTRY=""
ARG REPOSITORY=""
FROM ${REGISTRY}${REPOSITORY}builder-shared-resources:latest AS builder-portfolio-sql

# Location of the source code.
WORKDIR /build

# Install the build dependencies.
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy the sources and run the build but skip tests.
# Can't use '--offline' option, missing some dependecies(!?).
# Need a way to only skip tests for Pi build.
COPY . .
RUN mvn package -Dmaven.test.skip=true


# Create a Java image to run the service.
FROM adoptopenjdk:11-jre AS portfolio-sql

ARG BUILD_TAG=local
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Java Spring - SQL Repository Service"

EXPOSE 8002

ENTRYPOINT ["java", "-jar", "/app/app.jar", "--jsonUrl=http://portfolio-static/json"]

HEALTHCHECK --interval=5m --timeout=30s --start-period=60s --retries=3 \
    CMD curl --silent --fail http://localhost:8002/actuator/health \
    | jq --exit-status -n 'inputs | if has("status") then .status=="UP" else false end' > /dev/null || exit 1

# Create a folder to run the service from.
WORKDIR /app

# Copy the service from the build.
COPY --from=builder-portfolio-sql /build/target/*.jar app.jar
