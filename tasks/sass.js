module.exports = function(grunt){
  grunt.config('sass', {

    dist: {
      options: {
        style: 'compressed'
      },
      files: {
        'assets/css/main.css': 'assets/sass/main.sass'
      }
    },

    dev: {
      options: {
        style: 'expanded'
      },
      files: {
        '_site/assets/css/main.css': 'assets/sass/main.sass',
        'assets/css/main.css': 'assets/sass/main.sass'
      }
    }

  });
};
