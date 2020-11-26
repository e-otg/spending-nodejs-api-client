'use strict';

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.getPageUsingGET_1 = function getPageUsingGET_1 (req, res, next) {
  var payers_edrpous = req.swagger.params['payers_edrpous'].value;
  var recipt_edrpous = req.swagger.params['recipt_edrpous'].value;
  var regions = req.swagger.params['regions'].value;
  var source = req.swagger.params['source'].value;
  var startdate = req.swagger.params['startdate'].value;
  var enddate = req.swagger.params['enddate'].value;
  var payer_account = req.swagger.params['payer_account'].value;
  var recipt_account = req.swagger.params['recipt_account'].value;
  var sumFrom = req.swagger.params['sumFrom'].value;
  var sumTo = req.swagger.params['sumTo'].value;
  var purpose = req.swagger.params['purpose'].value;
  var payerName = req.swagger.params['payerName'].value;
  var reciptName = req.swagger.params['reciptName'].value;
  var payerNameEdrpou = req.swagger.params['payerNameEdrpou'].value;
  var reciptNameEdrpou = req.swagger.params['reciptNameEdrpou'].value;
  var page = req.swagger.params['page'].value;
  var pageSize = req.swagger.params['pageSize'].value;
  Transactions.getPageUsingGET_1(payers_edrpous,recipt_edrpous,regions,source,startdate,enddate,payer_account,recipt_account,sumFrom,sumTo,purpose,payerName,reciptName,payerNameEdrpou,reciptNameEdrpou,page,pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTop100UsingGET = function getTop100UsingGET (req, res, next) {
  var region = req.swagger.params['region'].value;
  Transactions.getTop100UsingGET(region)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTop5UsingGET = function getTop5UsingGET (req, res, next) {
  Transactions.getTop5UsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransactionDetailsUsingGET = function getTransactionDetailsUsingGET (req, res, next) {
  var disposer = req.swagger.params['disposer'].value;
  var transactionId = req.swagger.params['transactionId'].value;
  Transactions.getTransactionDetailsUsingGET(disposer,transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransactionsByStreamUsingGET = function getTransactionsByStreamUsingGET (req, res, next) {
  var payers_edrpous = req.swagger.params['payers_edrpous'].value;
  var recipt_edrpous = req.swagger.params['recipt_edrpous'].value;
  var regions = req.swagger.params['regions'].value;
  var source = req.swagger.params['source'].value;
  var startdate = req.swagger.params['startdate'].value;
  var enddate = req.swagger.params['enddate'].value;
  var payer_account = req.swagger.params['payer_account'].value;
  var recipt_account = req.swagger.params['recipt_account'].value;
  var sumFrom = req.swagger.params['sumFrom'].value;
  var sumTo = req.swagger.params['sumTo'].value;
  var purpose = req.swagger.params['purpose'].value;
  var payerName = req.swagger.params['payerName'].value;
  var reciptName = req.swagger.params['reciptName'].value;
  var payerNameEdrpou = req.swagger.params['payerNameEdrpou'].value;
  var reciptNameEdrpou = req.swagger.params['reciptNameEdrpou'].value;
  var key = req.swagger.params['key'].value;
  Transactions.getTransactionsByStreamUsingGET(payers_edrpous,recipt_edrpous,regions,source,startdate,enddate,payer_account,recipt_account,sumFrom,sumTo,purpose,payerName,reciptName,payerNameEdrpou,reciptNameEdrpou,key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lastLoadUsingGET_1 = function lastLoadUsingGET_1 (req, res, next) {
  Transactions.lastLoadUsingGET_1()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_8 = function pingUsingGET_8 (req, res, next) {
  Transactions.pingUsingGET_8()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_9 = function pingUsingGET_9 (req, res, next) {
  Transactions.pingUsingGET_9()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
