module.exports = function (grunt)
{
    require('time-grunt')(grunt);

    var today = '<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>';
    var package_name = '<%= pkg.name %>';
    var package_version = '<%= pkg.version %>';
    var banner = '/*! ' + package_name + ' | ' + package_version + ' | ' + today + ' */';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ['build'],
            dist: ['dist']
        },
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
            build: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['{fonts,images,js}/**'],
                        dest: 'build/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**/*.html'],
                        dest: 'build'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['*.*', '.*'],
                        dest: 'build'
                    }
                ]
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['{fonts,images}/**'],
                        dest: 'dist/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['js/vendor/polyfills.js'],
                        dest: 'dist/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src/assets',
                        src: ['js/styleguide/**'],
                        dest: 'dist/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: '**/*.html',
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['*.*', '.*'],
                        dest: 'dist'
                    }
                ]
            }
        },
        csslint: {
            build: {
                src: [
                    'build/assets/css/style.css'
                ],
                options: {
                    csslintrc: '.csslintrc',
                    import: 2
                }
            },
            dist: {
                src: [
                    'dist/assets/css/style.css'
                ],
                options: {
                    csslintrc: '.csslintrc',
                    import: 2
                }
            }
        },
        eslint: {
            target: ['src/assets/js/main.js']
        },
        'ftp-deploy': {
            dist: {
                auth: {
                    host: 's.wearenext.co.za',
                    port: 21,
                    authKey: 'static'
                },
                src: './dist',
                dest: 'public_html/styleguide/',
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
        htmllint: {
            all: ['build/**/*.html', '!build/styleguide/*.html']
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'dist',
                        src: '*.html',
                        dest: 'dist'
                    }
                ]
            }
        },
        less: {
            build: {
                files: {
                    'build/assets/css/style.css': 'src/assets/less/style.less',
                    'build/assets/css/styleguide/styleguide.css': 'src/assets/less/styleguide/styleguide.less'
                },
                options: {
                    banner: banner,
                    compress: true
                }
            },
            dist: {
                files: {
                    'dist/assets/css/style.css': 'src/assets/less/style.less',
                    'dist/assets/css/styleguide/styleguide.css': 'src/assets/less/styleguide/styleguide.less'
                },
                options: {
                    banner: banner,
                    compress: true
                }
            }
        },
        uglify: {
            options: {
                banner: banner
            },
            build: {
                files: {
                    'build/assets/js/script.js': [
                        'src/assets/js/vendor/jquery.js',
                        'src/assets/js/plugins.js',
                        'src/assets/js/main.js'
                    ]
                }
            },
            dist: {
                files: {
                    'dist/assets/js/script.js': [
                        'src/assets/js/vendor/jquery.js',
                        'src/assets/js/plugins.js',
                        'src/assets/js/main.js'
                    ]
                }
            }
        },
        watch: {
            build: {
                files: [
                    'src/**'
                ],
                tasks: ['less:build', 'copy:build', 'uglify:build'],
                options: {
                    livereload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['clean:build', 'less:build', 'copy:build', 'uglify:build']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('deploy', ['dist', 'ftp']);
    grunt.registerTask('dist', ['clean:dist', 'less:dist', 'copy:dist', 'uglify:dist', 'htmlmin']);
    grunt.registerTask('ftp', ['ftp-deploy']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);
    grunt.registerTask('test', ['csslint', 'eslint']);
};
