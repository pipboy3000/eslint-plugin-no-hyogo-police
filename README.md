# eslint-plugin-no-hyogo-police

ESLint rule for check easy infinite loop.


## Installation

```
npm install --save-dev eslint eslint-plugin-no-hyogo-police
```

## Usage

Add `no-hyogo-police` to the plugins section of your `.eslintrc.js` configuration file. 

```
{
  "plugins": [
    "no-hyogo-police"
  ]
}
```

Then configure the rules

```
{
  "rules": {
    "no-hyogo-police/infinite-loop": "error"
  }
}
```

or use recommended rule set

```
{
  "extends": ["plugin:no-hyogo-police/recommended]
}
```

## Why Hyogo Police

https://www.itmedia.co.jp/news/articles/1903/05/news080.html ([Google Translate](https://translate.google.co.jp/translate?hl=ja&sl=ja&tl=en&u=https%3A%2F%2Fwww.itmedia.co.jp%2Fnews%2Farticles%2F1903%2F05%2Fnews080.html))