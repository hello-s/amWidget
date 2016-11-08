var gulp = require('gulp'),
  rename = require('gulp-rename'),
  amTransportGulp = require('gulp-am-transport'),
  uglify = require('gulp-uglify'),
  amwDest = require('gulp-amw-dest'),
  concat = require('gulp-concat');

gulp.task('build', function () {
  gulp.src('./src/gallery/**/*.js')
    .pipe(amTransportGulp({family: "AW", uglify: true}))
    .pipe(amwDest('./dist/amw/'));
  
  gulp.src('./src/gallery/**/*.js')
    .pipe(amTransportGulp({family: "AW"}))
    .pipe(gulp.dest('./examples/lib/gallery/'));
});

gulp.task('doc', function () {
  gulp.src('./doc/*.md')
    .pipe(concat('aw-doc.md'))
    .pipe(gulp.dest('./doc/build'));
});

gulp.task('default', ['build']);