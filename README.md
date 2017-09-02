# Udacity Web Tooling & Automation Notes
### Lesson 2-6 Shortcuts
##### In Sublime Text Editor
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
##### Install Gulp
* Make sure you already have node and npm `node --version` & `npm --version`
* `gulp --version` showed CLI 1.2.2 and local 3.9.1, ran `npm install --global gulp-cli` anyway
* In this tutorials directory, run `npm init` to create a package.json file
* again in this project directory, run `npm install --save-dev gulp` which installs gulp in devDependencies