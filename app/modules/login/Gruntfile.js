/** Tarefas Grunt Módulo Login */
module.exports = function( grunt ) {
  
    grunt.initConfig({
        
        // Limpa todos os arquivos da pasta dist.
        clean: {
            main: ['dist/**'],
            dist: [
                'dist/css',
                'dist/js',
                'dist/all.js',
                'dist/module.js'
            ]
        },
        
        // Copia todos os arquivos para a pasta dist.
        copy: {
            
            main: {
                files: [
                    {expand: true, src: ['./css/**'], dest: 'dist/'},
                    {expand: true, src: ['./js/**'], dest: 'dist/'},
                    {expand: true, src: ['./views/**'], dest: 'dist/'},
                    {expand: true, src: ['./module.js'], dest: 'dist/'}
                ]
            }
        },
        
        // Concatena os arquivos Javascript.
        concat: {
            
            options: {
              separator: '\n\n',
            },
            
            js: {
                src: [
                    'dist/module.js',
                    'dist/js/**'
                ],
                dest: 'dist/all.js'
            }
            
        },
        
        uglify : {
            target: {
                files: { 'dist/module.min.js': ['dist/all.js'] }
            }
        }
        
    });
    
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    
    grunt.registerTask('default', [
        'clean:main', 
        'copy',
        'concat',
        'uglify',
        'clean:dist'
    ]);
};
