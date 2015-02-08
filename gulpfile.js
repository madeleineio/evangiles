/**
 * Created by nicolasmondon on 08/02/15.
 */

// include gulp
var gulp = require('gulp');

// include plugins
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


// vendors
gulp.task('build-vendors', function () {

    var dependencies = [
        // d3
        'node_modules/d3/d3.js',
        // jquery
        'node_modules/jquery/dist/jquery.js',
        // lodash
        'node_modules/lodash/index.js',
        // bluebird
        'node_modules/bluebird/js/browser/bluebird.js'
    ];

    gulp.src(dependencies)
        .pipe(concat('vendors.chunk.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

// default task
gulp.task('default', ['build-vendors']);
