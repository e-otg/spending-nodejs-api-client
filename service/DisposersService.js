'use strict';


/**
 * Get act by id
 *
 * actId Long actId
 * returns ActDTO
 **/
exports.getActUsingGET = function(actId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "documentDate" : "documentDate",
  "amount" : 5.962133916683182,
  "procurementItems" : [ {
    "cpvCode" : "cpvCode",
    "nameUa" : "nameUa"
  }, {
    "cpvCode" : "cpvCode",
    "nameUa" : "nameUa"
  } ],
  "signature" : {
    "caAddress" : "caAddress"
  },
  "documentNumber" : "documentNumber",
  "signDate" : "signDate",
  "specifications" : [ {
    "cpvCode" : "cpvCode",
    "specCode" : "specCode",
    "itemCost" : 4.145608029883936,
    "itemDimension" : "itemDimension",
    "specificationName" : "specificationName",
    "itemCount" : 7.386281948385884
  }, {
    "cpvCode" : "cpvCode",
    "specCode" : "specCode",
    "itemCost" : 4.145608029883936,
    "itemDimension" : "itemDimension",
    "specificationName" : "specificationName",
    "itemCount" : 7.386281948385884
  } ],
  "parentId" : 3,
  "pdvInclude" : false,
  "contractors" : [ {
    "firstName" : "firstName",
    "identifier" : "identifier",
    "lastName" : "lastName",
    "address" : {
      "districtCity" : "districtCity",
      "city" : "city",
      "housing" : "housing",
      "regionId" : 7,
      "street" : "street",
      "district" : "district",
      "regionName" : "regionName",
      "countryName" : "countryName",
      "office" : "office",
      "house" : "house",
      "countryId" : 2
    },
    "contractorType" : 9,
    "name" : "name",
    "middleName" : "middleName"
  }, {
    "firstName" : "firstName",
    "identifier" : "identifier",
    "lastName" : "lastName",
    "address" : {
      "districtCity" : "districtCity",
      "city" : "city",
      "housing" : "housing",
      "regionId" : 7,
      "street" : "street",
      "district" : "district",
      "regionName" : "regionName",
      "countryName" : "countryName",
      "office" : "office",
      "house" : "house",
      "countryId" : 2
    },
    "contractorType" : 9,
    "name" : "name",
    "middleName" : "middleName"
  } ],
  "currencyAmountUAH" : 5.637376656633329,
  "edrpou" : "edrpou",
  "isCpvVat" : false,
  "currency" : "currency",
  "id" : 1,
  "pdvAmount" : 2.027123023002322
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get acts of edrpou
 *
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
 * returns DocumentResultDTO«ActDTO»
 **/
exports.getActsUsingGET = function(documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "moreThenCount" : false,
  "size" : 0,
  "documents" : [ {
    "documentDate" : "documentDate",
    "amount" : 5.962133916683182,
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "parentId" : 3,
    "pdvInclude" : false,
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "edrpou" : "edrpou",
    "isCpvVat" : false,
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 2.027123023002322
  }, {
    "documentDate" : "documentDate",
    "amount" : 5.962133916683182,
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "parentId" : 3,
    "pdvInclude" : false,
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "edrpou" : "edrpou",
    "isCpvVat" : false,
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 2.027123023002322
  } ],
  "count" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get addendums of edrpou
 *
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
 * returns DocumentResultDTO«AddendumDTO»
 **/
exports.getAddendsUsingGET = function(documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "moreThenCount" : false,
  "size" : 0,
  "documents" : [ {
    "documentDate" : "documentDate",
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "amountIncrease" : 7.061401241503109,
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "subject" : "subject",
    "correctionVATValue" : 2.027123023002322,
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "reasonTypes" : [ {
      "reasonId" : 4
    }, {
      "reasonId" : 4
    } ],
    "edrpou" : "edrpou",
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 9.301444243932576,
    "amount" : 5.962133916683182,
    "reasonOtherComment" : "reasonOtherComment",
    "toDate" : "toDate",
    "isCorrectionWithPDF" : false,
    "parentId" : 2,
    "pdvInclude" : false,
    "fromDate" : "fromDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "noTerm" : false,
    "correctionType" : 3,
    "isCpvVat" : false
  }, {
    "documentDate" : "documentDate",
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "amountIncrease" : 7.061401241503109,
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "subject" : "subject",
    "correctionVATValue" : 2.027123023002322,
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "reasonTypes" : [ {
      "reasonId" : 4
    }, {
      "reasonId" : 4
    } ],
    "edrpou" : "edrpou",
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 9.301444243932576,
    "amount" : 5.962133916683182,
    "reasonOtherComment" : "reasonOtherComment",
    "toDate" : "toDate",
    "isCorrectionWithPDF" : false,
    "parentId" : 2,
    "pdvInclude" : false,
    "fromDate" : "fromDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "noTerm" : false,
    "correctionType" : 3,
    "isCpvVat" : false
  } ],
  "count" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get addendum by id
 *
 * addendumId Long addendumId
 * returns AddendumDTO
 **/
exports.getAddendumUsingGET = function(addendumId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "documentDate" : "documentDate",
  "procurementItems" : [ {
    "cpvCode" : "cpvCode",
    "nameUa" : "nameUa"
  }, {
    "cpvCode" : "cpvCode",
    "nameUa" : "nameUa"
  } ],
  "amountIncrease" : 7.061401241503109,
  "signature" : {
    "caAddress" : "caAddress"
  },
  "documentNumber" : "documentNumber",
  "subject" : "subject",
  "correctionVATValue" : 2.027123023002322,
  "signDate" : "signDate",
  "specifications" : [ {
    "cpvCode" : "cpvCode",
    "specCode" : "specCode",
    "itemCost" : 4.145608029883936,
    "itemDimension" : "itemDimension",
    "specificationName" : "specificationName",
    "itemCount" : 7.386281948385884
  }, {
    "cpvCode" : "cpvCode",
    "specCode" : "specCode",
    "itemCost" : 4.145608029883936,
    "itemDimension" : "itemDimension",
    "specificationName" : "specificationName",
    "itemCount" : 7.386281948385884
  } ],
  "currencyAmountUAH" : 5.637376656633329,
  "reasonTypes" : [ {
    "reasonId" : 4
  }, {
    "reasonId" : 4
  } ],
  "edrpou" : "edrpou",
  "currency" : "currency",
  "id" : 1,
  "pdvAmount" : 9.301444243932576,
  "amount" : 5.962133916683182,
  "reasonOtherComment" : "reasonOtherComment",
  "toDate" : "toDate",
  "isCorrectionWithPDF" : false,
  "parentId" : 2,
  "pdvInclude" : false,
  "fromDate" : "fromDate",
  "contractors" : [ {
    "firstName" : "firstName",
    "identifier" : "identifier",
    "lastName" : "lastName",
    "address" : {
      "districtCity" : "districtCity",
      "city" : "city",
      "housing" : "housing",
      "regionId" : 7,
      "street" : "street",
      "district" : "district",
      "regionName" : "regionName",
      "countryName" : "countryName",
      "office" : "office",
      "house" : "house",
      "countryId" : 2
    },
    "contractorType" : 9,
    "name" : "name",
    "middleName" : "middleName"
  }, {
    "firstName" : "firstName",
    "identifier" : "identifier",
    "lastName" : "lastName",
    "address" : {
      "districtCity" : "districtCity",
      "city" : "city",
      "housing" : "housing",
      "regionId" : 7,
      "street" : "street",
      "district" : "district",
      "regionName" : "regionName",
      "countryName" : "countryName",
      "office" : "office",
      "house" : "house",
      "countryId" : 2
    },
    "contractorType" : 9,
    "name" : "name",
    "middleName" : "middleName"
  } ],
  "noTerm" : false,
  "correctionType" : 3,
  "isCpvVat" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get agreements of edrpou
 *
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
 * enabledInDateFrom Date Пошук за діапазоном дії договору (дата з, включно) (optional)
 * enabledInDateTo Date Пошук за діапазоном дії договору (дата по, включно) (optional)
 * returns DocumentResultDTO«ContractDTO»
 **/
exports.getAgreementsUsingGET = function(documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version,enabledInDateFrom,enabledInDateTo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "moreThenCount" : false,
  "size" : 0,
  "documents" : [ {
    "documentDate" : "documentDate",
    "tender" : false,
    "reason" : "reason",
    "amount" : 5.962133916683182,
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "subject" : "subject",
    "toDate" : "toDate",
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "pdvInclude" : false,
    "fromDate" : "fromDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "edrpou" : "edrpou",
    "noTerm" : false,
    "isCpvVat" : false,
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 2.3021358869347655
  }, {
    "documentDate" : "documentDate",
    "tender" : false,
    "reason" : "reason",
    "amount" : 5.962133916683182,
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "subject" : "subject",
    "toDate" : "toDate",
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "pdvInclude" : false,
    "fromDate" : "fromDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "edrpou" : "edrpou",
    "noTerm" : false,
    "isCpvVat" : false,
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 2.3021358869347655
  } ],
  "count" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get agreement with related documents by agreement id
 *
 * contractId Long contractId
 * returns ContractWithSubdocumentsDTO
 **/
exports.getContractUsingGET = function(contractId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "documentDate" : "documentDate",
  "tender" : false,
  "reason" : "reason",
  "amount" : 6.027456183070403,
  "procurementItems" : [ {
    "cpvCode" : "cpvCode",
    "nameUa" : "nameUa"
  }, {
    "cpvCode" : "cpvCode",
    "nameUa" : "nameUa"
  } ],
  "penalties" : [ {
    "documentDate" : "documentDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "amount" : 2.3021358869347655,
    "currencyAmountUAH" : 7.061401241503109,
    "edrpou" : "edrpou",
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "currency" : "currency",
    "id" : 5,
    "signDate" : "signDate",
    "parentId" : 9
  }, {
    "documentDate" : "documentDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "amount" : 2.3021358869347655,
    "currencyAmountUAH" : 7.061401241503109,
    "edrpou" : "edrpou",
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "currency" : "currency",
    "id" : 5,
    "signDate" : "signDate",
    "parentId" : 9
  } ],
  "signature" : {
    "caAddress" : "caAddress"
  },
  "documentNumber" : "documentNumber",
  "subject" : "subject",
  "toDate" : "toDate",
  "addendums" : [ {
    "documentDate" : "documentDate",
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "amountIncrease" : 7.061401241503109,
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "subject" : "subject",
    "correctionVATValue" : 2.027123023002322,
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "reasonTypes" : [ {
      "reasonId" : 4
    }, {
      "reasonId" : 4
    } ],
    "edrpou" : "edrpou",
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 9.301444243932576,
    "amount" : 5.962133916683182,
    "reasonOtherComment" : "reasonOtherComment",
    "toDate" : "toDate",
    "isCorrectionWithPDF" : false,
    "parentId" : 2,
    "pdvInclude" : false,
    "fromDate" : "fromDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "noTerm" : false,
    "correctionType" : 3,
    "isCpvVat" : false
  }, {
    "documentDate" : "documentDate",
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "amountIncrease" : 7.061401241503109,
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "subject" : "subject",
    "correctionVATValue" : 2.027123023002322,
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "reasonTypes" : [ {
      "reasonId" : 4
    }, {
      "reasonId" : 4
    } ],
    "edrpou" : "edrpou",
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 9.301444243932576,
    "amount" : 5.962133916683182,
    "reasonOtherComment" : "reasonOtherComment",
    "toDate" : "toDate",
    "isCorrectionWithPDF" : false,
    "parentId" : 2,
    "pdvInclude" : false,
    "fromDate" : "fromDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "noTerm" : false,
    "correctionType" : 3,
    "isCpvVat" : false
  } ],
  "signDate" : "signDate",
  "acts" : [ {
    "documentDate" : "documentDate",
    "amount" : 5.962133916683182,
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "parentId" : 3,
    "pdvInclude" : false,
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "edrpou" : "edrpou",
    "isCpvVat" : false,
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 2.027123023002322
  }, {
    "documentDate" : "documentDate",
    "amount" : 5.962133916683182,
    "procurementItems" : [ {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    }, {
      "cpvCode" : "cpvCode",
      "nameUa" : "nameUa"
    } ],
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "signDate" : "signDate",
    "specifications" : [ {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    }, {
      "cpvCode" : "cpvCode",
      "specCode" : "specCode",
      "itemCost" : 4.145608029883936,
      "itemDimension" : "itemDimension",
      "specificationName" : "specificationName",
      "itemCount" : 7.386281948385884
    } ],
    "parentId" : 3,
    "pdvInclude" : false,
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "currencyAmountUAH" : 5.637376656633329,
    "edrpou" : "edrpou",
    "isCpvVat" : false,
    "currency" : "currency",
    "id" : 1,
    "pdvAmount" : 2.027123023002322
  } ],
  "specifications" : [ {
    "cpvCode" : "cpvCode",
    "specCode" : "specCode",
    "itemCost" : 4.145608029883936,
    "itemDimension" : "itemDimension",
    "specificationName" : "specificationName",
    "itemCount" : 7.386281948385884
  }, {
    "cpvCode" : "cpvCode",
    "specCode" : "specCode",
    "itemCost" : 4.145608029883936,
    "itemDimension" : "itemDimension",
    "specificationName" : "specificationName",
    "itemCount" : 7.386281948385884
  } ],
  "pdvInclude" : false,
  "fromDate" : "fromDate",
  "contractors" : [ {
    "firstName" : "firstName",
    "identifier" : "identifier",
    "lastName" : "lastName",
    "address" : {
      "districtCity" : "districtCity",
      "city" : "city",
      "housing" : "housing",
      "regionId" : 7,
      "street" : "street",
      "district" : "district",
      "regionName" : "regionName",
      "countryName" : "countryName",
      "office" : "office",
      "house" : "house",
      "countryId" : 2
    },
    "contractorType" : 9,
    "name" : "name",
    "middleName" : "middleName"
  }, {
    "firstName" : "firstName",
    "identifier" : "identifier",
    "lastName" : "lastName",
    "address" : {
      "districtCity" : "districtCity",
      "city" : "city",
      "housing" : "housing",
      "regionId" : 7,
      "street" : "street",
      "district" : "district",
      "regionName" : "regionName",
      "countryName" : "countryName",
      "office" : "office",
      "house" : "house",
      "countryId" : 2
    },
    "contractorType" : 9,
    "name" : "name",
    "middleName" : "middleName"
  } ],
  "currencyAmountUAH" : 1.4658129805029452,
  "edrpou" : "edrpou",
  "noTerm" : false,
  "isCpvVat" : false,
  "currency" : "currency",
  "id" : 0,
  "pdvAmount" : 5.962133916683182
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Export acts to csv
 *
 * edrpou String edrpou
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
 * no response value expected for this operation
 **/
exports.getCsvActsUsingGET = function(edrpou,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Export addendums to csv
 *
 * edrpou String edrpou
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
 * no response value expected for this operation
 **/
exports.getCsvAddendumsUsingGET = function(edrpou,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Export agreements of edrpou to csv
 *
 * edrpou String edrpou
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
 * enabledInDateFrom Date Пошук за діапазоном дії договору (дата з, включно) (optional)
 * enabledInDateTo Date Пошук за діапазоном дії договору (дата по, включно) (optional)
 * no response value expected for this operation
 **/
exports.getCsvAgreementsUsingGET = function(edrpou,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version,enabledInDateFrom,enabledInDateTo) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Export peny to csv
 *
 * edrpou String edrpou
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
 * enabledInDateFrom Date Пошук за діапазоном дії договору (дата з, включно) (optional)
 * enabledInDateTo Date Пошук за діапазоном дії договору (дата по, включно) (optional)
 * no response value expected for this operation
 **/
exports.getCsvPenyUsingGET = function(edrpou,documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version,enabledInDateFrom,enabledInDateTo) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Отримати файл з підписаними документами вказаного типу на вказану дату
 *
 * date String date
 * type String type
 * returns ContractDTO
 **/
exports.getDataSnapshotUsingGET = function(date,type) {
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
 * Get disposer
 *
 * edrpou String edrpou
 * returns OrganizationDTO
 **/
exports.getDataUsingGET = function(edrpou) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "orgForm" : "orgForm",
  "address" : {
    "districtCity" : "districtCity",
    "city" : "city",
    "housing" : "housing",
    "regionId" : 7,
    "street" : "street",
    "district" : "district",
    "regionName" : "regionName",
    "countryName" : "countryName",
    "office" : "office",
    "house" : "house",
    "countryId" : 2
  },
  "orgName" : "orgName",
  "director" : {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "middleName" : "middleName"
  },
  "orgType" : [ "orgType", "orgType" ],
  "edrpou" : "edrpou",
  "generalDisposer" : {
    "address" : {
      "districtCity" : "districtCity",
      "city" : "city",
      "housing" : "housing",
      "regionId" : 7,
      "street" : "street",
      "district" : "district",
      "regionName" : "regionName",
      "countryName" : "countryName",
      "office" : "office",
      "house" : "house",
      "countryId" : 2
    },
    "edrpou" : "edrpou",
    "director" : {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "middleName" : "middleName"
    },
    "koatuu" : "koatuu",
    "fullName" : "fullName",
    "shortName" : "shortName"
  },
  "phone" : "phone",
  "koatuu" : "koatuu",
  "kved" : "kved",
  "registrationDate" : "yyyy-MM-dd",
  "kopfg" : "kopfg",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Завантажити csv розпорядників
 *
 * regionIds List  (optional)
 * edrpou String  (optional)
 * organizationName String  (optional)
 * kopfg Integer  (optional)
 * orgEdrState Integer  (optional)
 * hasCabinet Boolean  (optional)
 * returns InputStreamResource
 **/
exports.getDisposersCsvUsingGET = function(regionIds,edrpou,organizationName,kopfg,orgEdrState,hasCabinet) {
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
 * Повертає перелік згенерованих файлів
 *
 * returns List
 **/
exports.getFilesListUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "documentDate" : "yyyy-MM-dd",
  "documentType" : "UNDEFINED",
  "finishDate" : "yyyy-MM-dd HH-mm-ss"
}, {
  "documentDate" : "yyyy-MM-dd",
  "documentType" : "UNDEFINED",
  "finishDate" : "yyyy-MM-dd HH-mm-ss"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get peny by id
 *
 * penyId Long penyId
 * returns PenyDTO
 **/
exports.getPenaltyUsingGET = function(penyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "documentDate" : "documentDate",
  "contractors" : [ {
    "firstName" : "firstName",
    "identifier" : "identifier",
    "lastName" : "lastName",
    "address" : {
      "districtCity" : "districtCity",
      "city" : "city",
      "housing" : "housing",
      "regionId" : 7,
      "street" : "street",
      "district" : "district",
      "regionName" : "regionName",
      "countryName" : "countryName",
      "office" : "office",
      "house" : "house",
      "countryId" : 2
    },
    "contractorType" : 9,
    "name" : "name",
    "middleName" : "middleName"
  }, {
    "firstName" : "firstName",
    "identifier" : "identifier",
    "lastName" : "lastName",
    "address" : {
      "districtCity" : "districtCity",
      "city" : "city",
      "housing" : "housing",
      "regionId" : 7,
      "street" : "street",
      "district" : "district",
      "regionName" : "regionName",
      "countryName" : "countryName",
      "office" : "office",
      "house" : "house",
      "countryId" : 2
    },
    "contractorType" : 9,
    "name" : "name",
    "middleName" : "middleName"
  } ],
  "amount" : 2.3021358869347655,
  "currencyAmountUAH" : 7.061401241503109,
  "edrpou" : "edrpou",
  "signature" : {
    "caAddress" : "caAddress"
  },
  "documentNumber" : "documentNumber",
  "currency" : "currency",
  "id" : 5,
  "signDate" : "signDate",
  "parentId" : 9
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get peny of edrpou
 *
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
 * returns DocumentResultDTO«PenyDTO»
 **/
exports.getPenyUsingGET = function(documentId,disposerId,contractorId,currency,names,documentDateFrom,documentDateTo,signDateFrom,signDateTo,amountFrom,amountTo,documentNumber,version) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "moreThenCount" : false,
  "size" : 0,
  "documents" : [ {
    "documentDate" : "documentDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "amount" : 2.3021358869347655,
    "currencyAmountUAH" : 7.061401241503109,
    "edrpou" : "edrpou",
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "currency" : "currency",
    "id" : 5,
    "signDate" : "signDate",
    "parentId" : 9
  }, {
    "documentDate" : "documentDate",
    "contractors" : [ {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    }, {
      "firstName" : "firstName",
      "identifier" : "identifier",
      "lastName" : "lastName",
      "address" : {
        "districtCity" : "districtCity",
        "city" : "city",
        "housing" : "housing",
        "regionId" : 7,
        "street" : "street",
        "district" : "district",
        "regionName" : "regionName",
        "countryName" : "countryName",
        "office" : "office",
        "house" : "house",
        "countryId" : 2
      },
      "contractorType" : 9,
      "name" : "name",
      "middleName" : "middleName"
    } ],
    "amount" : 2.3021358869347655,
    "currencyAmountUAH" : 7.061401241503109,
    "edrpou" : "edrpou",
    "signature" : {
      "caAddress" : "caAddress"
    },
    "documentNumber" : "documentNumber",
    "currency" : "currency",
    "id" : 5,
    "signDate" : "signDate",
    "parentId" : 9
  } ],
  "count" : 6
};
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
 * Get signature details of Contract/Act/ect
 *
 * checkSignReq CheckSignRequestDTO checkSignReq
 * returns String
 **/
exports.getReportInfoUsingPOST = function(checkSignReq) {
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
exports.pingUsingGET_2 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

