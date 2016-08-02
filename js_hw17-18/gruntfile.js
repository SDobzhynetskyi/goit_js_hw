module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/main.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'css/build/mainStyle.css',
      }
    },
    uglify: {
      dist: {
        src: ['js/main.js'],
        dest: 'js/main.min.js'
      },
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/build/style.min.css': ['css/build/mainStyle.css']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
