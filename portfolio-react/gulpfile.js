"use strict";

// Load plugins
const gulp = require("gulp");
const merge = require("merge-stream");

function cleanVendor() {
    return del(["public/vendor/"]);
}

function createVendor() {
    // Bootstrap
    let bootstrapJS = gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.*', '!./node_modules/bootstrap/dist/js/bootstrap.bundle.*'])
        .pipe(gulp.dest('./public/vendor/bootstrap/js'));
    let bootstrapCSS = gulp.src('./node_modules/bootstrap/dist/css/bootstrap.*')
        .pipe(gulp.dest('./public/vendor/bootstrap/css'));
    // jQuery
    let jquery = gulp.src(['./node_modules/jquery/dist/jquery.*', '!./node_modules/jquery/dist/jquery.slim.*'])
        .pipe(gulp.dest('./public/vendor/jquery'));
    // Popper
    let popper = gulp.src('./node_modules/popper.js/dist/umd/popper.*')
        .pipe(gulp.dest('./public/vendor/popper'));
    return merge(bootstrapJS, bootstrapCSS, jquery, popper);
}

// Define complex tasks
const vendor = gulp.series(cleanVendor, createVendor);

// Document tasks
vendor.description = "Bring third party dependencies from node_modules into the vendor directory.";

// Export tasks
exports.vendor = vendor;
