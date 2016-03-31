var assert = require("assert");
var avo = require('../avo');

describe("For the bestdeal kata,", function() {


      it('I should list the different deals', function() {

        var result = avo.deals('1 for R3, 2 for R7, 3 for R10, 5 for R14.50');
        assert.deepEqual(result, ['1 for R3', '2 for R7', '3 for R10', '5 for R14.50']);

      });
        });
