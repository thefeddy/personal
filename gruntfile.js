const sass = require('node-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
            },
            dist: {
                files: [
                    {
                        'wp-content/themes/finderscope/static/css/main.css':
                            'wp-content/themes/finderscope/static/css/main.scss',
                    },
                    {
                        expand: true,
                        cwd: '',
                        src: ['wp-content/themes/finderscope/static/css/blocks/**/*.scss'],
                        dest: '.',
                        ext: '.css',
                    },
                ],
            },
        },
        watch: {
            css: {
                files: 'wp-content/themes/finderscope/static/css/**/*.scss',
                tasks: ['sass', 'cssmin'],
            },
            javascripts: {
                files: ['wp-content/themes/finderscope/static/js/finderscope/**/*.js'],
                tasks: ['newer:uglify:my_target'],
                options: {
                    options: {
                        spawn: true,
                        livereload: true,
                    },
                },
            },
        },
        uglify: {
            my_target: {
                options: {
                    mangle: false,
                    sourceMap: true,
                    sourceMapName: 'wp-content/themes/finderscope/static/js/finderscope/sourcemap.map',
                },
                files: [
                    {
                        expand: true,
                        cwd: 'wp-content/themes/finderscope/static/js/finderscope/',
                        src: ['**/*.js', '!*.min.js'],
                        dest: 'wp-content/themes/finderscope/static/js/finderscope/',
                        ext: '.min.js',
                    },
                ],
            },
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'wp-content/themes/finderscope/static/css',
                        src: ['main.css', 'main.css'],
                        dest: 'wp-content/themes/finderscope/static/css',
                        ext: '.css',
                    },
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    grunt.registerTask('default', ['watch']);
};
