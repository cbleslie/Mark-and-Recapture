'use strict'
//https://en.wikipedia.org/wiki/Mark_and_recapture
const estimate = capInital => capCurrent => capIntersection => {
  //https://en.wikipedia.org/wiki/Lincoln_index
  const lincolnIndex = Math.trunc((capInital * capCurrent) / capIntersection);
  //https://en.wikipedia.org/wiki/Lincoln_index
  const chapmanIndex = Math.trunc(((capInital + 1) * (capCurrent + 1)) / (capIntersection + 1) - 1);
  //https://en.wikipedia.org/wiki/Mark_and_recapture#Bayesian_estimate
  const basyesianEstimateMean = Math.trunc(((capInital - 1) * (capCurrent - 1)) / (capIntersection - 2));
  const basyesianEstimateStandardDeviation = Math.sqrt(((capCurrent - 1) * (capInital - 1) * (capCurrent  - capIntersection + 1) * (capInital - capIntersection + 1)) / ((capIntersection - 2) * (capIntersection - 2) * (capIntersection - 3)));

  return {
    lincolnIndex: lincolnIndex,
    chapmanIndex: chapmanIndex,
    basyesianEstimate: basyesianEstimateMean,
    basyesianEstimateStandardDeviation: basyesianEstimateStandardDeviation
  };
}

export {
  estimate
};
