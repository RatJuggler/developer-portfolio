# Build the service.
FROM maven:3-adoptopenjdk-11 AS builder-sql

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
LABEL description="Developer Portfolio - Java Spring - SQL Data Service"

EXPOSE 8001
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

# Create a folder to run the service from.
WORKDIR /app

# Copy the service from the build.
COPY --from=builder /build/target/*.jar app.jar
