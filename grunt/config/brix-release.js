/*jshint node: true*/

'use strict';

module.exports = {
    options: {
        bump: {
            files: ['package.json']
        },
        build: {
            task: 'build',
            dest: '<%= meta.build %>'
        }
    }
};
