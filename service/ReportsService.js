'use strict';


/**
 * Довідник кодів колонок/рядків звітів
 *
 * returns ReportApiCodeDto
 **/
exports.codesUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;UTF-8'] = {
  "code" : "code",
  "reportTypeId" : 0,
  "shortTitle" : "shortTitle",
  "title" : "title",
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит звіту за ЄДРПОУ, типом звіту та періодом
 *
 * edrpou String ЕДРПОУ (optional)
 * reportTypeId Long Тип звіту (optional)
 * periodId Long Період звіту (optional)
 * returns String
 **/
exports.findAsynchUsingGET = function(edrpou,reportTypeId,periodId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит вилучених звітів за дату
 *
 * date date Дата вилучення
 * returns String
 **/
exports.findByDeletedDateUsingGET = function(date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит звітів за датою оприлюднення
 *
 * date date Дата оприлюднення
 * returns String
 **/
exports.findBySignDateUsingGET = function(date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Отримання результату запиту за віжповідним токеном
 *
 * token String token
 * returns byte[]
 **/
exports.getAsynchUsingGET = function(token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит reports
 *
 * edrpou String edrpou
 * reportTypeId List  (optional)
 * periodIds List  (optional)
 * edrpou2 String  (optional)
 * budget String  (optional)
 * fund String  (optional)
 * vidClassCode String  (optional)
 * progClassCode String  (optional)
 * signDateFrom Date  (optional)
 * signDateTo Date  (optional)
 * createDateFrom Date  (optional)
 * createDateTo Date  (optional)
 * signStatus String  (optional)
 * page Integer  (optional)
 * size Integer  (optional)
 * no response value expected for this operation
 **/
exports.getCsvUsingGET = function(edrpou,reportTypeId,periodIds,edrpou2,budget,fund,vidClassCode,progClassCode,signDateFrom,signDateTo,createDateFrom,createDateTo,signStatus,page,size) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Запит reports
 *
 * periodId Long periodId (optional)
 * budget String budget (optional)
 * returns String
 **/
exports.getKpkUsingGET = function(periodId,budget) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит reports
 *
 * periodId Long periodId (optional)
 * budget String budget (optional)
 * returns String
 **/
exports.getKvkUsingGET = function(periodId,budget) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит reports
 *
 * edrpou String edrpou
 * reportTypeId List  (optional)
 * periodIds List  (optional)
 * edrpou2 String  (optional)
 * budget String  (optional)
 * fund String  (optional)
 * vidClassCode String  (optional)
 * progClassCode String  (optional)
 * signDateFrom Date  (optional)
 * signDateTo Date  (optional)
 * createDateFrom Date  (optional)
 * createDateTo Date  (optional)
 * signStatus String  (optional)
 * page Integer  (optional)
 * size Integer  (optional)
 * returns String
 **/
exports.getPageUsingGET = function(edrpou,reportTypeId,periodIds,edrpou2,budget,fund,vidClassCode,progClassCode,signDateFrom,signDateTo,createDateFrom,createDateTo,signStatus,page,size) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Довідник звітних періодів
 *
 * returns String
 **/
exports.getPeriodsUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит reports
 *
 * returns String
 **/
exports.getPeriodsUsingGET_1 = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит History reports by ID
 *
 * edrpou String edrpou
 * docId Long docId
 * historyId Integer historyId
 * returns String
 **/
exports.getReporstHistoryListUsingGET = function(edrpou,docId,historyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит History reports by ID
 *
 * edrpou String edrpou
 * docId Long docId
 * returns String
 **/
exports.getReporstHistoryListUsingGET_1 = function(edrpou,docId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит History reports by ID
 *
 * disposer String disposer
 * reportId Long reportId
 * historyId Integer historyId
 * returns String
 **/
exports.getReporstHistoryListUsingGET_2 = function(disposer,reportId,historyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит History reports by ID
 *
 * disposer String disposer
 * reportId Long reportId
 * returns String
 **/
exports.getReporstHistoryListUsingGET_3 = function(disposer,reportId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get signature details of Report
 *
 * checkSignReq CheckSignRequestDTO checkSignReq
 * returns String
 **/
exports.getReportInfoUsingPOST_1 = function(checkSignReq) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит reports
 *
 * id Integer id
 * returns String
 **/
exports.getReportTypeUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит reports
 *
 * returns String
 **/
exports.getReportTypesUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит reports by ID
 *
 * disposer String disposer
 * reportId Long reportId
 * returns String
 **/
exports.getReportUsingGET = function(disposer,reportId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит транcакцій (page)
 *
 * no response value expected for this operation
 **/
exports.pingUsingGET_6 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

