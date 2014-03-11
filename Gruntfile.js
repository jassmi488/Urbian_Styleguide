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
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'joepublicn.com',
                    port: 21,
                    authKey: 'joepublicn'
                },
                src: './',
                dest: 'public_html/style-guide',
                exclusions: [
                    '.editorconfig',
                    '.ftppass',
                    '.git',
                    '.gitignore',
                    '.htaccess',
                    '.idea',
                    '*.less',
                    'apple-touch-icon-precomposed.png',
                    'favicon.ico',
                    'Gruntfile.js',
                    'package.json',
                    'README.md',
                    'robots.txt',
                    'less',
                    'node_modules'
                ]
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
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('default', defaultTasks);
};