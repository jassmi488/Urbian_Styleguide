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
                dest: 'public_html/boilerplate/',
                exclusions: [
                    '.editorconfig',
                    '.ftppass',
                    '.git',
                    '.gitignore',
                    '.htaccess',
                    '.idea',
                    '*.scss',
                    'apple-touch-icon-precomposed.png',
                    'favicon.ico',
                    'Gruntfile.js',
                    'package.json',
                    'README.md',
                    'robots.txt',
                    'sass',
                    'node_modules'
                ]
            }
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
                        src: ['**/*.html', '!styleguide'],
                        dest: 'dist'
                    }
                ]
            }
        },
        sass: {
            build: {
                files: {
                    'build/assets/css/style.css': 'src/assets/sass/style.scss',
                    'build/assets/css/styleguide/styleguide.css': 'src/assets/sass/styleguide/styleguide.scss'
                }
            },
            dist: {
                files: {
                    'dist/assets/css/style.css': 'src/assets/sass/style.scss',
                    'dist/assets/css/styleguide/styleguide.css': 'src/assets/sass/styleguide/styleguide.scss'
                },
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
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
                tasks: ['sass:build', 'copy:build', 'uglify:build'],
                options: {
                    livereload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['clean:build', 'sass:build', 'copy:build', 'uglify:build']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('deploy', ['dist', 'ftp']);
    grunt.registerTask('dist', ['clean:dist', 'sass:dist', 'copy:dist', 'uglify:dist', 'htmlmin']);
    grunt.registerTask('ftp', ['ftp-deploy']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);
    grunt.registerTask('test', ['csslint', 'eslint']);
};
