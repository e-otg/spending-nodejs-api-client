'use strict';


/**
 * Класифікація доходів бюджету
 *
 * authorization String Authorization
 * returns List
 **/
exports.incUsingGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "beginDate" : "beginDate",
  "code" : "code",
  "parentCode" : "parentCode",
  "level" : 6,
  "endDate" : "endDate",
  "name" : "name",
  "beginDoc" : "beginDoc",
  "details" : false,
  "id" : 0,
  "endDoc" : "endDoc"
}, {
  "beginDate" : "beginDate",
  "code" : "code",
  "parentCode" : "parentCode",
  "level" : 6,
  "endDate" : "endDate",
  "name" : "name",
  "beginDoc" : "beginDoc",
  "details" : false,
  "id" : 0,
  "endDoc" : "endDoc"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Класифікація доходів бюджету
 *
 * authorization String Authorization
 * returns List
 **/
exports.kekUsingGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "beginDate" : "beginDate",
  "code" : "code",
  "parentCode" : "parentCode",
  "level" : 6,
  "endDate" : "endDate",
  "name" : "name",
  "beginDoc" : "beginDoc",
  "details" : false,
  "id" : 0,
  "endDoc" : "endDoc"
}, {
  "beginDate" : "beginDate",
  "code" : "code",
  "parentCode" : "parentCode",
  "level" : 6,
  "endDate" : "endDate",
  "name" : "name",
  "beginDoc" : "beginDoc",
  "details" : false,
  "id" : 0,
  "endDoc" : "endDoc"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

