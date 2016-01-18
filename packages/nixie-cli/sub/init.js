'use strict';

var config = require('../lib/config');
var inquirer = require('inquirer');

/**
 * Set up configuration for generator-nixie. Runs interactive commands to walk you through setting up config.
 * Usage:
 *     generator-nixie init
 */
module.exports = function (callback) {
  inquirer.prompt([
    {
      default: 'User',
      name   : 'name',
      message: 'Please enter your name'
    }
  ], (answers) => {
    config.updateConfig(answers);
    callback();
  });
};
