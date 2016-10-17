Start here.
======

An AngularJS / NodeJS jumping-off point.

My purposes here are to have a project which is configured with an environment that I expect and desire. Currently I have:
* a gulpfile with sane build tasks, including [ngMin](https://github.com/btford/ngmin) and [ng-html2js](https://github.com/yaru22/ng-html2js)
* an angular frontend which uses `router` and `$templateCache`
* [jade](https://github.com/visionmedia/jade) templating which gets compiled into HTML on the server and then packaged into the `$templateCache`
* a server which bounces itself when it notices changes in its source code
* [livereload](https://github.com/vohof/gulp-livereload) for more pleasant front-end dev
* a single index file which requires (from my server) a single JS file and a single CSS file (plus the Angular source via CDN)
* live testing with [karma](http://karma-runner.github.io/0.10/index.html) and [jasmine](https://jasmine.github.io/)


Getting started
===============
* Clone the repo to your desired location
* `cd` into the directory (ex: `cd __seed`)
* `npm install` and wait for the required files to download
* if you haven't installed GulpJS before `npm install -g gulp`
* `gulp` and open http://localhost:8888 in your browser (you'll also notice a separate instance of Chrome open up – this is where Karma is running its tests)
* Or if you want to do it all at once: `npm install -g gulp && git clone git@github.com:joeLepper/__seed.git && cd __seed && npm install && gulp`

TODOs
=====
* minify the HTML before building the `$templateCache`
* flesh out the test skeletons, including tests for the Node parts of the repo
* minify CSS
* add in sourcemaps for CSS
* sane default based upon environments
* deploy scripts
