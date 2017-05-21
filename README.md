# Mark and Recapture
[Mark and recapture is a method commonly used in ecology to estimate an animal population's size.](//https://en.wikipedia.org/wiki/Mark_and_recapture) It's also can be used on development/testing teams to estimate bug population. Having two teams do individual bug audits, and throwing their values into the algorithm to recieve an estimate.

## Install
```Shell
npm i mark-and-recapture
```
## Usage example
```JavaScript
var MaR = require('mark-and-recapture');
//function is curried so you can pass it it's needed values like so...
MaR.estimate(10)(20)(6);
```
Should return and object...
```JavaScript
{
  lincolnIndex: 33,
  chapmanIndex: 32,
  basyesianEstimate: 42,
  basyesianEstimateStandardDeviation: 16.345871038277526
}
```
## What are the values am I passing in?
In the function, `MaR.estimate(capInital)(capCurrent)(capIntersection)` the first value `capInital` is the first capture (software bugs/animals/whatever...), the second value `capCurrent` is the second round of capturing, and finally `capIntersection` is the "overlap" or intersection of both rounds of capturing. Id est, what of bugs/animals/whatever in **both of the previous rounds** of capturing are the same.

### A scenario
**Team A**, goes out into the forest to search for Humming birds, they capture, and tag 10 Humming Birds. Later, **Team B** goes out and does the same and captures 20 Humming Birds, of the 20 that they caught, 6 of them were already tagged by **Team A**! From this information, we can glean that, using the proper mathmatical algorithms, we can make a pretty accruate estimate of the population.
