const gulp = require('gulp')
// const htmlmin = require('gulp-htmlmin')
// const minifyInline = require('gulp-minify-inline');

gulp.task('default', () => {
  return gulp.src('src/**/*')
  // .pipe(minifyInline())
  // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
})
