'use strict';

var utils = require('../utils/writer.js');
var Reports = require('../service/ReportsService');

module.exports.codesUsingGET = function codesUsingGET (req, res, next) {
  Reports.codesUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAsynchUsingGET = function findAsynchUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
  var reportTypeId = req.swagger.params['reportTypeId'].value;
  var periodId = req.swagger.params['periodId'].value;
  Reports.findAsynchUsingGET(edrpou,reportTypeId,periodId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findByDeletedDateUsingGET = function findByDeletedDateUsingGET (req, res, next) {
  var date = req.swagger.params['date'].value;
  Reports.findByDeletedDateUsingGET(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findBySignDateUsingGET = function findBySignDateUsingGET (req, res, next) {
  var date = req.swagger.params['date'].value;
  Reports.findBySignDateUsingGET(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAsynchUsingGET = function getAsynchUsingGET (req, res, next) {
  var token = req.swagger.params['token'].value;
  Reports.getAsynchUsingGET(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCsvUsingGET = function getCsvUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
  var reportTypeId = req.swagger.params['reportTypeId'].value;
  var periodIds = req.swagger.params['periodIds'].value;
  var edrpou2 = req.swagger.params['edrpou'].value;
  var budget = req.swagger.params['budget'].value;
  var fund = req.swagger.params['fund'].value;
  var vidClassCode = req.swagger.params['vidClassCode'].value;
  var progClassCode = req.swagger.params['progClassCode'].value;
  var signDateFrom = req.swagger.params['signDateFrom'].value;
  var signDateTo = req.swagger.params['signDateTo'].value;
  var createDateFrom = req.swagger.params['createDateFrom'].value;
  var createDateTo = req.swagger.params['createDateTo'].value;
  var signStatus = req.swagger.params['signStatus'].value;
  var page = req.swagger.params['page'].value;
  var size = req.swagger.params['size'].value;
  Reports.getCsvUsingGET(edrpou,reportTypeId,periodIds,edrpou2,budget,fund,vidClassCode,progClassCode,signDateFrom,signDateTo,createDateFrom,createDateTo,signStatus,page,size)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKpkUsingGET = function getKpkUsingGET (req, res, next) {
  var periodId = req.swagger.params['periodId'].value;
  var budget = req.swagger.params['budget'].value;
  Reports.getKpkUsingGET(periodId,budget)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getKvkUsingGET = function getKvkUsingGET (req, res, next) {
  var periodId = req.swagger.params['periodId'].value;
  var budget = req.swagger.params['budget'].value;
  Reports.getKvkUsingGET(periodId,budget)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPageUsingGET = function getPageUsingGET (req, res, next) {
  var edrpou = req.swagger.params['edrpou'].value;
  var reportTypeId = req.swagger.params['reportTypeId'].value;
  var periodIds = req.swagger.params['periodIds'].value;
  var edrpou2 = req.swagger.params['edrpou'].value;
  var budget = req.swagger.params['budget'].value;
  var fund = req.swagger.params['fund'].value;
  var vidClassCode = req.swagger.params['vidClassCode'].value;
  var progClassCode = req.swagger.params['progClassCode'].value;
  var signDateFrom = req.swagger.params['signDateFrom'].value;
  var signDateTo = req.swagger.params['signDateTo'].value;
  var createDateFrom = req.swagger.params['createDateFrom'].value;
  var createDateTo = req.swagger.params['createDateTo'].value;
  var signStatus = req.swagger.params['signStatus'].value;
  var page = req.swagger.params['page'].value;
  var size = req.swagger.params['size'].value;
  Reports.getPageUsingGET(edrpou,reportTypeId,periodIds,edrpou2,budget,fund,vidClassCode,progClassCode,signDateFrom,signDateTo,createDateFrom,createDateTo,signStatus,page,size)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPeriodsUsingGET = function getPeriodsUsingGET (req, res, next) {
  Reports.getPeriodsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPeriodsUsingGET_1 = function getPeriodsUsingGET_1 (req, res, next) {
  Reports.getPeriodsUsingGET_1()
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
  Reports.getReporstHistoryListUsingGET(edrpou,docId,historyId)
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
  Reports.getReporstHistoryListUsingGET_1(edrpou,docId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReporstHistoryListUsingGET_2 = function getReporstHistoryListUsingGET_2 (req, res, next) {
  var disposer = req.swagger.params['disposer'].value;
  var reportId = req.swagger.params['reportId'].value;
  var historyId = req.swagger.params['historyId'].value;
  Reports.getReporstHistoryListUsingGET_2(disposer,reportId,historyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReporstHistoryListUsingGET_3 = function getReporstHistoryListUsingGET_3 (req, res, next) {
  var disposer = req.swagger.params['disposer'].value;
  var reportId = req.swagger.params['reportId'].value;
  Reports.getReporstHistoryListUsingGET_3(disposer,reportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReportInfoUsingPOST_1 = function getReportInfoUsingPOST_1 (req, res, next) {
  var checkSignReq = req.swagger.params['checkSignReq'].value;
  Reports.getReportInfoUsingPOST_1(checkSignReq)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReportTypeUsingGET = function getReportTypeUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Reports.getReportTypeUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReportTypesUsingGET = function getReportTypesUsingGET (req, res, next) {
  Reports.getReportTypesUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReportUsingGET = function getReportUsingGET (req, res, next) {
  var disposer = req.swagger.params['disposer'].value;
  var reportId = req.swagger.params['reportId'].value;
  Reports.getReportUsingGET(disposer,reportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingUsingGET_6 = function pingUsingGET_6 (req, res, next) {
  Reports.pingUsingGET_6()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
