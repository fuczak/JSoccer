var gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del');

var customOpts = {
  entries: ['./src/scripts/main.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

gulp.task('sass', function () {
  gulp.src('./src/styles/**/*.scss')
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: './bower_components/bootstrap-sass/assets/stylesheets'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./tmp/styles'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
  .pipe(useref())
  .pipe(gulp.dest('./tmp'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserify', function () {
  b.bundle()
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./tmp/scripts'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('images', function() {
  gulp.src('./src/images/**/*.png')
  .pipe(imagemin())
  .pipe(gulp.dest('./tmp/images'));
});

gulp.task('clean', function() {
  del(['./tmp']);
});

gulp.task('serve', ['clean', 'html', 'sass', 'browserify', 'images'], function() {
  browserSync({
    server: './tmp'
  });
  gulp.watch('./src/styles/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/scripts/**/*.js', ['browserify']);
});
