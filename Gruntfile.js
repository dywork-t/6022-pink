module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    "imagemin"
  ]);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "source/style/styledel.css": "source/sass/styledel.less"
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style: {
        src: "source/style/style.css"
      }
    },
    cmq: {
      style: {
        files: {
          "source/style/style.css": ["source/style/style.css"]
        }
      }
    },
    csscomb: {
      style: {
        expand: true,
        src: ["source/sass/**/*.scss", "source/style/style.css"]
      }
    },
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "source/style/style-min.css": ["source/style/style.css"]
        }
      }
    },
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
        },
        files: [{
          expand: true,
          src: ["source/img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "style/style-min.css",
            "style/normalize.css",
            "js/**",
            "index.html"
          ],
          dest: "build"
        }]
      }
    },
    clean: {
      build: ["build"]
    }
  });

};
