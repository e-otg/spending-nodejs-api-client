'use strict';

var utils = require('../utils/writer.js');
var PageableDisposers = require('../service/PageableDisposersService');

module.exports.getDisposersUsingPOST = function getDisposersUsingPOST (req, res, next) {
  var request = req.swagger.params['request'].value;
  PageableDisposers.getDisposersUsingPOST(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDocUsingGET = function getDocUsingGET (req, res, next) {
  var docType = req.swagger.params['docType'].value;
  var xFILTERDATA = req.swagger.params['X-FILTER-DATA'].value;
  var documentId = req.swagger.params['documentId'].value;
  var disposerId = req.swagger.params['disposerId'].value;
  var contractorId = req.swagger.params['contractorId'].value;
  var currency = req.swagger.params['currency'].value;
  var names = req.swagger.params['names'].value;
  var documentDateFrom = req.swagger.params['documentDateFrom'].value;
  var documentDateTo = req.swagger.params['documentDateTo'].value;
  var signDateFrom = req.swagger.params['signDateFrom'].value;
  var signDateTo = req.swagger.params['signDateTo'].value;
  var amountFrom = req.swagger.params['amountFrom'].value;
  var amountTo = req.swagger.params['amountTo'].value;
  var documentNumber = req.swagger.params['documentNumber'].value;
  var version = req.swagger.params['version'].value;
  var page = req.swagger.params['page'].value;
  var pageSize = req.swagger.params['pageSize'].value;
  var enabledInDateFrom = req.swagger.params['enabledInDateFrom'].value;
  var enabledInDateTo = req.swagger.params['enabledInDateTo'].value;
  PageableDisposers.getDocUsingGET(docType,xFILTERDATA,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version,page,pageSize,enabledInDateFrom,enabledInDateTo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMinistriesUsingPOST = function getMinistriesUsingPOST (req, res, next) {
  var request = req.swagger.params['request'].value;
  PageableDisposers.getMinistriesUsingPOST(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_3 = function pingUsingGET_3 (req, res, next) {
  PageableDisposers.pingUsingGET_3()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
