module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['public/**/*'],
      options: {
        livereload: true
      }
    },

    nodemon: {
      dev: {}
    },

    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });



  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['install','concurrent']);
  grunt.registerTask('install', 'install the backend and frontend dependencies', function() {
    grunt.log.writeln('installing dependencies')
    var exec = require('child_process').exec
      , cb = this.async();

    exec('npm install', {cwd: './frontend'}, function(err, stdout, stderr) {
      console.log(stdout);
      cb();
    });
  });

};