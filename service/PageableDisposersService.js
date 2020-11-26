'use strict';


/**
 * Get disposer (page)
 *
 * request PagedRequest«DistributorRequest» request
 * returns PageResult«DistributorDTO»
 **/
exports.getDisposersUsingPOST = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "number" : 6,
  "size" : 5,
  "elements" : [ {
    "profileState" : "profileState",
    "edrpou" : "edrpou",
    "orgName" : "orgName",
    "regionName" : "regionName",
    "edrState" : "edrState",
    "kopfg" : 0
  }, {
    "profileState" : "profileState",
    "edrpou" : "edrpou",
    "orgName" : "orgName",
    "regionName" : "regionName",
    "edrState" : "edrState",
    "kopfg" : 0
  } ],
  "totalPages" : 2,
  "pageSize" : 1,
  "totalElements" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get page of documents
 *
 * docType String docType
 * xFILTERDATA String X-FILTER-DATA (optional)
 * documentId List Ідентифікатор документу (optional)
 * disposerId List ЄДРПОУ розпорядника (optional)
 * contractorId List ЄДРПОУ контрагента (optional)
 * currency List Валюта (optional)
 * names List Назва контрагента (optional)
 * documentDateFrom Date Діапазон пошуку за датою документа (дата з, включно) (optional)
 * documentDateTo Date Діапазон пошуку за датою документа (дата по, включно) (optional)
 * signDateFrom Date Діапазон пошуку за датою підпису документа (дата з, включно) (optional)
 * signDateTo Date Діапазон пошуку за датою підпису документа (дата по, включно) (optional)
 * amountFrom Double Діапазон пошуку по сумі (сума з, включно) (optional)
 * amountTo Double Діапазон пошуку по сумі (сума по, включно) (optional)
 * documentNumber String Номер документу. При пошуку за номером документу необхідно вказати ЄДРПОУ розпорядника (optional)
 * version Boolean Наявність версій (optional)
 * page Integer Номер сторінки (optional)
 * pageSize Integer Кількість елементів на сторінці (optional)
 * enabledInDateFrom Date Пошук за діапазоном дії договору (дата з, включно) (optional)
 * enabledInDateTo Date Пошук за діапазоном дії договору (дата по, включно) (optional)
 * returns PageResult«DocumentDTO»
 **/
exports.getDocUsingGET = function(docType,xFILTERDATA,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version,page,pageSize,enabledInDateFrom,enabledInDateTo) {
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
 * Get disposer (page)
 *
 * request PagedRequest«Void» request
 * returns PageResult«DistributorDTO»
 **/
exports.getMinistriesUsingPOST = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "number" : 6,
  "size" : 5,
  "elements" : [ {
    "profileState" : "profileState",
    "edrpou" : "edrpou",
    "orgName" : "orgName",
    "regionName" : "regionName",
    "edrState" : "edrState",
    "kopfg" : 0
  }, {
    "profileState" : "profileState",
    "edrpou" : "edrpou",
    "orgName" : "orgName",
    "regionName" : "regionName",
    "edrState" : "edrState",
    "kopfg" : 0
  } ],
  "totalPages" : 2,
  "pageSize" : 1,
  "totalElements" : 5
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
exports.pingUsingGET_3 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

