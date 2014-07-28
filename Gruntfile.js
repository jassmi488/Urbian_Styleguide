module.exports = function (grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname: '*',
                    livereload: true,
                    open: {
                        target: 'http:127.0.0.1:1337'
                    },
                    port: 1337,
                    useAvailablePort: true
                }
            }
        },
        csslint: {
            strict: {
                src: ['assets/css/style.css'],
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
                    'assets/css/style.css': 'assets/less/style.less'
                },
                options: {
                    cleancss: true
                }
            }
        },
        pagespeed: {
            options: {
                nokey: true,
                url: "https://developers.google.com"
            },
            build: {
                options: {
                    url: "http://127.0.0.1:1337",
                    locale: "en",
                    strategy: "desktop",
                    threshold: 80
                }
            }
        },
        validation: {
            files: {
                src: ['*.html']
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
    grunt.loadNpmTasks('grunt-pagespeed');
    grunt.registerTask('default', defaultTasks);
    grunt.registerTask('serve', ['less', 'connect', 'watch']);
};