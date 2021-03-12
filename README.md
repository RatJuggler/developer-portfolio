# developer-portfolio

My developer portfolio site. The full version is deployed [here](https://jurassic-john.site) using Docker on a
[Raspberry Pi farm](https://github.com/RatJuggler/my-production-docker-build) and in case of problem the static only version is
available [here](https://ratjuggler.github.io/developer-portfolio/).

Rather than copying a random site template off the internet I'm trying to create something a bit different by building a small
microservices application using a variety of different technologies, just because. The initial idea is to build and evolve a number
of different versions of the same site but this might change as the project progresses:

1. Using static pages only to act as an outline of the design. ✔️
2. Breaking down the static pages and using a templating engine with data files to generate the content. ✔️
3. Building one or more back-ends to serve static data and using them from a further evolved set of templates. ✔️
4. Building a more dynamic front-end using a UI framework. ⬅️
5. Extend the back-end services to full CRUD capabilities.
6. Enhance templates to contain more dynamic web component elements.
7. Integrate everything into a fully working application.

I completed the static pages designs and from those built the template application using [Express](https://expressjs.com/) and
[TwigJS](https://github.com/twigjs/twig.js), extracting the data content from each page into separate JSON files. I then built two
Java services using Spring, one serves the data from a [Map](https://docs.spring.io/spring-data/keyvalue/docs/current/reference/html/#key-value)
repository the other serves the data from an in-memory H2 SQL database. These two services cheat somewhat by loading their
repository data directly from the JSON files.

The template application pulls data from one of these sources depending on the URL used to access each page. So a URL with
`/template/profile/json` pulls the JSON files directly, `/template/profile/map` uses the map repository service and
`/template/profile/sql` the SQL service.

I have now built the skeleton of a React versions of the site using hooks. It does not yet call out to the data services but has
the JSON state embedded in it. I have also only created React components for the major elements of the site so far, similar to the
template breakdown.

When deployed a front-end proxy is used to route requests for the React app, template pages or static pages and resources as
required:

![Image of Deployment](https://github.com/RatJuggler/developer-portfolio/blob/main/deployed-result.jpg)

The next step is to look at calling the data services from the React app. The table on the Skills page will also need to be
revisited as the *bootstrap-table* plugin I used in the static pages does not play well in a React application.

## Development

There are three `npm` targets which can be used during development:

- dist-build - should be run at least once after `npm install` to make the 3rd party vendor dependency files available.
- html-start - runs [browser-sync](https://browsersync.io/) so you can see changes to static files as they are made.
- template-start - runs the Node template application in development.

The Spring services rely on the shared resources bundle being available to them, so always make sure to update it in the local
repository after any changes by using `cd shared-resouces && ./mvnw install`.

The Spring applications can then be run with:

- portfolio-map - `cd portfolio-map && ./mvnw spring-boot:run`
- portfolio-sql - `cd portfolio-sql && ./mvnw spring-boot:run`

## Docker Images

Docker files are available to create images for deployment to other environments. They all make use of multi-stage docker files and
at the moment I'm using two build commands for each image when testing so that I can tag the builders. This helps when I'm pruning
images but want to keep the builders for re-use when building ARM images on a Raspberry Pi, especially the very large Java builder
images. Simple health checks have been added (mostly using the convenient `curl` anti-pattern 😒) and metrics exposed for the Java
and Node applications.

### shared-resources

This image is for building only. It creates a Maven base image with common dependencies installed along with the shared resources
which can then used by the other Java image builds.

Create the image with:

    docker build -f shared-resources/Dockerfile -t shared-resources:local shared-resources

### portfolio-static

The public static files served using an instance of my [Nginx golden image](https://github.com/RatJuggler/my-production-docker-build).

Create an image with (repository reference required to access golden Nginx image):

    docker build -f docker/portfolio-static/Dockerfile --target builder-portfolio-static -t builder-portfolio-static:local .
    docker build -f docker/portfolio-static/Dockerfile --target portfolio-static --build-arg REPOSITORY=johnchase/ -t portfolio-static:test .

Then run with: `docker run -p 8080:80 -d portfolio-static:test`

Content will be available at: `http://localhost:8080`

### portfolio-template

A Node instance for the template application.

Create the image with:

    docker build -f docker/portfolio-template/Dockerfile --target builder-portfolio-template -t builder-portfolio-template:local .
    docker build -f docker/portfolio-template/Dockerfile --target portfolio-template -t portfolio-template:test .

Then run with: `docker run -p 3000:3000 -d portfolio-template:test`

Content will be available at: `http://localhost:3000`

### portfolio-react

The React app is served using an instance of my [Nginx golden image](https://github.com/RatJuggler/my-production-docker-build).

Create an image with (repository reference required to access golden Nginx image):

    docker build -f portfolio-react/Dockerfile --target builder-portfolio-react -t builder-portfolio-react:local .
    docker build -f portfolio-react/Dockerfile --target portfolio-react --build-arg REPOSITORY=johnchase/ -t portfolio-react:test .

Then run with: `docker run -p 8080:80 -d portfolio-react:test`

Content will be available at: `http://localhost:8080`

### portfolio-map

A Java instance for the map repository Spring application. The shared-resources image is required.

Create the image with:

    docker build -f portfolio-map/Dockerfile --target builder-portfolio-map -t builder-portfolio-map:local portfolio-map
    docker build -f portfolio-map/Dockerfile --target portfolio-map -t portfolio-map:test portfolio-map

Then run with: `docker run -p 8001:8001 portfolio-map:test -d`

Content will be available at: `http://localhost:8001/(profile|skills|career|interests)`

### portfolio-sql

A Java instance for the SQL repository Spring application. The shared-resources image is required.

Create the image with:

    docker build -f portfolio-sql/Dockerfile --target builder-portfolio-sql -t builder-portfolio-sql:local portfolio-sql
    docker build -f portfolio-sql/Dockerfile --target portfolio-sql -t portfolio-sql:test portfolio-sql

Then run with: `docker run -p 8002:8002 portfolio-sql:test -d`

Content will be available at: `http://localhost:8002/(profile|skills|career|interests)`

## Full Application

Docker-compose configurations allow the complete application to be built and run. Because the Java build process is so resource
intensive I have tried to ensure images layers are kept for re-use, and not discarded by accident (pruned), by tagging intermediate
parts of the multi-stage docker builds. The build also uses a combined multi-stage docker build for the static and template images
to save time. An additional image is built for the front-end proxy and is again based on my [Nginx golden image](https://github.com/RatJuggler/my-production-docker-build).

Build the shared resources with: `docker-compose -f docker-compose-shared.yml build`

Build the builders with: `docker-compose -f docker-compose-builders.yml build`

Build and run the images with: `docker-compose up -d`

Content will be available at: `http://localhost:8080`

Environment variables can be used to configure image tagging (see the file).

## Attributions:

- HTML5 Boilerplate - Front-end template [from here](https://html5boilerplate.com/).
- Boostrap - Front-end development toolkit [from here](https://getbootstrap.com/).
- Table - Uses the Bootstrap table extension [from here](https://bootstrap-table.com/).
- Vertical Carousel - Based on code [from here](https://www.codeply.com/p/JxZ8htyOFN).
- Cookie Banner - Based on code [from here](https://github.com/kolappannathan/bootstrap-cookie-banner).

Where the use is "based" on I have taken the initial code and rewritten it, removing any jQuery and adding my own tweaks.
