/*jshint node: true*/

'use strict';

var path = require('path');

module.exports = function (grunt) {

    grunt.config.set('pkg', require('./package.json'));

    // Load all grunt tasks from node_modules, and config from /grunt/config
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        config: {
            pkg: grunt.file.readJSON('package.json'),
            srcPath: './source'
        }
    });

    grunt.loadTasks('./grunt/tasks'); // Will load the custom tasks

    grunt.registerTask('build', 'Build a bundle', [
        'clean:build',
        'copy:build'
    ]);

    grunt.registerTask('default', 'Run code checker', [
        'jsonlint',
        'jshint',
        'jscs'
    ]);

};
