# developer-portfolio

My developer portfolio website. The full version is deployed [here](https://jurassic-john.site) and in case of problem the static
only version is available [here](https://ratjuggler.github.io/developer-portfolio/).

Rather than copying a random template off the internet I'm trying to create something a bit different from scratch.

The idea is to build a number of different versions of the same site:

1. Using static pages only to act as an outline of the design. 
2. Breaking down the static pages and using a templating engine with data files to generate the content.
3. Building some sort of back end to serve the data and using that from a further evolved set of templates.
4. Expanding the back end and building a front end using a web component framework.

I've completed some outline designs using static pages and from those built a template version. I've also built the two Java 
services using Spring, and I'm currently integrating these with the templates. 

Content for the site includes:

- Profile - Short introductory paragraph about myself with some social media links.
- Skills - Table highlighting my hard & soft skills with option to sort, filter and mark items.
- Career - Rough timeline from when I started with the dinosaurs to the present day space age.
- Interests - Brief details on my outside interests. 

## Development

There are three `npm` targets which can be used during development:

- ui-build - should be run at least once after `npm install` to make the 3rd party vendor dependency files available.
- html-start - runs [browser-sync](https://browsersync.io/) so you can see changes to static files as they are made.
- template-start - runs the Node template application in development.

The Spring services rely on the shared resources bundle being available to them, so always make sure to update it in the local 
repository after any changes by using `cd shared-resouces && ./mvnw install`.

The Spring application can then be run with:

- portfolio-simple - `cd portfolio-simple && ./mvnw spring-boot:run`
- portfolio-sql - `cd portfolio-sql && ./mvnw spring-boot:run`

## Docker Images

Docker files are available to create images for deployment to other environments. They all make use of multi-stage docker files and 
at the moment I'm using two build commands for each image when testing so that I can tag the builders. This helps when I'm pruning 
images but want to keep the builders for re-use, especially the Java builders.

### portfolio-static

The public static files served using an instance of my [Nginx golden image](https://github.com/RatJuggler/my-production-docker-build). 

Create an image with:

    docker build -f docker/portfolio-static/Dockerfile --target builder-portfolio-static -t builder-portfolio-static:local .
    docker build -f docker/portfolio-static/Dockerfile --target portfolio-static -t portfolio-static:test .

Then run with: `docker run -p 8080:80 portfolio-static:test -d`

Content will be available at: `http://localhost:8080`

### portfolio-template

A Node instance for the template application, which also serves a copy of the public static files.
  
Create the image with:

    docker build -f docker/portfolio-template/Dockerfile --target builder-portfolio-template -t builder-portfolio-template:local .
    docker build -f docker/portfolio-template/Dockerfile --target portfolio-template -t portfolio-template:test .

Then run with: `docker run -p 3000:3000 portfolio-template:test -d`

Content will be available at: `http://localhost:3000`

### shared-resources

This image is for building only. It creates a Maven base image with common dependencies installed along with the shared resources
which can then used by the other Java image builds.

Create the image with:

    docker build -f shared-resources/Dockerfile -t shared-resources:local shared-resources

### portfolio-simple

A Java instance for the simple static data Spring application. The shared-resources image is required. 

Create the image with:
  
    docker build -f portfolio-simple/Dockerfile --target builder-portfolio-simple -t builder-portfolio-simple:local portfolio-simple
    docker build -f portfolio-simple/Dockerfile --target portfolio-simple -t portfolio-simple:test portfolio-simple

Then run with: `docker run -p 8001:8001 portfolio-simple:test -d`

Content will be available at: `http://localhost:8001/(profile|skills|career|interests)`

### portfolio-sql

A Java instance for the SQL data Spring application. The shared-resources image is required.

Create the image with:
  
    docker build -f portfolio-sql/Dockerfile --target builder-portfolio-sql -t builder-portfolio-sql:local portfolio-sql
    docker build -f portfolio-sql/Dockerfile --target portfolio-sql -t portfolio-sql:test portfolio-sql

Then run with: `docker run -p 8001:8001 portfolio-sql:test -d`

Content will be available at: `http://localhost:8002/(profile|skills|career|interests)`

## Full Application

A docker-compose configuration allows the complete application to be built and run. It uses a combined multi-stage docker build for
the static and template images to save time and also includes a front-end proxy which routes requests to the static pages or 
templates as required. The proxy is again based on my [Nginx golden image](https://github.com/RatJuggler/my-production-docker-build).

  Build all the images with: `docker-compose --profile="builders" build`

  Run the images with: `docker-compose up -d`
``
  Content will be available at: `http://localhost:8080`

Environment variables can be used to configure image tagging (see the file).

![Image of Deployment](https://github.com/RatJuggler/developer-portfolio/blob/main/deployed-result.jpg)

## Attributions:

- HTML5 Boilerplate - Front-end template [from here](https://html5boilerplate.com/).
- Boostrap - Front-end development toolkit [from here](https://getbootstrap.com/).
- Table - Uses the Bootstrap table extension [from here](https://bootstrap-table.com/).
- Vertical Carousel - Based on code [from here](https://www.codeply.com/p/JxZ8htyOFN).
- Cookie Banner - Based on code [from here](https://github.com/kolappannathan/bootstrap-cookie-banner).

Where the use is "based" on I have taken the initial code and rewritten it, removing any jQuery and adding my own tweaks.
