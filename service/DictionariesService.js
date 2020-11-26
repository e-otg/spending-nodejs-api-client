'use strict';


/**
 * Повертає адресу за КОАТУУ
 *
 * koatuu String koatuu
 * returns ShortAddressDTO
 **/
exports.getAddressByKoatuuUsingGET = function(koatuu) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "districtCity" : "districtCity",
  "city" : "city",
  "regionId" : 0,
  "prefix" : "prefix",
  "district" : "district",
  "regionName" : "regionName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник типів контрагентів
 *
 * returns List
 **/
exports.getContractorTypesUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : 0,
  "type" : "type"
}, {
  "code" : 0,
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник країн
 *
 * returns List
 **/
exports.getCountriesUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : "code",
  "id" : 0
}, {
  "code" : "code",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник валют
 *
 * returns List
 **/
exports.getCurrencyListUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : "code",
  "id" : 0
}, {
  "code" : "code",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник ДКПП
 *
 * returns List
 **/
exports.getDkppUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nameProd" : "nameProd",
  "code" : "code",
  "numberSection" : "numberSection",
  "codeParent" : "codeParent"
}, {
  "nameProd" : "nameProd",
  "code" : "code",
  "numberSection" : "numberSection",
  "codeParent" : "codeParent"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник регіонів
 *
 * returns List
 **/
exports.getDksuDepartmentsUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "regionCode" : 0,
  "koatuu" : "koatuu",
  "regionName" : "regionName"
}, {
  "regionCode" : 0,
  "koatuu" : "koatuu",
  "regionName" : "regionName"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає КВЕД
 *
 * exactKved String exactKved
 * returns KvedDict
 **/
exports.getExactKvedUsingGET = function(exactKved) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "kvedCode" : "kvedCode",
  "kvedParent" : "kvedParent",
  "kvedName" : "kvedName",
  "availability" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник КОПФГ
 *
 * returns List
 **/
exports.getKopfgUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "kvedCode" : "kvedCode",
  "kvedParent" : "kvedParent",
  "kvedName" : "kvedName",
  "availability" : 0
}, {
  "kvedCode" : "kvedCode",
  "kvedParent" : "kvedParent",
  "kvedName" : "kvedName",
  "availability" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник КВЕД
 *
 * returns List
 **/
exports.getKvedUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "kvedCode" : "kvedCode",
  "kvedParent" : "kvedParent",
  "kvedName" : "kvedName",
  "availability" : 0
}, {
  "kvedCode" : "kvedCode",
  "kvedParent" : "kvedParent",
  "kvedName" : "kvedName",
  "availability" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник типів організацій
 *
 * returns List
 **/
exports.getOrgTypesUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : "code",
  "name" : "name",
  "id" : 0
}, {
  "code" : "code",
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник CPV
 *
 * lang String lang (optional)
 * returns List
 **/
exports.getProcurementDictionaryUsingGET = function(lang) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cpvCode" : "cpvCode",
  "nameUa" : "nameUa"
}, {
  "cpvCode" : "cpvCode",
  "nameUa" : "nameUa"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає довідник регіонів
 *
 * returns List
 **/
exports.getRegionsUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "regionCode" : 0,
  "koatuu" : "koatuu",
  "regionName" : "regionName"
}, {
  "regionCode" : 0,
  "koatuu" : "koatuu",
  "regionName" : "regionName"
} ];
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
exports.pingUsingGET_1 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

