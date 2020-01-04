let gulp = require( 'gulp' );
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let rename = require('gulp-rename');

let styleSRC = 'src/scss/**/*.scss';
let styleDIST = './dist/main/css/';
let styleWatch = 'src/scss/**/*.scss';

let jsSRC = 'src/js/**/*';
let jsDIST = './dist/js/';
let jsWatch = 'src/js/**/*.js';

let imagesSRC = 'src/images/**/*';
let imagesDIST = './dist/images/';
let imagesWatch = 'src/images/**/*';

let jsonSRC = 'src/json/**/*';
let jsonDIST = './dist/json/';
let jsonWatch = 'src/json/**/*';

gulp.task('style', function(done){
    gulp.src(styleSRC)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDIST));
        done()
});

gulp.task('js', function(done) {
    gulp.src(jsSRC)
        .pipe(gulp.dest(jsDIST));
        done()
});

gulp.task('images', function(done) {
    gulp.src(imagesSRC)
        .pipe(gulp.dest(imagesDIST))
        done()
});

gulp.task('json', function(done) {
    gulp.src(jsonSRC)
        .pipe(gulp.dest(jsonDIST))
        done()
});

gulp.task('watch', function() {
    gulp.watch(styleWatch, gulp.series('style'));
    gulp.watch(jsWatch, gulp.series('js'));
    gulp.watch(imagesWatch, gulp.series('images'));
    gulp.watch(jsonWatch, gulp.series('json'));
});

gulp.task('default', 
    gulp.series('style', 'js', 'images', 'json','watch')
);