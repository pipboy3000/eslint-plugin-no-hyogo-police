'use strict'

module.exports = {
  rules: {
    'infinite-loop': require(__dirname + '/lib/rules/infinite-loop')
  },
  configs: {
    recommended: {
      plugins: ['no-hyogo-police'],
      rules: {
        'no-hyogo-police/infinite-loop': 'error'
      }
    }
  }
}