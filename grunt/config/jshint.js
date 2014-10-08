/*jshint node: true*/

'use strict';

module.exports = {
    dev: {
        options: {
            jshintrc: true
        },
        files: {
            src: [
                '**/*.js',
                '!build/**/*',
                '!node_modules/**/*'
            ]
        }
    }
};
