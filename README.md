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

- static-build - should be run at least once after `npm install` to make the 3rd party vendor dependency files available.
- static-start - runs [browser-sync](https://browsersync.io/) so you can see changes to static files as they are made.
- template-start - runs the Node template application in development.

The Spring application can be run with: `./mvnw spring-boot:run`

## Test Images

Four Docker file are available to create individual images for testing:
 
### portfolio-static

The public static files served using an instance of my [Nginx golden image](https://github.com/RatJuggler/my-production-docker-build). 
  
Create an image with:
  
    docker build -f docker/nginx/Dockerfile --target builder-portfolio-static -t builder-portfolio-static:local .
    docker build -f docker/nginx/Dockerfile --target portfolio-static -t portfolio-static:test .
   
Then run with: `docker run -p 8080:80 portfolio-static:test -d`

Content will be available at: `http://localhost:8080`

### portfolio-template

A Node instance for the template application, which also serves a copy of the public static files.
  
Create an image with:
  
    docker build -f docker/node/Dockerfile --target builder-portfolio-template -t builder-portfolio-template:local .
    docker build -f docker/node/Dockerfile --target portfolio-template -t portfolio-template:test .

Then run with: `docker run -p 3000:3000 portfolio-template:test -d`

Content will be available at: `http://localhost:3000`

### portfolio-simple

A Java instance for the simple static data Spring application.

Create an image with:
  
    docker build -f simple-service/Dockerfile --target builder-portfolio-simple -t builder-portfolio-simple:local simple-service
    docker build -f simple-service/Dockerfile --target portfolio-simple -t portfolio-simple:test simple-service

Then run with: `docker run -p 8001:8001 portfolio-simple:test -d`

Content will be available at: `http://localhost:8001/(profile|skills|career|interests)`

### portfolio-sql

A Java instance for the SQL data Spring application.

Create an image with:
  
    docker build -f sql-service/Dockerfile --target builder-portfolio-sql -t builder-portfolio-site:local sql-service
    docker build -f sql-service/Dockerfile --target portfolio-sql -t portfolio-sql:test sql-service

Then run with: `docker run -p 8001:8001 portfolio-sql:test -d`

Content will be available at: `http://localhost:8002/(profile|skills|career|interests)`

## Full Application

A docker-compose configuration, with a multi-stage Docker build, allows the complete application to be built and run. This includes 
an instance of Nginx to serve the public static files, a Node instance for the template application, a Java instance for the Spring 
application and a front-end proxy which routes requests to these two instances as required. The proxy is also based on my [Nginx golden image](https://github.com/RatJuggler/my-production-docker-build).

  Create and run all the images with: `docker-compose up -d`

  Content will be available at: `http://localhost:8080`

![Image of Deployment](https://github.com/RatJuggler/developer-portfolio/blob/main/deployed-result.jpg)

## Attributions:

- HTML5 Boilerplate - Front-end template [from here](https://html5boilerplate.com/).
- Boostrap - Front-end development toolkit [from here](https://getbootstrap.com/).
- Table - Uses the Bootstrap table extension [from here](https://bootstrap-table.com/).
- Vertical Carousel - Based on code [from here](https://www.codeply.com/p/JxZ8htyOFN).
- Cookie Banner - Based on code [from here](https://github.com/kolappannathan/bootstrap-cookie-banner).

Where the use is "based" on I have taken the initial code and rewritten it, removing any jQuery and adding my own tweaks.
