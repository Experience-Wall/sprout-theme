'use strict';
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');




/**
 *   
 * Copy
 * 
 */
gulp.task('copy', [
    'copy:img',
    'copy:assets',
    'copy:html',
    'copy:cname',
    'copy:data'
    //'copy:favicon'
]);

gulp.task('copy:img', function(){
    return gulp.src(['static/**/*'])
        .pipe(gulp.dest('build/static/'));
});

gulp.task('copy:assets', function(){
    return gulp.src(['assets/**/*'])
        .pipe(gulp.dest('build/assets/'));
});

gulp.task('copy:html', function(){
    return gulp.src(['*.html'])
        .pipe(gulp.dest('build/'));
});

gulp.task('copy:data', function(){
    return gulp.src(['data/**/*'])
        .pipe(gulp.dest('build/data/'));
});


gulp.task('copy:cname', function(){
    return gulp.src(['CNAME'])
        .pipe(gulp.dest('build/'));
});

gulp.task('copy:favicon', function(){
    return gulp.src(['favicon.ico'])
        .pipe(gulp.dest('build/'));
});



