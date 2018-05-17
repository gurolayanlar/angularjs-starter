'use strict';

var gulp = require('gulp');
var del = require('del');
var gulpGrab = require('gulp-grab');
var gulpConcat = require('gulp-concat');
var gulpCss = require('gulp-css');
var gulpSequence = require('gulp-sequence');
var gulpHtmlReplace = require('gulp-html-replace');
var gulpUglify = require('gulp-uglify');

var paths = {
    dist: './dist/',
    scripts: ['./app/**/*.js'],
    templates: './app/**/*.html',
    static: [
        './index.html',
        './assets/img/**/*'
    ]
};

gulp.task('clean', function (cb) {
    return del(paths.dist + '**/*', cb);
});

gulp.task('copy', function () {
    return gulp.src(paths.static)
        .pipe(gulp.dest(paths.dist));
});

gulp.task('bundleCss', ['vendorCss'], function () {
    return gulp.src("./index.html")
        .pipe(gulpGrab({ tags: ['bundleCss'] }))
        .pipe(gulpConcat('bundle.css'))
        .pipe(gulpCss())
        .pipe(gulp.dest(paths.dist + 'assets/css'));
});

gulp.task('vendorCss', function () {
    return gulp.src("./index.html")
        .pipe(gulpGrab({ tags: ['vendorCss'] }))
        .pipe(gulpConcat('vendor.css'))
        .pipe(gulpCss())
        .pipe(gulp.dest(paths.dist + 'assets/css/'));
});

gulp.task('pluginJS', function () {
    return gulp.src("./index.html")
        .pipe(gulpGrab({ tags: ['pluginJs'] }))
        .pipe(gulpConcat('plugin-bundle.js'))
        .pipe(gulpUglify())
        .pipe(gulp.dest(paths.dist + 'assets/js/'));
});

gulp.task('angularJS', function () {
    return gulp.src("./index.html")
        .pipe(gulpGrab({ tags: ['angularJs'] }))
        .pipe(gulpConcat('angular-bundle.js'))
        //.pipe(gulpUglify())
        .pipe(gulp.dest(paths.dist + 'assets/js/'));
});

gulp.task('bundleJS', function () {
    return gulp.src("./index.html")
        .pipe(gulpGrab({ tags: ['bundleJS'] }))
        .pipe(gulpConcat('site-bundle.js'))
        .pipe(gulpUglify())
        .pipe(gulp.dest(paths.dist + 'assets/js/'));
});

gulp.task('htmlReplace', function () {
    return gulp.src('./dist/index.html')
        .pipe(gulpHtmlReplace({
            'vendorCss': 'assets/css/vendor.css',
            'bundleCss': 'assets/css/bundle.css',
            'pluginJS': 'assets/js/plugin-bundle.js',
            'angularJS': 'assets/js/angular-bundle.js',
            'bundleJS': 'assets/js/site-bundle.js',
        }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('build', gulpSequence('clean', ['copy', 'bundleCss', 'pluginJS', 'angularJS', 'bundleJS'], 'htmlReplace'));