'use strict';

var utils = require('../utils/writer.js');
var GoogleAnalyticStatistic = require('../service/GoogleAnalyticStatisticService');

module.exports.getAgeStatUsingGET = function getAgeStatUsingGET (req, res, next) {
  GoogleAnalyticStatistic.getAgeStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBrowserStatUsingGET = function getBrowserStatUsingGET (req, res, next) {
  GoogleAnalyticStatistic.getBrowserStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeviceStatUsingGET = function getDeviceStatUsingGET (req, res, next) {
  GoogleAnalyticStatistic.getDeviceStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGenderStatUsingGET = function getGenderStatUsingGET (req, res, next) {
  GoogleAnalyticStatistic.getGenderStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRegionStatUsingGET = function getRegionStatUsingGET (req, res, next) {
  GoogleAnalyticStatistic.getRegionStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_4 = function pingUsingGET_4 (req, res, next) {
  GoogleAnalyticStatistic.pingUsingGET_4()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
