/* eslint-env node */

/*Require gulp as a dependency*/
var gulp = require('gulp');
var sass = require('gulp-sass');
// the autoprefixer object is just another reciever of a pipe stream
// var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');

/*Define default task*/
gulp.task('default', ['styles', 'lint'], function() {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['lint']);

    browserSync.init({
        server: './'
    });
});

gulp.task('styles', function() {
    // Tell gulp what files to work with using 'src' which looks for any files ending in .scss
    // in all of the subdirectories of 'sass' folder
    gulp.src('sass/**/*.scss')
    // now that we have the sass files, the pipe function into sass on the 'stream' of files we
    // just created takes a destination that the plugin provides so we call sass right here
    // Essentially we just converted our files to CSS now
        .pipe(sass())
    // this will listen to error log and change default behavior if an error occurs
    // Instead of killing hte whole process, it tells gulp to log the error and go on as usual
        .pipe(sass().on('error', sass.logError))
    // since we already have a pipe coming from sass, we can simply add auotprefixer here
        // .pipe(autoprefixer({
    // specify browser option which tells autoprefixer for which browsers to prefix
        //     browsers: ['last 2 versions']
        // }))
    // save them by using gulp.dest function to specify our final destination the css folder
        .pipe(gulp.dest('./css'))

        .pipe(browserSync.stream());
});

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['**/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});
