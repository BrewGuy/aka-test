var gulp = require('gulp');

var sass = require('gulp-sass');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

var bases = {
 app: 'src/',
 dist: 'dist/',
};

var paths = {
 scripts: ['scripts/**/*.js'],
 styles: ['css/**/*.css'],
 html: ['*.html'],
 images: ['images/**/*.png'],
};

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src(bases.dist)
 .pipe(clean());
});

// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
  gulp.src([
      './src/scripts/app.js'
    ], {cwd: '.'})
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(bases.dist + 'scripts/'));
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
 gulp.src(paths.images, {cwd: bases.app})
 .pipe(imagemin())
 .pipe(gulp.dest(bases.dist + 'images/'));
});

gulp.task('html', ['clean'], function() {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest(bases.dist));
});

gulp.task('css', ['clean'], function() {
    return gulp.src('./src/scss/app.scss')
    .pipe(sass({
        outputStyle: 'compressed',
    }))
    .pipe(gulp.dest(bases.dist + 'css/'));
});

// Static server
gulp.task('server', function() {
    browserSync.init({
        proxy: "akatest.dev"
    });
});

gulp.task('reload', function() {
  browserSync.reload;
});

// A development task to run anytime a file changes
gulp.task('watch', function() {
 gulp.watch('src/**/*', ['html', 'css', 'scripts', 'imagemin', browserSync.reload]);
});

// Define the default task as a sequence of the above tasks
gulp.task('default', ['clean', 'html', 'css', 'scripts', 'imagemin', 'server', 'watch']);