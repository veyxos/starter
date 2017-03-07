const gulp = require('gulp')
const jade = require('gulp-jade')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('jade', function () {
  return gulp.src(['./**/*.jade', '!./_partials/*.jade'])
    .pipe(jade({
      locals: {}
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('sass', function () {
  gulp.src('./assets/_sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({}))
    .pipe(gulp.dest('./assets/css/'))
})

gulp.task('watch', function () {
  gulp.watch('./**/*.jade', ['jade'])
  gulp.watch('./assets/_sass/**/*.sass', ['sass'])
  gulp.watch('./assets/_sass/**/*.scss', ['sass'])
})

gulp.task('default', ['jade', 'sass'])
