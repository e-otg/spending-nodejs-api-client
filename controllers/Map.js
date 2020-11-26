'use strict';

var utils = require('../utils/writer.js');
var Map = require('../service/MapService');

module.exports.getAggregateDataUsingGET = function getAggregateDataUsingGET (req, res, next) {
  var lang = req.swagger.params['lang'].value;
  Map.getAggregateDataUsingGET(lang)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
