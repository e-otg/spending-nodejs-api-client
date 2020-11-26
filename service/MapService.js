'use strict';


/**
 * Повертає агреговані дані для карти
 *
 * lang String lang (optional)
 * returns AggregateMapDTO
 **/
exports.getAggregateDataUsingGET = function(lang) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "listTreasureDataDTO" : [ {
    "amount" : 6.02745618307040320615897144307382404804229736328125,
    "regionId" : 5,
    "colorId" : 1,
    "regionName" : "regionName",
    "transactionsCount" : 5
  }, {
    "amount" : 6.02745618307040320615897144307382404804229736328125,
    "regionId" : 5,
    "colorId" : 1,
    "regionName" : "regionName",
    "transactionsCount" : 5
  } ],
  "legendsDtoList" : [ {
    "regions" : [ 0, 0 ],
    "legend" : "legend"
  }, {
    "regions" : [ 0, 0 ],
    "legend" : "legend"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

