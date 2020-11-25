"use strict";

// Load plugins
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const gulp = require("gulp");
const header = require("gulp-header");
const merge = require("merge-stream");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const replace = require("gulp-replace")
const terser = require("gulp-terser");

// Load package.json for banner
const pkg = require('./package.json');

// Set the banner content
const banner = ['/*!\n',
    ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' */\n',
    '\n'
].join('');

function cleanVendor() {
    return del(["./src/vendor/"]);
}

function cleanDist() {
    return del(["./dist/"]);
}

function cleanModules() {
    return del(["./node_modules/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function copyModules() {
    // Bootstrap
    let bootstrapJS = gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.*', '!./node_modules/bootstrap/dist/js/bootstrap.bundle.*'])
        .pipe(gulp.dest('./src/vendor/bootstrap/js'));
    let bootstrapCSS = gulp.src('./node_modules/bootstrap/dist/css/bootstrap.*')
        .pipe(gulp.dest('./src/vendor/bootstrap/css'));
    // Bootstrap-table
    let bootstrapTableJS = gulp.src('./node_modules/bootstrap-table/dist/bootstrap-table.*js')
        .pipe(gulp.dest('./src/vendor/bootstrap-table/js'));
    let bootstrapTableCSS = gulp.src('./node_modules/bootstrap-table/dist/bootstrap-table.*css')
        .pipe(gulp.dest('./src/vendor/bootstrap-table/css'));
    // Bootstrap-table filer control
    let bootstrapTableFilterJS = gulp.src('./node_modules/bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control*.js')
        .pipe(gulp.dest('./src/vendor/bootstrap-table/js'));
    let bootstrapTableFilerCSS = gulp.src('./node_modules/bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control*.css')
        .pipe(gulp.dest('./src/vendor/bootstrap-table/css'));
    // Font Awesome
    let fontAwesomeCSS = gulp.src('./node_modules/@fortawesome/fontawesome-free/css/all.*')
        .pipe(gulp.dest('./src/vendor/fontawesome-free/css'));
    let fontAwesome = gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
        .pipe(gulp.dest('./src/vendor/fontawesome-free/webfonts'));
    // jQuery
    let jquery = gulp.src(['./node_modules/jquery/dist/*', '!./node_modules/jquery/dist/jquery.slim.*'])
        .pipe(gulp.dest('./src/vendor/jquery'));
    return merge(bootstrapJS, bootstrapCSS, bootstrapTableJS, bootstrapTableCSS, bootstrapTableFilterJS, bootstrapTableFilerCSS, fontAwesome, fontAwesomeCSS, jquery);
}

function copyDist() {
    let mySrc = gulp.src(['./src/*.*', '!./src/*.html'])
        .pipe(gulp.dest('./dist'));
    let myImg = gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./dist/img'));
    let myHTML = gulp.src('./src/*.html')
        .pipe(replace('.css', '.min.css'))
        .pipe(replace('.js', '.min.js'))
        .pipe(gulp.dest('./dist'));
    // Bootstrap
    let bootstrapJS = gulp.src('./src/vendor/bootstrap/js/*.min.js')
        .pipe(gulp.dest('./dist/vendor/bootstrap/js'));
    let bootstrapCSS = gulp.src('./src/vendor/bootstrap/css/*.min.css')
        .pipe(gulp.dest('./dist/vendor/bootstrap/css'));
    // Bootstrap-table & filter control
    let bootstrapTableJS = gulp.src('./src/vendor/bootstrap-table/js/*.min.js')
        .pipe(gulp.dest('./dist/vendor/bootstrap-table/js'));
    let bootstrapTableCSS = gulp.src('./src/vendor/bootstrap-table/css/*.min.css')
        .pipe(gulp.dest('./dist/vendor/bootstrap-table/css'));
    // Font Awesome
    let fontAwesomeCSS = gulp.src('./src/vendor/fontawesome-free/css/*.min.css')
        .pipe(gulp.dest('./dist/vendor/fontawesome-free/css'));
    let fontAwesome = gulp.src('./src/vendor/fontawesome-free/webfonts/*.*')
        .pipe(gulp.dest('./dist/vendor/fontawesome-free/webfonts'));
    // jQuery
    let jquery = gulp.src('./src/vendor/jquery/*.min.*')
        .pipe(gulp.dest('./dist/vendor/jquery'));
    return merge(mySrc, myImg, myHTML, bootstrapJS, bootstrapCSS, fontAwesome, fontAwesomeCSS, jquery)
}

// Minify CSS task
function mincss() {
    return gulp
        .src("./src/css/*.css")
        .pipe(plumber())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./dist/css"));
}

// Minify JS task
function minjs() {
    return gulp
        .src('./src/js/*.js')
        .pipe(terser())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'));
}

// Define complex tasks
const cleanAll = gulp.parallel(cleanDist, cleanModules, cleanVendor);
const vendor = gulp.series(cleanVendor, copyModules);
const build = gulp.series(vendor, cleanDist, copyDist, gulp.parallel(mincss, minjs));

// Document tasks
mincss.description = "Minify CSS files.";
minjs.description = "Minify JS files.";
cleanDist.description = "Clear down the dist folder.";
cleanAll.description = "Clear down the dist, vendor and node_modules folders.";
vendor.description = "Refresh the vendor dependencies from node_modules.";
build.description = "Build a distribution ready version of the site.";

// Export tasks
exports.mincss = mincss;
exports.minjs = minjs;
exports.cleandist = cleanDist;
exports.cleanall = cleanAll;
exports.vendor = vendor;
exports.build = build;
exports.default = build;
