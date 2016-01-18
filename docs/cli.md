# cli

Powered by [generator-sub](https://github.com/doug-wade/generator-sub)

## Installing

    npm install -g nixie

###

## generate

Powered by Yeoman, `nixie generate` creates a new `nixie` application.

    nixie generate

## lint

It can be tedious to keep track of which parts of a browser or cordova or electron api are or aren't available in platform independent code.  To make this simpler, we provide a set of custom eslint rules that check for unsupported apis and error if they are used, preventing common bugs.  Powered by eslint.

To run the linter over your platform-independent code from the root directory (where `package.json` is)

    nixie lint --config eslint-config.json --rulesdir node_modules/nixie-eslint-rules/rules node_modules
    nixie lint --config eslint-config.json --rulesdir node_modules/nixie-eslint-rules/rules platform-independent

This will discover whether any of your code or any of your node or bower dependencies are using apis that aren't supported.

You can also check for unsupported options in your nixierc

    eslint --config node_modules/nixie-eslint-rules/nixierc-eslintrc.json --rulesdir node_modules/nixie-eslint-rules/nixierc .nixierc

In case you accidentally specify that you want to start mongodb in a cordova android application.
