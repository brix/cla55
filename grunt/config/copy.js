/*jshint node: true*/

'use strict';

module.exports = {
    build: {
        files: [{
            expand: true,
            cwd: './source/',
            src: [
                '**/*'
            ],
            dest: './build/'
        }, {
            expand: false,
            cwd: './',
            src: [
                'package.json',
                'README.md',
                'license.md'
            ],
            dest: './build/'
        }]
    }
};
