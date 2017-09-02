# Udacity Web Tooling & Automation Notes
### Lesson 2
#### In Sublime Text Editor
* CMD + T = file finder, this way you don't have to use tabs or the mouse
* @ or CMD + R = symbol search, quickly look for things in current file
* CMD + ALT + G = if something is already highlighted/selected, will find next instance
* TAB for autocomplete
* ALT + drag = column selection, rarely used
* CMD + D = shows next instance of whatever is highlighted without clearing 1st selection
* CMD + CTRL + G = selects all instances
### Lesson 2-7 Extending your Editor
* Open the Sublime console with View -> Show Console or Ctrl + `
* Go to https://packagecontrol.io/installation in browser
* Copy the code for your version of Sublime under 'Simple'
* Paste into console
* CMD + Shift + P = bring up Sublime's command palette
* enter 'pack' and select 'Package Control: Install Packages'
* Install Emmet, Sidebar Enhancements, Color Picker and Color Highlights.  Dont restart until all installed
* Emmet: improves sublimes built-in text snippets, can use CSS selectors to create new html markup, i.e. ul#nav>li*4 then TAB will turn it into a `<ul>` with id="nav" and 4 `<li>` elements
* SidebarEnhancements: extends functionality of Sublimes sidebar
* Color Picker: CMD+Shift+C opens up color picker to quickly choose color
* CMD + L or CMD + K to turn selected to lowercase
### Lesson 3
* What should you look for in a build tool?
1. Fast
2. Community-driven
3. Modular & Extensible
4. Feature-rich
* Grunt and Gulp are both popular, but Gulp uses javascript
#### Install [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* Make sure you already have node and npm `node --version` & `npm --version`
* `gulp --version` showed CLI 1.2.2 and local 3.9.1, ran `npm install --global gulp-cli` anyway
* In this tutorials directory, run `npm init` to create a package.json file
* again in this project directory, run `npm install --save-dev gulp` which installs gulp in devDependencies
#### Create a `gulpfile`
* in project directory, create gulpfile with `subl gulpfile.js`
* Paste in this code:
```
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```
* test it out by running `gulp`
* `gulpfile.js` sits in root directory of project and defines all the tasks that should be executed when running `gulp`
* Grunt tasks copy your files to a temporary place where they make some changes, so every task incurs a penalty for I/O and file system operations.  Gulp converts input files into an in memory stream, so the I/O is only done initially and at the very end of all tasks, which increases speed
* [sass](http://sass-lang.com/)
* `npm install gulp-sass` will install sass so we can use it in our gulpfile
* create new folder in directory with `mkdir sass`
* `cd sass` then `subl main.scss` and `subl extras.scss`, these are sass files that will get compiled into css files with our new task and put in the css directory
* to `gulpfile.js` add dependency `var sass = require(gulp-sass);` and task:
```
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
    // save them by using gulp.dest function to specify our final destination the css folder
        .pipe(gulp.dest('./css'));
});
```
* add some css to the main.scss file, then run `gulp styles` in project directory and it should create a css file in the css folder
* `npm install --save-dev gulp-prefixer`
* add requirement and pipe to `gulpfile.js`
* add the following to implement gulp-watch
```
gulp.task('default', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
});
```
