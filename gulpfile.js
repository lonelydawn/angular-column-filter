/**
 * Created by lonelydawn on 2017-03-02.
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

var path={
    js:     ['./dist/column-filter.directive.js'],
    css:    ['./dist/column-filter.css']
};

gulp.task('js:minify',function(){
    return gulp.src(path.js)
        .pipe(plumber())
        .pipe(ngAnnotate())
        .pipe(concat('column-filter.directive.min.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('css:minify',function(){
    return gulp.src(path.css)
        .pipe(plumber())
        .pipe(concat('column-filter.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default',function(){
   gulp.start(['js:minify','css:minify']);
});