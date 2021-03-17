"use strict";

// Load plugins
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const gulp = require("gulp");
const gulpif = require("gulp-if");
const header = require("gulp-header");
const merge = require("merge-stream");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const rev = require('gulp-rev');
const revdel = require('gulp-rev-delete-original');
const revRewrite = require('gulp-rev-rewrite');
const terser = require("gulp-terser");
const fs = require("fs");

// Load package.json for banner
const pkg = require('./package.json');

// Set the banner content
const banner = '/*!\n * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n */\n';

function cleanVendor() {
    return del(["public/vendor/"]);
}

function cleanDist() {
    return del(["dist/"]);
}

// Bring third party dependencies from node_modules into the vendor directory.
function createVendor() {
    // Bootstrap
    let bootstrapJS = gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.*', '!./node_modules/bootstrap/dist/js/bootstrap.bundle.*'])
        .pipe(gulp.dest('./public/vendor/bootstrap/js'));
    let bootstrapCSS = gulp.src('./node_modules/bootstrap/dist/css/bootstrap.*')
        .pipe(gulp.dest('./public/vendor/bootstrap/css'));
    // Bootstrap-table
    let bootstrapTableJS = gulp.src('./node_modules/bootstrap-table/dist/bootstrap-table.*js')
        .pipe(gulp.dest('./public/vendor/bootstrap-table/js'));
    let bootstrapTableCSS = gulp.src('./node_modules/bootstrap-table/dist/bootstrap-table.*css')
        .pipe(gulp.dest('./public/vendor/bootstrap-table/css'));
    // Bootstrap-table filer control
    let bootstrapTableFilterJS = gulp.src('./node_modules/bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control*.js')
        .pipe(gulp.dest('./public/vendor/bootstrap-table/js'));
    let bootstrapTableFilerCSS = gulp.src('./node_modules/bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control*.css')
        .pipe(gulp.dest('./public/vendor/bootstrap-table/css'));
    // Font Awesome
    let fontAwesomeCSS = gulp.src('./node_modules/@fortawesome/fontawesome-free/css/all.*')
        .pipe(gulp.dest('./public/vendor/fontawesome-free/css'));
    let fontAwesome = gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
        .pipe(gulp.dest('./public/vendor/fontawesome-free/webfonts'));
    // jQuery
    let jquery = gulp.src(['./node_modules/jquery/dist/jquery.*', '!./node_modules/jquery/dist/jquery.slim.*'])
        .pipe(gulp.dest('./public/vendor/jquery'));
    // Popper
    let popper = gulp.src('./node_modules/popper.js/dist/umd/popper.*')
        .pipe(gulp.dest('./public/vendor/popper'));
    return merge(bootstrapJS, bootstrapCSS, bootstrapTableJS, bootstrapTableCSS, bootstrapTableFilterJS, bootstrapTableFilerCSS,
        fontAwesome, fontAwesomeCSS, jquery, popper);
}

function copyModuleDist() {
    // Bootstrap
    let bootstrapJS = gulp.src('./public/vendor/bootstrap/js/*.min.js')
        .pipe(gulp.dest('./dist/public/vendor/bootstrap/js'));
    let bootstrapCSS = gulp.src('./public/vendor/bootstrap/css/*.min.css')
        .pipe(gulp.dest('./dist/public/vendor/bootstrap/css'));
    // Bootstrap-table & filter control
    let bootstrapTableJS = gulp.src('./public/vendor/bootstrap-table/js/*.min.js')
        .pipe(gulp.dest('./dist/public/vendor/bootstrap-table/js'));
    let bootstrapTableCSS = gulp.src('./public/vendor/bootstrap-table/css/*.min.css')
        .pipe(gulp.dest('./dist/public/vendor/bootstrap-table/css'));
    // Font Awesome
    let fontAwesomeCSS = gulp.src('./public/vendor/fontawesome-free/css/*.min.css')
        .pipe(gulp.dest('./dist/public/vendor/fontawesome-free/css'));
    let fontAwesome = gulp.src('./public/vendor/fontawesome-free/webfonts/*.*')
        .pipe(gulp.dest('./dist/public/vendor/fontawesome-free/webfonts'));
    // jQuery
    let jquery = gulp.src('./public/vendor/jquery/*.min.*')
        .pipe(gulp.dest('./dist/public/vendor/jquery'));
    // Popper
    let popper = gulp.src('./public/vendor/popper/*.min.*')
        .pipe(gulp.dest('./dist/public/vendor/popper'));
    return merge(bootstrapJS, bootstrapCSS, bootstrapTableJS, bootstrapTableCSS, fontAwesome, fontAwesomeCSS, jquery, popper);
}

