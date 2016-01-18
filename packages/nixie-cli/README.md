# nixie-cli

The nixie cli helps authors of nixie packages work with and build nixie applications.  Find out more in [the docs](https://github.com/doug-wade/nixie/tree/master/docs)


## Installation

To install, make sure you have node installed

    sudo apt-get install nodejs

Then install nixie-cli globally

    npm install -g nixie


## Use

To get help, or to get the list of all sub commands, simply run `help`

    nixie help

`help` is also used to discover how to use sub commands

    nixie help example
    > An example command.
    > Usage:
    >      nixie example
    >      > 'You ran the example command!'

To update nixie-cli, use update

    nixie update

Though if you haven't updated in a while, nixie-cli will remind you 😀

Before you run any commands, you'll need to set up some config by running `init`

    nixie init

Then follow the prompts
