/*jshint node: true*/

'use strict';

module.exports = {
    options: {
        createTag: false,
        commit: true,
        commitFiles: ['package.json'],
        commitMessage: 'Bump v%VERSION%',
        push: false,
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false
    }
};
