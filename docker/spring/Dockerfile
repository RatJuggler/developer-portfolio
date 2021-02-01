# Create a Java image to run the Spring application.
FROM adoptopenjdk:11-jre AS portfolio-spring

COPY target/*.jar app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
