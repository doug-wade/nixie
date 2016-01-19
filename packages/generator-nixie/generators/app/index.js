'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(chalk.blue('Willkommen auf der Nixe-Generator!🇩🇪'));
    this.log(chalk.red('Welcome to the nixie generator!🇺🇸'));
    this.log(chalk.yellow('Bienvenido al generador nixie!🇲🇽'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('_nixierc'),
      this.destinationPath('.nixierc')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
