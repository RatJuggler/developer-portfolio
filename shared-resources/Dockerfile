# Build the shared base image.
FROM maven:3-adoptopenjdk-11 AS builder-shared-resources

# Location of the source code.
WORKDIR /shared

# Install the build dependencies.
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy the resources and install in local repository
COPY . .
RUN mvn install
