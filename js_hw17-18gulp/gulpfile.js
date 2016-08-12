
var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');
    gp_concatCss = require('gulp-concat-css');
    gp_uglifycss = require('gulp-uglifycss');

gulp.task('scripts', function(){
    return gulp.src(['./js/src/*.js'])
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('./js/build/'))
        .pipe(gp_rename('uglify.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./js/build/'));
});
gulp.task('css', function () {
  return gulp.src('./css/*.css')
    .pipe(gp_concatCss('main.css'))
    .pipe(gulp.dest('./css/build/'));
});
gulp.task('cssUglify', function () {
  gulp.src('./css/build/main.css')
    .pipe(gp_rename('uglify.css'))
    .pipe(gp_uglifycss('uglify.css'))
    .pipe(gulp.dest('./css/build/'));
});
gulp.task('default', ['scripts','css', 'cssUglify'], function(){});
