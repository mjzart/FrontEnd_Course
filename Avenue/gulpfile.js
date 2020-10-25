const gulp = require('gulp');
const sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const srcPath = 'src/**/*.scss'; // Шлях до наших scss файлів
const distPath = 'dist'; // Шлях до папки куди будуть компілюватися наші css файли
const indexPath = './'; // Шлях до папки де знаходиться index.html


gulp.task('sass', function(){
    return gulp.src(srcPath)
    .pipe(sass())
    .pipe(gulp.dest(distPath))
    .pipe(browserSync.stream())
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: indexPath
        },
    })
})

gulp.task('watch', function(){
    gulp.watch(srcPath, gulp.series(['sass']));
})

gulp.task('dev', gulp.parallel('browserSync', 'sass', 'watch', function (done) {
    done();
}));
