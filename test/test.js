var assert = require("assert");
import Rect from "../dist/rect";
import TestSuite from 'parsegraph-testsuite';

describe("Package", function () {
  it("works", ()=>{
    const rectTests = new TestSuite('Rect');

    rectTests.addTest('vMin', function() {
      const r = new Rect(0, 0, 200, 200);
      if (r.vMin() !== -100) {
        return 'vMin, expected -100, got ' + r.vMin();
      }
    });

    rectTests.addTest('vMax', function() {
      const r = new Rect(0, 0, 200, 200);
      if (r.vMax() !== 100) {
        return 'vMax, expected 100, got ' + r.vMax();
      }
    });

    rectTests.addTest('hMin', function() {
      const r = new Rect(0, 0, 300, 200);
      if (r.hMin() !== -150) {
        return 'vMin, expected -150, got ' + r.vMin();
      }
    });

    rectTests.addTest('hMax', function() {
      const r = new Rect(0, 0, 300, 200);
      if (r.hMax() !== 150) {
        return 'hMax, expected 150, got ' + r.vMax();
      }
    });

    rectTests.addTest('include', function() {
      const r = new Rect(0, 0, 200, 200);
      r.include(0, 400, 200, 200);

      if (r.vMax() !== new Rect(0, 400, 200, 200).vMax()) {
        return 'vMax failed to adjust';
      }
      // console.log(r);
    });
  
    const results = rectTests.run();
    assert.ok(results.isSuccessful());
  });
});
