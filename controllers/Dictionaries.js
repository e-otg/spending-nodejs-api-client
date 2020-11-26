'use strict';

var utils = require('../utils/writer.js');
var Dictionaries = require('../service/DictionariesService');

module.exports.getAddressByKoatuuUsingGET = function getAddressByKoatuuUsingGET (req, res, next) {
  var koatuu = req.swagger.params['koatuu'].value;
  Dictionaries.getAddressByKoatuuUsingGET(koatuu)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContractorTypesUsingGET = function getContractorTypesUsingGET (req, res, next) {
  Dictionaries.getContractorTypesUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCountriesUsingGET = function getCountriesUsingGET (req, res, next) {
  Dictionaries.getCountriesUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCurrencyListUsingGET = function getCurrencyListUsingGET (req, res, next) {
  Dictionaries.getCurrencyListUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDkppUsingGET = function getDkppUsingGET (req, res, next) {
  Dictionaries.getDkppUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDksuDepartmentsUsingGET = function getDksuDepartmentsUsingGET (req, res, next) {
  Dictionaries.getDksuDepartmentsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExactKvedUsingGET = function getExactKvedUsingGET (req, res, next) {
  var exactKved = req.swagger.params['exactKved'].value;
  Dictionaries.getExactKvedUsingGET(exactKved)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKopfgUsingGET = function getKopfgUsingGET (req, res, next) {
  Dictionaries.getKopfgUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKvedUsingGET = function getKvedUsingGET (req, res, next) {
  Dictionaries.getKvedUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrgTypesUsingGET = function getOrgTypesUsingGET (req, res, next) {
  Dictionaries.getOrgTypesUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcurementDictionaryUsingGET = function getProcurementDictionaryUsingGET (req, res, next) {
  var lang = req.swagger.params['lang'].value;
  Dictionaries.getProcurementDictionaryUsingGET(lang)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRegionsUsingGET = function getRegionsUsingGET (req, res, next) {
  Dictionaries.getRegionsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_1 = function pingUsingGET_1 (req, res, next) {
  Dictionaries.pingUsingGET_1()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
