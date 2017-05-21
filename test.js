var test = require('tape');
var MaR = require('./lib/');

test('Estimate will return and object with the properties\n lincolnIndex, chapmanIndex, basyesianEstimate, basyesianEstimateStandardDeviation and it will have the values of 33, 32, 42, and 16.345871038277526', function(t) {
  t.plan(1);
  t.deepEqual(
    MaR.estimate(10)(20)(6),
    {
      lincolnIndex: 33,
      chapmanIndex: 32,
      basyesianEstimate: 42,
      basyesianEstimateStandardDeviation: 16.345871038277526
     }
  );
});
