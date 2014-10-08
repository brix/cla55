/*jshint node: true*/

'use strict';

module.exports = {
    all: {
        files: {
            src: [
                '**/*.json',
                '!build/**/*',
                '!node_modules/**/*'
            ]
        }
    }
};
