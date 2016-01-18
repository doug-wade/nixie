'use strict';

var execSync = require('child_process').execSync;

/**
 * Updates nixie by installing the most recent version of the npm package.
 * Usage:
 *     nixie upgrade
 *     # output from npm
 */
module.exports = function () {
  try {
    var result = execSync('npm install -g nixie');
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
