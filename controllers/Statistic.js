'use strict';

var utils = require('../utils/writer.js');
var Statistic = require('../service/StatisticService');

module.exports.geAllStatUsingGET = function geAllStatUsingGET (req, res, next) {
  Statistic.geAllStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCabinetPageStatUsingGET = function getCabinetPageStatUsingGET (req, res, next) {
  var kopfg = req.swagger.params['kopfg'].value;
  var regionId = req.swagger.params['regionId'].value;
  var page = req.swagger.params['page'].value;
  var pageSize = req.swagger.params['pageSize'].value;
  Statistic.getCabinetPageStatUsingGET(kopfg,regionId,page,pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCsvStatsUsingGET = function getCsvStatsUsingGET (req, res, next) {
  Statistic.getCsvStatsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCurrMonthStatUsingGET = function getCurrMonthStatUsingGET (req, res, next) {
  Statistic.getCurrMonthStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCurrYearStatUsingGET = function getCurrYearStatUsingGET (req, res, next) {
  Statistic.getCurrYearStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDocStatUsingGET = function getDocStatUsingGET (req, res, next) {
  Statistic.getDocStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDynamicsByPeriodsUsingGET = function getDynamicsByPeriodsUsingGET (req, res, next) {
  Statistic.getDynamicsByPeriodsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKopfgStatUsingGET = function getKopfgStatUsingGET (req, res, next) {
  Statistic.getKopfgStatUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStatUsingGET = function getStatUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
  Statistic.getStatUsingGET(edrpou)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_10 = function pingUsingGET_10 (req, res, next) {
  Statistic.pingUsingGET_10()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_7 = function pingUsingGET_7 (req, res, next) {
  Statistic.pingUsingGET_7()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
