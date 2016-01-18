'use strict';

var minimist = require('minimist');
var persister = require('./lib/persister');

module.exports = function (processArgs) {
  function runCommand(command, argv) {
    try {
      require('./sub/' + command)(argv);
    } catch (e) {
      console.error(e);
      console.error('Error: did not recognize options ' + JSON.stringify(argv));
      require('./sub/help')();
    }
  }

  // Run help before updating in case something bad has happened
  var argv = minimist(processArgs.slice(2));
  var command = argv._[0];
  if (argv.h || argv.help || command === 'help') {
    require('./sub/help')(argv);
    return;
  }

  // Auto-update
  var lastUpdated = persister.readLastUpdated();
  if (!lastUpdated.timestamp) {
    persister.writeLastUpdated({ timestamp: Date.now(), by: 'auto' });
  } else if (Date.now() - lastUpdated.timestamp > 14 * 1000 * 60 * 60 * 60 * 24) {

    require('./sub/update')();
  }

  runCommand(command, argv);
};
