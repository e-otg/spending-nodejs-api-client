'use strict';

var utils = require('../utils/writer.js');
var Budget = require('../service/BudgetService');

module.exports.incUsingGET = function incUsingGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  Budget.incUsingGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.kekUsingGET = function kekUsingGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  Budget.kekUsingGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
