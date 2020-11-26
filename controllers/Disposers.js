'use strict';

var utils = require('../utils/writer.js');
var Disposers = require('../service/DisposersService');

module.exports.getActUsingGET = function getActUsingGET (req, res, next) {
  var actId = req.swagger.params['actId'].value;
  Disposers.getActUsingGET(actId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActsUsingGET = function getActsUsingGET (req, res, next) {
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
  Disposers.getActsUsingGET(documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAddendsUsingGET = function getAddendsUsingGET (req, res, next) {
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
  Disposers.getAddendsUsingGET(documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAddendumUsingGET = function getAddendumUsingGET (req, res, next) {
  var addendumId = req.swagger.params['addendumId'].value;
  Disposers.getAddendumUsingGET(addendumId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAgreementsUsingGET = function getAgreementsUsingGET (req, res, next) {
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
  var enabledInDateFrom = req.swagger.params['enabledInDateFrom'].value;
  var enabledInDateTo = req.swagger.params['enabledInDateTo'].value;
  Disposers.getAgreementsUsingGET(documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version,enabledInDateFrom,enabledInDateTo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContractUsingGET = function getContractUsingGET (req, res, next) {
  var contractId = req.swagger.params['contractId'].value;
  Disposers.getContractUsingGET(contractId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCsvActsUsingGET = function getCsvActsUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
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
  Disposers.getCsvActsUsingGET(edrpou,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCsvAddendumsUsingGET = function getCsvAddendumsUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
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
  Disposers.getCsvAddendumsUsingGET(edrpou,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCsvAgreementsUsingGET = function getCsvAgreementsUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
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
  var enabledInDateFrom = req.swagger.params['enabledInDateFrom'].value;
  var enabledInDateTo = req.swagger.params['enabledInDateTo'].value;
  Disposers.getCsvAgreementsUsingGET(edrpou,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version,enabledInDateFrom,enabledInDateTo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCsvPenyUsingGET = function getCsvPenyUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
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
  var enabledInDateFrom = req.swagger.params['enabledInDateFrom'].value;
  var enabledInDateTo = req.swagger.params['enabledInDateTo'].value;
  Disposers.getCsvPenyUsingGET(edrpou,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version,enabledInDateFrom,enabledInDateTo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDataSnapshotUsingGET = function getDataSnapshotUsingGET (req, res, next) {
  var date = req.swagger.params['date'].value;
  var type = req.swagger.params['type'].value;
  Disposers.getDataSnapshotUsingGET(date,type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDataUsingGET = function getDataUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
  Disposers.getDataUsingGET(edrpou)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDisposersCsvUsingGET = function getDisposersCsvUsingGET (req, res, next) {
  var regionIds = req.swagger.params['regionIds'].value;
  var edrpou = req.swagger.params['edrpou'].value;
  var organizationName = req.swagger.params['organizationName'].value;
  var kopfg = req.swagger.params['kopfg'].value;
  var orgEdrState = req.swagger.params['orgEdrState'].value;
  var hasCabinet = req.swagger.params['hasCabinet'].value;
  Disposers.getDisposersCsvUsingGET(regionIds,edrpou,organizationName,kopfg,orgEdrState,hasCabinet)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilesListUsingGET = function getFilesListUsingGET (req, res, next) {
  Disposers.getFilesListUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPenaltyUsingGET = function getPenaltyUsingGET (req, res, next) {
  var penyId = req.swagger.params['penyId'].value;
  Disposers.getPenaltyUsingGET(penyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPenyUsingGET = function getPenyUsingGET (req, res, next) {
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
  Disposers.getPenyUsingGET(documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReporstHistoryListUsingGET = function getReporstHistoryListUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
  var docId = req.swagger.params['docId'].value;
  var historyId = req.swagger.params['historyId'].value;
  Disposers.getReporstHistoryListUsingGET(edrpou,docId,historyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReporstHistoryListUsingGET_1 = function getReporstHistoryListUsingGET_1 (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
  var docId = req.swagger.params['docId'].value;
  Disposers.getReporstHistoryListUsingGET_1(edrpou,docId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReportInfoUsingPOST = function getReportInfoUsingPOST (req, res, next) {
  var checkSignReq = req.swagger.params['checkSignReq'].value;
  Disposers.getReportInfoUsingPOST(checkSignReq)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStatUsingGET = function getStatUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
  Disposers.getStatUsingGET(edrpou)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_2 = function pingUsingGET_2 (req, res, next) {
  Disposers.pingUsingGET_2()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
