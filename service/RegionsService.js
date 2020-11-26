'use strict';


/**
 * Повертає довідник регіонів
 *
 * returns List
 **/
exports.getRegionsUsingGET_1 = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "regionCode" : 0,
  "koatuu" : "koatuu",
  "regionName" : "regionName"
}, {
  "regionCode" : 0,
  "koatuu" : "koatuu",
  "regionName" : "regionName"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Перевірка доступності API
 *
 * no response value expected for this operation
 **/
exports.pingUsingGET_5 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

