module.exports = function( grunt ) {

    grunt.initConfig({

        sub: {
            states: {
                gruntfile: 'app/modules/states/Gruntfile.js',
                task: 'default'
            },
            cities: {
                gruntfile: 'app/modules/cities/Gruntfile.js',
                task: 'default'
            },
            login: {
                gruntfile: 'app/modules/login/Gruntfile.js',
                task: 'default'
            },
            users: {
                gruntfile: 'app/modules/users/Gruntfile.js',
                task: 'default'
            },
            users: {
                gruntfile: 'app/modules/contacts/Gruntfile.js',
                task: 'default'
            }
        },

        clean:  {
            main: ['dist/**'],
            dist: [
                'dist/css/style.css'
                , 'dist/css/all.css'
                , 'dist/js/all.js'
                , 'dist/js/directives.js'
                , 'dist/js/filters.js'
                , 'dist/js/app.js'
                , 'dist/js/controllers.js'
                , 'dist/js/services.js'
                , 'dist/js/services.js'
                , 'dist/modules/cities/*.js'
                , 'dist/modules/login/*.js'
                , 'dist/modules/states/*.js'
                , 'dist/modules/users/*.js'
                , 'dist/modules/contacts/*.js'
            ]
       },

       copy: {
          main: {

            files: [
                {
                    expand: true,
                    cwd: 'app/',
                    src: ['index.html', 'favicon.ico'],
                    dest: 'dist/',
                    flattern: true
                },
                {
                    expand: true,
                    cwd: 'app/views',
                    src: '**',
                    dest: 'dist/views',
                    flattern: true
                },
                {
                    expand: true,
                    cwd: 'app/css/',
                    src: '**',
                    dest: 'dist/css',
                    flattern: true
                },
                {
                    expand: true,
                    cwd: 'app/js/',
                    src: '**',
                    dest: 'dist/js',
                    flattern: true
                },
                {
                    expand: true,
                    cwd: 'app/lib/',
                    src: ['**/**/*.min.css', '**/**/*.min.js'],
                    dest: 'dist/lib',
                    flattern: true
                },
                {
                    expand: true,
                    cwd: 'app/modules/states/dist/',
                    src: '**',
                    dest: 'dist/modules/states',
                    flattern: true
                },
                {
                    expand: true,
                    cwd: 'app/modules/cities/dist/',
                    src: '**',
                    dest: 'dist/modules/cities',
                    flattern: true
                },
                {
                    expand: true,
                    cwd: 'app/modules/login/dist/',
                    src: '**',
                    dest: 'dist/modules/login',
                    flattern: true
                },
                {
                    expand: true,
                    cwd: 'app/modules/users/dist/',
                    src: '**',
                    dest: 'dist/modules/users',
                    flattern: true
                },
                {
                    expand: true,
                    cwd: 'app/modules/contacts/dist/',
                    src: '**',
                    dest: 'dist/modules/contacts',
                    flattern: true
                }
            ]// files

          } // copy
        },

       concat: {
            options: {
              separator: '\n\n',
            },
            css: {
                src: [
                    'dist/lib/boostrap/dist/css/bootstrap.css'
                    , 'dist/lib/boostrap/dist/css/bootstrap-theme.css'
                    , 'dist/css/*.css'
                ],
                dest: 'dist/css/all.css'
            },
            js: {
                src: [
                    'dist/js/*.js'
                    , 'dist/modules/login/module.min.js'
                    , 'dist/modules/users/module.min.js'
                    , 'dist/modules/states/module.min.js'
                    , 'dist/modules/cities/module.min.js'
                    , 'dist/modules/contacts/module.min.js'
                ],
                dest: 'dist/js/all.js'
            }
        },

        cssmin: {
            target: {
                files: { 'dist/css/all.min.css': ['dist/css/all.css'] }
            }
        },

        uglify : {
            target: {
                files: { 'dist/js/all.min.js': ['dist/js/all.js'] }
            }
        },

        processhtml: {
        	dist: {
              files: {
                'dist/index.html': ['dist/index.html']
              }
            }
      	}
    });

    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-sub');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('default', [
        'clean:main', 'copy', 'concat'
        , 'cssmin', 'uglify', 'processhtml'
        , 'clean:dist'
    ]);

    grunt.registerTask('buildAll', [
        'sub', 'clean:main', 'copy', 'concat'
        , 'cssmin', 'uglify', 'processhtml'
        , 'clean:dist'
    ]);
};
