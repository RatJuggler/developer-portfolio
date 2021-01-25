# developer-portfolio

My developer portfolio website. The full version is deployed [here](https://jurassic-john.site) and in case of problem the static
only version is available [here](https://ratjuggler.github.io/developer-portfolio/).

Rather than copying a random template off the internet I'm trying to create something a bit different from scratch (or at least 
only adapting random bits off the internet that I can understand and modify, like all good projects do 😄).

The idea is to build a number of different versions of the same site:

1. Using static pages only to act as an outline of the design. 
2. Breaking down the static pages and using a templating engine with data files to generate the content.
3. Building some sort of back end to serve the data and using that from a further evolved set of templates.
4. Expanding the back end and building a front end using a web component framework.

I've completed some outline designs and started building the template version.

Content for the site will include:

- Profile - Short introductory paragraph about myself with some social media links.
- Skills - Table highlighting my hard & soft skills with option to sort, filter and mark items.
- Career - Rough timeline from when I started with the dinosaurs to the present day space age.
- Interests - Brief details on my outside interests. 

### Development

There are three `npm` targets which can be used during development:

- static-build - should be run at least once after `npm install` to make the 3rd party vendor dependency files available.
- static-start - runs [browser-sync](https://browsersync.io/) so you can see changes to static files as they are made.
- template-start - runs the template Node application in development.

### Testing

Two Docker file are available to create individual images for testing:
 
- docker / nginx - The public static files served from an [Nginx](https://www.nginx.com/) instance. 
  
  Create an image with: `docker build -f docker/nginx/Dockerfile -t portfolio-static .`
   
  Then run with: `docker run -d -p 8080:80 portfolio-static`

  Content will be available at: `http://localhost:8080`


- docker / node - The Node application, which also serves a copy of the public static files.
  
  Create an image with: `docker build -f docker/node/Dockerfile -t mynode .`

  Then run with: `docker run -d -p 3000:3000 mynode`

  Content will be available at: `http://localhost:3000`

### Production Example

A combined Docker file, with a docker-compose configuration, is available which could serve as the basis for a production
environment but must not be used directly without at least adding some proper Nginx security configuration.

- docker / combined - The public static files are served from Nginx whilst requests for template pages are proxied to the Node 
  application.
  
  Create and run the images with: `docker-compose up -d`

  Content will be available at: `http://localhost:8080`

For a more complete production implementation see [My Production Docker Build](https://github.com/RatJuggler/my-production-docker-build).

### Attributions:

- HTML5 Boilerplate - Front-end template [from here](https://html5boilerplate.com/).
- Boostrap - Front-end development toolkit [from here](https://getbootstrap.com/).
- Table - Uses the Bootstrap table extension [from here](https://bootstrap-table.com/).
- Vertical Carousel - Based on code [from here](https://www.codeply.com/p/JxZ8htyOFN).
- Cookie Banner - Based on code [from here](https://github.com/kolappannathan/bootstrap-cookie-banner).

Where the use is "based" on I have taken the initial code and rewritten it, removing any jQuery and adding my own tweaks.
