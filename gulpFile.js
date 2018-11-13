var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
    return browserify({entries: './index.js', extensions: ['.js'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(uglify())
        .pipe(source('fluxtools.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['build']);