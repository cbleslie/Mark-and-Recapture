var test = require('tape');
var MaR = require('./lib/');

test('Estimate Lincoln-Peterson Index will return and object with the property\nestimate and it will have the value of 33', function(t) {
  t.plan(1);
  t.deepEqual(
    MaR.estimateLincoln(10, 20, 6),
    { estimate: 33 }
  );
});

test('Estimate Chapman Index will return and object with the property estimate\nand it will have the value of 32', function(t) {
  t.plan(1);
  t.deepEqual(
    MaR.estimateChapman(10, 20, 6),
    { estimate: 32 }
  );
});

test('Estimate Bayesian will return and object with 2 properties, estimate and\ndeviation, it will have the value of 42 and 16.345871038277526 respectively', function(t) {
  t.plan(1);
  t.deepEqual(
    MaR.estimateBayesian(10, 20, 6),
    {
      estimate: 42,
      deviation: 16.345871038277526
    }
  );
});
