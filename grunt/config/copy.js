/*jshint node: true*/

'use strict';

module.exports = {
    build: {
        files: [{
            expand: true,
            cwd: '<%= meta.source %>',
            src: [
                '<%= meta.cwdAll %>'
            ],
            dest: '<%= meta.build %>'
        }, {
            expand: false,
            cwd: '<%= meta.cwd %>',
            src: [
                'README.md',
                'license.md'
            ],
            dest: '<%= meta.build %>'
        }]
    }
};
