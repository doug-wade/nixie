# cli

Powered by [generator-sub](https://github.com/doug-wade/generator-sub)

## Installing

    npm install -g nixie

## Commands

## generate

Powered by Yeoman, `nixie generate` creates a new `nixie` application.

    nixie generate

## lint

It can be tedious to keep track of which parts of a browser or cordova or electron api are or aren't available in platform independent code.  To make this simpler, there's an eslint plugin that checks for unsupported apis and error if they are used, preventing common bugs.

To run the linter over your platform-independent code from the root directory (where `package.json` is)

    nixie lint

This will discover whether any of your code or any of your node or bower dependencies are using apis that aren't supported.

You can also check for unsupported options in your nixierc

    eslint --config node_modules/nixie-eslint-rules/nixierc-eslintrc.json --rulesdir node_modules/nixie-eslint-rules/nixierc .nixierc

In case you accidentally specify that you want to start mongodb in a cordova android application.

## publish

Attempts to publish the app, if possible.  
