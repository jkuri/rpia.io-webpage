'use strict';

const path = require('path');
const serverFiles = [
  '*.js',
  'controllers/*.js',
  'routes/*.js',
  'middleware/*.js',
  'middleware/models/*.js',
  'middleware/repos/*.js'
];
const templateFiles = [
  'templates/*.pug',
  'templates/docs/start/*.pug',
  'templates/docs/elements/*.pug',
  'templates/docs/grid/*.pug',
  'templates/docs/components/*.pug',
  'templates/docs/layout/*.pug',
  'templates/docs/utilities/*.pug'
];
const styleFiles = ['assets/styles/sass/*.sass'];
const scriptFiles = ['assets/scripts/*.js'];

module.exports = (grunt) => {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      server: {
        files: serverFiles.concat(templateFiles).concat(styleFiles).concat(scriptFiles),
        tasks: ['jshint', 'concat', 'babel', 'sass', 'cssmin', 'hapi'],
        options: {
          spawn: false,
          livereload: true 
        }
      }
    },
    hapi: {
      server: {
        options: {
          server: path.resolve('./dev.js')
        }
      }
    },
    jshint: {
      server: {
        src: serverFiles.concat(scriptFiles),
        options: {
          jshintrc: true
        }
      }
    },
    concat: {
      index: {
        src: ['assets/scripts/index.js'],
        dest: 'assets/scripts/dist/index.js'
      },
      button: {
        src: ['assets/scripts/button.js'],
        dest: 'assets/scripts/dist/button.js'
      },
      content: {
        src: ['assets/scripts/content.js'],
        dest: 'assets/scripts/dist/content.js'
      },
      icon: {
        src: ['assets/scripts/icon.js'],
        dest: 'assets/scripts/dist/icon.js'
      },
      progress: {
        src: ['assets/scripts/progress.js'],
        dest: 'assets/scripts/dist/progress.js'
      },
      columns: {
        src: ['assets/scripts/columns.js'],
        dest: 'assets/scripts/dist/columns.js'
      },
      footer: {
        src: ['assets/scripts/footer.js'],
        dest: 'assets/scripts/dist/footer.js'
      },
      cover: {
        src: ['assets/scripts/cover.js'],
        dest: 'assets/scripts/dist/cover.js'
      },
      container: {
        src: ['assets/scripts/container.js'],
        dest: 'assets/scripts/dist/container.js'
      },
      header: {
        src: ['assets/scripts/header.js'],
        dest: 'assets/scripts/dist/header.js'
      },
      colors: {
        src: ['assets/scripts/colors.js'],
        dest: 'assets/scripts/dist/colors.js'
      },
      table: {
        src: ['assets/scripts/table.js'],
        dest: 'assets/scripts/dist/table.js'
      },
      tag: {
        src: ['assets/scripts/tag.js'],
        dest: 'assets/scripts/dist/tag.js'
      },
      image: {
        src: ['assets/scripts/image.js'],
        dest: 'assets/scripts/dist/image.js'
      },
      title: {
        src: ['assets/scripts/title.js'],
        dest: 'assets/scripts/dist/title.js'
      }
    },
    babel: {
      options: {
        minified: true,
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'assets/scripts/dist/index.min.js': 'assets/scripts/dist/index.js',
          'assets/scripts/dist/button.min.js': 'assets/scripts/dist/button.js',
          'assets/scripts/dist/content.min.js': 'assets/scripts/dist/content.js',
          'assets/scripts/dist/icon.min.js': 'assets/scripts/dist/icon.js',
          'assets/scripts/dist/progress.min.js': 'assets/scripts/dist/progress.js',
          'assets/scripts/dist/columns.min.js': 'assets/scripts/dist/columns.js',
          'assets/scripts/dist/footer.min.js': 'assets/scripts/dist/footer.js',
          'assets/scripts/dist/cover.min.js': 'assets/scripts/dist/cover.js',
          'assets/scripts/dist/container.min.js': 'assets/scripts/dist/container.js',
          'assets/scripts/dist/header.min.js': 'assets/scripts/dist/header.js',
          'assets/scripts/dist/colors.min.js': 'assets/scripts/dist/colors.js',
          'assets/scripts/dist/table.min.js': 'assets/scripts/dist/table.js',
          'assets/scripts/dist/tag.min.js': 'assets/scripts/dist/tag.js',
          'assets/scripts/dist/image.min.js': 'assets/scripts/dist/image.js',
          'assets/scripts/dist/title.min.js': 'assets/scripts/dist/title.js'
        }
      }
    },
    sass: {
      dist: {
        files: {
          './assets/styles/main.css': './assets/styles/sass/main.sass'
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: true,
        report: 'min'
      },
      target: {
        files: {
          'assets/styles/app.min.css': ['assets/styles/main.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-hapi');

  grunt.registerTask('default', ['jshint', 'concat', 'babel', 'sass', 'cssmin', 'hapi', 'watch']);
  grunt.registerTask('build', ['jshint', 'concat', 'babel', 'sass', 'cssmin']);
};
