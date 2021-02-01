# Build the Spring application.
FROM maven:3-adoptopenjdk-11 AS builder

# Location of the source code.
WORKDIR /build

# Install the build dependencies.
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the sources and run the build but skip tests.
# Can't use '--offline' option, missing some dependecies(!?).
# Need a way to only skip tests for Pi build.
COPY . .
RUN mvn package -Dmaven.test.skip=true


# Create a Java image to run the Spring application.
FROM adoptopenjdk:11-jre AS portfolio-spring

ARG BUILD_TAG=local
LABEL build_tag=${BUILD_TAG}
LABEL description="Developer Portfolio - Java Spring Application"

EXPOSE 8001
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

# Create a folder to run the Spring application from.
WORKDIR /app

# Copy the Spring application from the build.
COPY --from=builder /build/target/*.jar app.jar
