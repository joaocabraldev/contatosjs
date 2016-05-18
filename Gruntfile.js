module.exports = function( grunt ) {
 
    grunt.initConfig({
       clean :  ['dist/**'],
       copy: {
          main: {
            files: [
              {expand: true, src: ['app/**'], dest: 'dist/'}
            ]
          },
        },
        concat: {
            options: {
              separator: '\n\n',
            },
            css: {
                src: [
                    'dist/app/css/*.css'
                    , 'dist/app/lib/w3css/*.css'
                ],
                dest: 'dist/app/css/all.css'
            },
            js: {
                src: [
                  'dist/app/js/*.js'
                  , 'dist/app/modules/login/*.js'
                  , 'dist/app/modules/login/js/*.js'
                  , 'dist/app/modules/users/*.js'
                  , 'dist/app/modules/users/js/*.js'
                  , 'dist/app/modules/states/*.js'
                  , 'dist/app/modules/states/js/*.js'
                  , 'dist/app/modules/cities/*.js'
                  , 'dist/app/modules/cities/js/*.js'
                  , 'dist/app/lib/jquery/jquery-2.2.3.js'
                  , 'dist/app/lib/angular/angular.js'
                  , 'dist/app/lib/angular/angular-route.js'
                  , 'dist/app/lib/angular/angular-cookies.js'
                  , 'dist/app/lib/auth0/*.js'
                ],
                dest: 'dist/app/js/all.js'
            }
        },
        cssmin: {
            target: {
                files: { 'dist/app/css/all.min.css': ['dist/app/css/all.css'] }    
            }
        },
        uglify : {
            target: {
                files: { 'dist/app/js/all.min.js': ['dist/app/js/all.js'] }
            }
        },
        processhtml: {
            dist: {
              files: {
                'dist/app/index.html': ['dist/app/index.html']
              }
            }
          }
    });
  
    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('default', [
        'clean', 'copy', 'concat'
        , 'cssmin', 'uglify', 'processhtml'
    ]);
};