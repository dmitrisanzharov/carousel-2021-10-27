var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var del = require('del');

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("*.html").on("change", reload);
  gulp.watch('*.css').on("change", reload);
  gulp.watch('*.js').on("change", reload);
});

gulp.task('js-ugly', done => {
  gulp.src('*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'));

  done();
})

gulp.task('delete', async done=> {
  await del(['dist/gulpfile.js']);
  done();
})

gulp.task('css', done => {
  gulp.src('*.css')
  .pipe(cssnano())
  .pipe(gulp.dest('dist'));
  done(); 
})

gulp.task('html', done=> {
  gulp.src('*.html')
  .pipe(gulp.dest('dist'));
  done();
})


gulp.task('default', gulp.series('serve'));
gulp.task('uglify', gulp.series('js-ugly', 'css', 'html'));
