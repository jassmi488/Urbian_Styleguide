module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            minify: {
                files: {
                    'assets/css/main.css': ['assets/css/main.css']
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['assets/css/main.css']
            }
        },
        jshint: {
            files: ['assets/js/main.js']
        },
        less: {
            default: {
                files: {
                    'assets/css/main.css': 'assets/less/main.less'
                }
            }
        },
        validation: {
            files: {
                src: ['*.html']
            }
        }
    });

    var defaultTasks = [
        'less',
        'cssmin',
        'csslint',
        'jshint',
        'validation'
    ];

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-html-validation');

    grunt.registerTask('default', defaultTasks);
};