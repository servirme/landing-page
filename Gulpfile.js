const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const minifyInline = require('gulp-minify-inline');

gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
})

gulp.task('default', ['minify'])
