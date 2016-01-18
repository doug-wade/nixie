# eslint-plugin-nixie

Checks to make sure unsupported nixie apis aren't used in nixie projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nixie`:

```
$ npm install eslint-plugin-nixie --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nixie` globally.

## Usage

Add `nixie` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nixie"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nixie/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





