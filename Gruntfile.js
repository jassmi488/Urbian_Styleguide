module.exports = function (grunt)
{
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build'],
        connect: {
            server: {
                options: {
                    hostname: '*',
                    base: 'build',
                    livereload: true,
                    open: {
                        target: 'http://127.0.0.1:1337/styleguide/'
                    },
                    port: 1337,
                    useAvailablePort: true
                }
            }
        },
        copy: {
            assets: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['{css,images}/**'],
                        dest: 'build/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['*.*', '.*'],
                        dest: 'build'
                    }
                ]
            },
            styleguide: {
                expand: true,
                cwd: 'src/styleguide',
                src: ['*.*', '.*'],
                dest: 'build/styleguide'
            },
            js: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: [
                            'js/styleguide/plugins.js',
                            'js/styleguide/styleguide.js',
                            'js/vendor/jquery.js',
                            'js/vendor/polyfills.js',
                            'js/main.js',
                            'js/plugins.js'
                        ],
                        dest: 'build/assets'
                    }
                ]
            }
        },
        csslint: {
            strict: {
                src: [
                    'assets/css/style.css',
                    'assets/css/styleguide.css'
                ],
                options: {
                    import: 2
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
                dest: 'public_html/styleguide/v2',
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
                    'node_modules',
                    'validation-report.json',
                    'validation-status.json'
                ]
            }
        },
        jshint: {
            files: ['assets/js/main.js']
        },
        less: {
            build: {
                files: {
                    'assets/css/style.css': 'src/assets/less/style.less',
                    'assets/css/styleguide.css': 'src/assets/less/styleguide.less'
                },
                options: {
                    cleancss: true
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'build/assets/js/script.js': [
                        'src/assets/js/vendor/jquery.js',
                        'src/assets/js/plugins.js',
                        'src/assets/js/main.js'
                    ]
                }
            }
        },
        validation: {
            files: {
                src: [
                    'build/**/*.html',
                    '*.html'
                ]
            }
        },
        watch: {
            build: {
                files: [
                    'src/**'
                ],
                tasks: ['less', 'copy'],
                options: {
                    livereload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['clean', 'less', 'copy']);
    grunt.registerTask('serve', ['clean', 'less', 'copy', 'connect', 'watch']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('ftp', ['ftp-deploy']);
};
