var gulp = require('gulp'),
    sass = require('gulp-sass');
    browserSync = require('browser-sync');


gulp.task('sass', function (){
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream({ match: '**/*.css' }))
});

gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(gulp.dest('html'))
        .pipe(browserSync.stream({ match: '**/*.html' }))
});

browserSync.init({
    injectChanges: true,
    server: "../Task"
});


gulp.task('watch', function() {
    gulp.watch('scss/*.scss',['sass']);
    gulp.watch('./*.html', ['html']);
})

gulp.task('default', ['sass', 'html-sync'], function () {
    gulp.start('watch');
});