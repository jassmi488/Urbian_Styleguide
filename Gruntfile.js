module.exports = function (grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    livereload: true,
                    open: true,
                    port: 1337,
                    useAvailablePort: true
                }
            }
        },
        csslint: {
            strict: {
                src: ['assets/css/main.css'],
                options: {
                    import: 2
                }
            }
        },
        jshint: {
            files: ['assets/js/main.js']
        },
        less: {
            build: {
                files: {
                    'assets/css/main.css': 'assets/less/main.less',
                    'assets/css/style-guide/main.css': 'assets/less/style-guide/main.less'
                },
                options: {
                    cleancss: true
                }
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
        validation: {
            files: {
                src: ['*.html', 'templates/**/*.html']
            }
        },
        watch: {
            build: {
                files: [
                    'assets/js/**',
                    'assets/less/**',
                    '*.html'
                ],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }
    });

    var defaultTasks = [
        'csslint',
        'jshint',
        'less',
        'validation'
    ];

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.registerTask('default', defaultTasks);
    grunt.registerTask('serve', ['less', 'connect', 'watch']);
};