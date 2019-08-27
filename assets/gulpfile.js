const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');


gulp.task('sass', function() {
    return gulp.src('dev/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer('last 99 versions'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('cssmins', function () {
    gulp.src('dist/css/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function(){
    gulp.watch('dev/scss/**/*.scss', gulp.series('sass')); 
    gulp.watch('dist/css/main.css', gulp.series('cssmins')); 
});

  