'use strict';

var config = require('../lib/config').getConfig();

/**
 * An example command.
 * Usage:
 *     generator-nixie example
 *     > 'You ran the example command!'
 */
module.exports = function () {
  console.log(config.name + ', you ran the example command!');
};
