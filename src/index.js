'use strict'
//https://en.wikipedia.org/wiki/Mark_and_recapture
function estimateLincoln(capInital, capCurrent, capIntersection) {
  //https://en.wikipedia.org/wiki/Lincoln_index
  let lincolnIndex = Math.trunc((capInital * capCurrent) / capIntersection);
  return {
    estimate: lincolnIndex
  };
}

function estimateChapman(capInital, capCurrent, capIntersection) {
  //https://en.wikipedia.org/wiki/Lincoln_index
  let chapmanIndex = Math.trunc(((capInital + 1) * (capCurrent + 1)) / (capIntersection + 1) - 1);
  return {
    estimate: chapmanIndex
  };
}

function estimateBayesian(capInital, capCurrent, capIntersection) {
  //https://en.wikipedia.org/wiki/Mark_and_recapture#Bayesian_estimate
  let basyesianEstimateMean = Math.trunc(((capInital - 1) * (capCurrent - 1)) / (capIntersection - 2));
  let basyesianEstimateStandardDeviation = Math.sqrt(((capCurrent - 1) * (capInital - 1) * (capCurrent  - capIntersection + 1) * (capInital - capIntersection + 1)) / ((capIntersection - 2) * (capIntersection - 2) * (capIntersection - 3)));

  return {
    estimate: basyesianEstimateMean,
    deviation: basyesianEstimateStandardDeviation
  };
}

export {
  estimateLincoln, 
  estimateChapman,
  estimateBayesian
};
