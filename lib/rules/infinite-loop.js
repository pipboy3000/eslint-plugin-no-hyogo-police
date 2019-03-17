/**
 * @fileoverview Rule to disallow casual infinite loop
 * @author Masami Asai
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow easy infinite loop",
      category: "Possible Errors",
      recommended: true,
      url: "https://github.com/pipboy3000/eslint-plugin-no-hyogo-police"
    },
    fixable: null,
    messages: {
      theyWatch: 'They are watching you from Hyogo.'
    },
    schema: [] // no options
  },
  create: function(context) {
    function report(node) {
      context.report({ node, messageId: 'theyWatch' })
    }
    return {
      ForStatement: function(node) {
        if (
          !node.test ||
          (node.test && node.test.type !== "BinaryExpression")
        ) {
          report(node)
        }
      },
      WhileStatement: function(node) {
        if (
          node.test.type !== "BinaryExpression" &&
          node.test.name !== "undefined" &&
          node.test.value !== null &&
          node.test.value !== false &&
          node.test.value !== 0
        ) {
          report(node)
        }
      }
    };
  }
};
