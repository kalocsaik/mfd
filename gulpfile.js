const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['build-css'], function() {

    browserSync.init({
         open: 'external',
          host: 'project.dev',
          proxy: 'project.dev', // or project.dev/app/
          port: 3000
        
    });

    gulp.watch("source/scss/**/*.scss", ['build-css']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('build-css', function() {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('public/assets/stylesheets'))
        .pipe(browserSync.stream());

});


//gulp watch
gulp.task('watch', function() {
    gulp.watch('source/scss/**/*.scss', ['build-css']);
});
