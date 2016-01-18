'use strict';

var execSync = require('child_process').execSync;

/**
 * Updates generator-nixie by installing the most recent version of the npm package.
 * Usage:
 *     generator-nixie update
 *     # output from npm
 */
module.exports = function () {
  try {
    var result = execSync('npm install -g generator-nixie');
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
