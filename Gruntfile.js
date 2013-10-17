module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          compress: true
        },
        files: {
          './public/css/style.css': ['./public/stylus/*.styl']
        }
      }
    },
    watch: {
      // Watch stylus files in "styl" directory
      stylus: {
        files: ['./public/stylus/*.styl'],
        tasks: ['stylus']
      }
    }
  });

  // Load the plugin that provides the "watch" & "stylus" tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};