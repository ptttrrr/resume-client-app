var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    clean = require('gulp-clean');

    // delete unprocessed css files in /dist
    gulp.task('clean', function() {
       return gulp.src('dist/assets/css')
        .pipe(clean());
    });

    // concatuate and uglify css for distribution
    gulp.task('css', function() {
        gulp.src([
                'src/assets/css/**/*.css'
        ])
        .pipe(minifyCSS())
        .pipe(concat('concat-style.css'))
        .pipe(gulp.dest('./dist/assets/css'))
    });

    // run scripts
    gulp.task('run', ['clean', 'css']);

    // go go go
    gulp.task('default', ['run']);