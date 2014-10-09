/*jshint node: true*/

'use strict';

module.exports = {
    all: {
        options: {
            config: true
        },
        files: {
            src: [
                '<%= meta.cwdAll %>.js',
                '!<%= meta.buildAll %>',
                '!<%= meta.npmAll %>'
            ]
        }
    }
};
