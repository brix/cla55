/*jshint node: true*/

'use strict';

module.exports = {
    options: {
        buildTask: 'build',
        bumpFiles: ['package.json'],
        dest: '<%= meta.build %>'
    }
};