function copyStaticDist() {
    // General webroot files
    let webRoot = gulp.src(['./public/*.!(html)*', './public/**/vendor/*'])
        .pipe(gulp.dest('./dist/public'));
    // Images
    let images = gulp.src('./public/img/*.*')
        .pipe(gulp.dest('./dist/public/img'));
    // Static Data
    let json = gulp.src('./public/json/*.json')
        .pipe(gulp.dest('./dist/public/json'));
    // Static HTML
    let html = gulp.src('./public/**/*.html')
        .pipe(gulpif(staticBuild, replace('"/template', '"https://jurassic-john.site/template')))
        .pipe(gulpif(staticBuild, replace('"/react', '"https://jurassic-john.site/react')))
        .pipe(gulpif(!staticBuild, replace(/\.\.?\//g, '/')))
        .pipe(gulpif(!staticBuild, replace('.html', '')))
        .pipe(replace('.min.js', '.js'))
        .pipe(replace('.css', '.min.css'))
        .pipe(replace('.js', '.min.js'))
        .pipe(gulp.dest('dist/public'));
    return merge(webRoot, images, json, html);
}

function copyAppDist() {
    // Application JS
    let appJS = gulp.src('./src/main/webapp/*.js')
        .pipe(gulp.dest('dist/app'));
    // Application Templates
    let appTemplates = gulp.src('./src/main/webapp/templates/*.twig')
        .pipe(replace('.min.js', '.js'))
        .pipe(replace('.css', '.min.css'))
        .pipe(replace('.js', '.min.js'))
        .pipe(gulp.dest('dist/app/templates'));
    return merge(appJS, appTemplates);
}

// Minify CSS task
function mincss() {
    return gulp.src("public/css/*.css")
        .pipe(plumber())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist/public/css"));
}

// Minify JS task
function minjs() {
    return gulp.src('./public/js/*.js')
        .pipe(terser())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/public/js'));
}

// Cache busting.
function revision() {
    return gulp.src('dist/public/**/*.{css,js}')
        .pipe(rev())
        .pipe(revdel())
        .pipe(gulp.dest('dist/public'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/public'));
}
// Use cache busting.
function rewrite() {
    const manifest = fs.readFileSync('dist/public/rev-manifest.json');
    let staticHTML = gulp.src('dist/public/**/*.html')
        .pipe(revRewrite({ manifest }))
        .pipe(gulp.dest('dist/public'));
    let staticTwig = gulp.src('dist/app/**/*.twig')
        .pipe(revRewrite({ manifest }))
        .pipe(gulp.dest('dist/app'));
    return merge(staticHTML, staticTwig);
}

let staticBuild = false;

// Define complex tasks
const build = gulp.series(createVendor, gulp.parallel(copyModuleDist, copyStaticDist, copyAppDist), gulp.parallel(mincss, minjs), revision, rewrite);
const rebuild = gulp.series(gulp.parallel(cleanVendor, cleanDist), build);
const ghPagesBuild = gulp.series(function (cb) { staticBuild = true; cb(); }, build);

// Document tasks
build.description = "Build a distribution ready version of the static and template files.";
rebuild.description = "Clear down vendor and distribution then run a build.";
ghPagesBuild.description = "Build for GitHub pages including hardcoded links to dynamic site.";

// Export tasks
exports.build = build;
exports.rebuild = rebuild;
exports.ghPagesBuild = ghPagesBuild;
exports.default = rebuild;
