var RuleTester = require("eslint").RuleTester;

var tester = new RuleTester();
tester.run('infinite_loop', require('../../../lib/rules/infinite-loop'), {
  valid: [
    { code: "while(n < 3){}" },
    { code: "while(false){}" },
    { code: "while(null){}" },
    { code: "while(undefined){}" },
    { code: "while(0){}" },
    { code: "for(var i = 0; i < 10; i++) {}" }
  ],
  invalid: [
    { code: "while(true){}", errors: ["They are watching you from Hyogo."] },
    { code: "while(1){}", errors: ["They are watching you from Hyogo."] },
    { code: "while('a'){}", errors: ["They are watching you from Hyogo."] },
    { code: "for(;;){}", errors: ["They are watching you from Hyogo."] },
    { code: "for(var i = 0;;i++){}", errors: ["They are watching you from Hyogo."] },
    { code: "for(var i = 0; i = 0;i++){}", errors: ["They are watching you from Hyogo."] }
  ]
})
