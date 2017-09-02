/*Require gulp as a dependency*/
var gulp = require('gulp');
var sass = require('gulp-sass');
// the autoprefixer object is just another reciever of a pipe stream
var autoprefixer = require('gulp-autoprefixer');

/*Define default task*/
gulp.task('default', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
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
        .pipe(autoprefixer({
    // specify browser option which tells autoprefixer for which browsers to prefix
            browsers: ['last 2 versions']
        }))
    // save them by using gulp.dest function to specify our final destination the css folder
        .pipe(gulp.dest('./css'));
});

gulp.task('')