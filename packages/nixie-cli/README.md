# generator-nixie

generator-nixie is a cli application that uses subcommands to organize functionality into an easily-readable, fluent argument style.

## Installation


try {
To install, make sure you have node installed

    sudo apt-get install nodejs

Then install generator-nixie globally

    npm install -g generator-nixie


## Use

To get help, or to get the list of all sub commands, simply run `help`

    generator-nixie help

`help` is also used to discover how to use sub commands

    generator-nixie help example
    > An example command.
    > Usage:
    >      sub example
    >      > 'You ran the example command!'

To update generator-nixie, use update

    generator-nixie update

Though if you haven't updated in a while, generator-nixie will remind you 😀

Before you run any commands, you'll need to set up some config by running `init`

    generator-nixie init

Then follow the prompts
