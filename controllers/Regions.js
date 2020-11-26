'use strict';

var utils = require('../utils/writer.js');
var Regions = require('../service/RegionsService');

module.exports.getRegionsUsingGET_1 = function getRegionsUsingGET_1 (req, res, next) {
  Regions.getRegionsUsingGET_1()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_5 = function pingUsingGET_5 (req, res, next) {
  Regions.pingUsingGET_5()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
