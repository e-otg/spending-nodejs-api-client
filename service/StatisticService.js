'use strict';


/**
 * Повертає агреговану статистику трансакцій на порталі (загальна кількість/сума)
 *
 * returns List
 **/
exports.geAllStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;UTF-8'] = [ {
  "totalSum" : 5.637376656633329,
  "regions" : [ {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  }, {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  } ],
  "reqDate" : "yyyy-MM-dd HH:mm",
  "from" : "yyyy-MM-dd",
  "totalCount" : 5
}, {
  "totalSum" : 5.637376656633329,
  "regions" : [ {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  }, {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  } ],
  "reqDate" : "yyyy-MM-dd HH:mm",
  "from" : "yyyy-MM-dd",
  "totalCount" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає статистику кабінетів)
 *
 * kopfg Integer КОПФГ (optional)
 * regionId Integer Регіон (optional)
 * page Integer Номер сторінки (optional)
 * pageSize Integer Кількість елементів на сторінці (optional)
 * returns List
 **/
exports.getCabinetPageStatUsingGET = function(kopfg,regionId,page,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;UTF-8'] = [ {
  "signedActs" : 6,
  "edrpou" : "edrpou",
  "orgName" : "orgName",
  "signedReports" : 2,
  "docAmount" : 0,
  "signedFines" : 5,
  "signedContracts" : 5,
  "signedAddendums" : 1
}, {
  "signedActs" : 6,
  "edrpou" : "edrpou",
  "orgName" : "orgName",
  "signedReports" : 2,
  "docAmount" : 0,
  "signedFines" : 5,
  "signedContracts" : 5,
  "signedAddendums" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає статистику документів організацій на порталі
 *
 * returns List
 **/
exports.getCsvStatsUsingGET = function() {
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
 * Повертає агреговану статистику трансакцій на порталі (загальна кількість/сума) за поточний місяць
 *
 * returns List
 **/
exports.getCurrMonthStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;UTF-8'] = [ {
  "totalSum" : 5.637376656633329,
  "regions" : [ {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  }, {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  } ],
  "reqDate" : "yyyy-MM-dd HH:mm",
  "from" : "yyyy-MM-dd",
  "totalCount" : 5
}, {
  "totalSum" : 5.637376656633329,
  "regions" : [ {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  }, {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  } ],
  "reqDate" : "yyyy-MM-dd HH:mm",
  "from" : "yyyy-MM-dd",
  "totalCount" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає агреговану статистику трансакцій на порталі (загальна кількість/сума) за поточный рік
 *
 * returns List
 **/
exports.getCurrYearStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;UTF-8'] = [ {
  "totalSum" : 5.637376656633329,
  "regions" : [ {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  }, {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  } ],
  "reqDate" : "yyyy-MM-dd HH:mm",
  "from" : "yyyy-MM-dd",
  "totalCount" : 5
}, {
  "totalSum" : 5.637376656633329,
  "regions" : [ {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  }, {
    "count" : 0,
    "name" : "name",
    "sum" : 1.4658129805029452,
    "id" : 6
  } ],
  "reqDate" : "yyyy-MM-dd HH:mm",
  "from" : "yyyy-MM-dd",
  "totalCount" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає агреговану статистику документів на порталі (загальна кількість/кількість оприлюднених)
 *
 * returns List
 **/
exports.getDocStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;UTF-8'] = [ {
  "cntSignRep" : 2,
  "cntAddDoc" : 1,
  "cntRep" : 0,
  "cntSignAddCont" : 9,
  "cntAct" : 5,
  "cntSignCont" : 7,
  "cntSignAct" : 3,
  "cntDoc" : 6,
  "cntPeny" : 5,
  "cntSignPeny" : 2
}, {
  "cntSignRep" : 2,
  "cntAddDoc" : 1,
  "cntRep" : 0,
  "cntSignAddCont" : 9,
  "cntAct" : 5,
  "cntSignCont" : 7,
  "cntSignAct" : 3,
  "cntDoc" : 6,
  "cntPeny" : 5,
  "cntSignPeny" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає динаміку реєстрації кабінетів
 *
 * returns List
 **/
exports.getDynamicsByPeriodsUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;UTF-8'] = [ {
  "date" : "yyyy-MM-dd",
  "amount" : 0
}, {
  "date" : "yyyy-MM-dd",
  "amount" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає агреговану статистику за КОАТУУ та КОПФГ
 *
 * returns List
 **/
exports.getKopfgStatUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;UTF-8'] = [ {
  "stat" : [ {
    "count" : 6,
    "parts" : [ { }, { } ],
    "kopfg" : {
      "id" : "id",
      "title" : "title"
    }
  }, {
    "count" : 6,
    "parts" : [ { }, { } ],
    "kopfg" : {
      "id" : "id",
      "title" : "title"
    }
  } ],
  "koatuu" : {
    "code" : "code",
    "regionId" : 0,
    "name" : "name"
  }
}, {
  "stat" : [ {
    "count" : 6,
    "parts" : [ { }, { } ],
    "kopfg" : {
      "id" : "id",
      "title" : "title"
    }
  }, {
    "count" : 6,
    "parts" : [ { }, { } ],
    "kopfg" : {
      "id" : "id",
      "title" : "title"
    }
  } ],
  "koatuu" : {
    "code" : "code",
    "regionId" : 0,
    "name" : "name"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Статистика
 *
 * edrpou String edrpou
 * returns DisposerStatDTO
 **/
exports.getStatUsingGET = function(edrpou) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cntSignContracts" : 1,
  "cntSignActs" : 0,
  "cntSignAddendums" : 6,
  "cntSignFines" : 5,
  "cntSignReports" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Перевірка доступності API
 *
 * no response value expected for this operation
 **/
exports.pingUsingGET_10 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Перевірка доступності API
 *
 * no response value expected for this operation
 **/
exports.pingUsingGET_7 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

