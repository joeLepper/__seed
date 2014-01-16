var gulp     = require('gulp')
  , jshint   = require('gulp-jshint')
  , csslint  = require('gulp-csslint')
  , sass     = require('gulp-sass')
  , gconcat  = require('gulp-concat')
  , uglify   = require('gulp-uglify')
  , rename   = require('gulp-rename')
  , ngmin    = require('gulp-ngmin')
  , gzip     = require('gulp-gzip')
  , jade     = require('gulp-jade')
  , refresh  = require('gulp-livereload')
  , lr       = require('tiny-lr')
  , html2js  = require('gulp-ng-html2js')
  , stylish  = require('jshint-stylish')
  , htmlmin  = require('gulp-minify-html')
  , flatten  = require('gulp-flatten')
  , spawn    = require('child_process').spawn
  , lrServer = lr()
  , node

  // ------------------------- //
  // ---- location arrays ---- //
  // ------------------------- //

  , jsLocations     = ['src/js/index.js', 'src/js/**/*.js', 'src/js/directives/**/js/*.js']
  , cssLocations    = ['public/css/*.css']
  , sassLocations   = ['src/sass/*.scss', 'src/sass/**/*.scss']
  , jadeLocations   = ['src/js/directives/**/jade/*.jade', 'src/jade/views/*.jade']
  , indexLocation   = ['src/jade/index.jade']
  , viewLocations   = ['src/html/*.html']
  , serverLocations = ['app.js', 'server/server.js', 'server/request.js'];

// -------------------------- //
// ---- individual tasks ---- //
// -------------------------- //

gulp.task('jsLint', function(){
  gulp.src(jsLocations)
    .pipe(jshint({laxcomma:true}))
    .pipe(jshint.reporter(stylish));
});

gulp.task('karma', function(){
  spawn('karma',
    ['start', 'karma.config.js'],
    { stdio : 'inherit' });
});

gulp.task('cssLint', function(){
  gulp.src(cssLocations)
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('sass', function(){
  gulp.src(sassLocations)
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(refresh(lrServer));
});

gulp.task('build', function(){
  gulp.src(jsLocations)
    .pipe(gconcat('app.js'))
    .pipe(ngmin())
    .pipe(rename({suffix: '.noted'}))
    .pipe(gulp.dest('./public/js'))
    .pipe(uglify())
    .pipe(rename(function(dir,base,ext){
      var trunc = base.split('.')[0];
      return trunc + '.min' + ext;
    }))
    .pipe(gulp.dest('public/js'))
    .pipe(gzip())
    .pipe(gulp.dest('public/js'))
    .pipe(refresh(lrServer));
});

gulp.task('jade', function(){
  gulp.src(jadeLocations)
    .pipe(jade({ pretty : true }))
    .pipe(rename(function(dir,base,ext){
      var result = base + ext;
      console.log(dir);
      console.log(result);
      return result;
    }))
    .pipe(flatten())
    .pipe(gulp.dest('./src/html'));
});

gulp.task('index', function(){
  gulp.src(indexLocation)
    .pipe(jade({ pretty : true }))
    .pipe(gulp.dest('public'));
});

gulp.task('cacheTemplates', function(){
  gulp.src(viewLocations)
    .pipe(html2js({
      moduleName : 'templates',
      prefix     : 'templates/'
    }))
    .pipe(gulp.dest('src/js/templates'));
});

gulp.task('server', function() {
  if (node){
    node.kill();
    console.log('[server] Restarting the server...');
  }
  else {
    console.log('[server] Starting the server...')
  }
  console.log('Restarting')
  node = spawn('node', ['index.js'], {stdio: 'inherit'});
  node.on('close', function (code) {
    if (code === 8) {
      console.log('Error detected, waiting for changes...');
    }
  });
});

// -------------------------- //
// ---- watch statements ---- //
// -------------------------- //


gulp.task('default', function(){
  gulp.run( 'karma'
          , 'jsLint'
          , 'sass'
          , 'cssLint'
          , 'jade'
          , 'index'
          , 'build'
          , 'server');

  gulp.watch(jsLocations, function(){
    gulp.run('jsLint', 'build');
  });

  gulp.watch(cssLocations, function(){
    gulp.run('cssLint');
  });

  gulp.watch(sassLocations, function(){
    gulp.run('sass');
  });

  gulp.watch(jadeLocations, function(){
    gulp.run('jade');
  });

  gulp.watch(indexLocation, function(){
    gulp.run('index');
  });

  gulp.watch(viewLocations, function(){
    gulp.run('cacheTemplates');
  });

  gulp.watch(serverLocations, function(){
    gulp.run('server');
  });

  lrServer.listen(35729, function (err) {
    if (err) return console.log(err);
  });
});