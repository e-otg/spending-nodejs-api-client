'use strict';


/**
 * Статистика за віком
 *
 * returns List
 **/
exports.getAgeStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0.8008282,
  "name" : "name",
  "percents" : 6.0274563
}, {
  "amount" : 0.8008282,
  "name" : "name",
  "percents" : 6.0274563
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Використання браузерів
 *
 * returns List
 **/
exports.getBrowserStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0.8008282,
  "name" : "name",
  "percents" : 6.0274563
}, {
  "amount" : 0.8008282,
  "name" : "name",
  "percents" : 6.0274563
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Використання пристроїв
 *
 * returns List
 **/
exports.getDeviceStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0.8008282,
  "name" : "name",
  "percents" : 6.0274563
}, {
  "amount" : 0.8008282,
  "name" : "name",
  "percents" : 6.0274563
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Демографічні показники
 *
 * returns List
 **/
exports.getGenderStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0.8008282,
  "name" : "name",
  "percents" : 6.0274563
}, {
  "amount" : 0.8008282,
  "name" : "name",
  "percents" : 6.0274563
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Статистика за регіонами
 *
 * returns List
 **/
exports.getRegionStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "count" : 0,
  "name" : "name",
  "sum" : 1.4658129805029452,
  "id" : 6
}, {
  "count" : 0,
  "name" : "name",
  "sum" : 1.4658129805029452,
  "id" : 6
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
exports.pingUsingGET_4 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

