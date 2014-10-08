/*jshint node: true*/

'use strict';

module.exports = {
    all: {
        options: {
            config: true
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
