'use strict';


/**
 * Запит транcакцій
 *
 * payers_edrpous List Код платника (optional)
 * recipt_edrpous List Код отримувача (optional)
 * regions List Регіон (optional)
 * source String Джерело даних (optional)
 * startdate Date Дата з (optional)
 * enddate Date Дата по (optional)
 * payer_account String Рахунок платника (optional)
 * recipt_account String Рахунок одержувача (optional)
 * sumFrom BigDecimal Сума від (optional)
 * sumTo BigDecimal Сума до (optional)
 * purpose String Призначення платежу (optional)
 * payerName String Назва платника (optional)
 * reciptName String Назва одержувача (optional)
 * payerNameEdrpou String Назва або ЄДРПОУ платника (optional)
 * reciptNameEdrpou String Назва або ЄДРПОУ одержувача (optional)
 * page Integer Сторінка (optional)
 * pageSize Integer Записів на сторінці (optional)
 * returns TransactionsPageDTO
 **/
exports.getPageUsingGET_1 = function(payers_edrpous,recipt_edrpous,regions,source,startdate,enddate,payer_account,recipt_account,sumFrom,sumTo,purpose,payerName,reciptName,payerNameEdrpou,reciptNameEdrpou,page,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 0,
  "pageSize" : 1,
  "page" : 6,
  "transactions" : [ {
    "trans_date" : "trans_date",
    "payment_details" : "payment_details",
    "budgetCode" : "budgetCode",
    "doc_vob_name" : "doc_vob_name",
    "doc_number" : "doc_number",
    "amount_cop" : 1,
    "recipt_name" : "recipt_name",
    "payer_account" : "payer_account",
    "doc_v_date" : "doc_v_date",
    "currency" : "currency",
    "payment_data" : { },
    "id" : 0,
    "recipt_edrpou" : "recipt_edrpou",
    "doc_add_attr" : "doc_add_attr",
    "source_name" : "source_name",
    "amount" : 6.02745618307040320615897144307382404804229736328125,
    "payer_bank" : "payer_bank",
    "recipt_bank" : "recipt_bank",
    "kpk" : "kpk",
    "region_id" : 5,
    "contractNumber" : "contractNumber",
    "payer_mfo" : "payer_mfo",
    "payer_edrpou" : "payer_edrpou",
    "recipt_mfo" : "recipt_mfo",
    "payment_type" : "payment_type",
    "doc_date" : "doc_date",
    "recipt_account" : "recipt_account",
    "kekv" : 2,
    "contractId" : "contractId",
    "doc_vob" : "doc_vob",
    "source_id" : 5,
    "payer_name" : "payer_name"
  }, {
    "trans_date" : "trans_date",
    "payment_details" : "payment_details",
    "budgetCode" : "budgetCode",
    "doc_vob_name" : "doc_vob_name",
    "doc_number" : "doc_number",
    "amount_cop" : 1,
    "recipt_name" : "recipt_name",
    "payer_account" : "payer_account",
    "doc_v_date" : "doc_v_date",
    "currency" : "currency",
    "payment_data" : { },
    "id" : 0,
    "recipt_edrpou" : "recipt_edrpou",
    "doc_add_attr" : "doc_add_attr",
    "source_name" : "source_name",
    "amount" : 6.02745618307040320615897144307382404804229736328125,
    "payer_bank" : "payer_bank",
    "recipt_bank" : "recipt_bank",
    "kpk" : "kpk",
    "region_id" : 5,
    "contractNumber" : "contractNumber",
    "payer_mfo" : "payer_mfo",
    "payer_edrpou" : "payer_edrpou",
    "recipt_mfo" : "recipt_mfo",
    "payment_type" : "payment_type",
    "doc_date" : "doc_date",
    "recipt_account" : "recipt_account",
    "kekv" : 2,
    "contractId" : "contractId",
    "doc_vob" : "doc_vob",
    "source_id" : 5,
    "payer_name" : "payer_name"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає Топ 100 транcакцій по регіону
 *
 * region List region (optional)
 * returns List
 **/
exports.getTop100UsingGET = function(region) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "trans_date" : "trans_date",
  "payment_details" : "payment_details",
  "budgetCode" : "budgetCode",
  "doc_vob_name" : "doc_vob_name",
  "doc_number" : "doc_number",
  "amount_cop" : 1,
  "recipt_name" : "recipt_name",
  "payer_account" : "payer_account",
  "doc_v_date" : "doc_v_date",
  "currency" : "currency",
  "payment_data" : { },
  "id" : 0,
  "recipt_edrpou" : "recipt_edrpou",
  "doc_add_attr" : "doc_add_attr",
  "source_name" : "source_name",
  "amount" : 6.02745618307040320615897144307382404804229736328125,
  "payer_bank" : "payer_bank",
  "recipt_bank" : "recipt_bank",
  "kpk" : "kpk",
  "region_id" : 5,
  "contractNumber" : "contractNumber",
  "payer_mfo" : "payer_mfo",
  "payer_edrpou" : "payer_edrpou",
  "recipt_mfo" : "recipt_mfo",
  "payment_type" : "payment_type",
  "doc_date" : "doc_date",
  "recipt_account" : "recipt_account",
  "kekv" : 2,
  "contractId" : "contractId",
  "doc_vob" : "doc_vob",
  "source_id" : 5,
  "payer_name" : "payer_name"
}, {
  "trans_date" : "trans_date",
  "payment_details" : "payment_details",
  "budgetCode" : "budgetCode",
  "doc_vob_name" : "doc_vob_name",
  "doc_number" : "doc_number",
  "amount_cop" : 1,
  "recipt_name" : "recipt_name",
  "payer_account" : "payer_account",
  "doc_v_date" : "doc_v_date",
  "currency" : "currency",
  "payment_data" : { },
  "id" : 0,
  "recipt_edrpou" : "recipt_edrpou",
  "doc_add_attr" : "doc_add_attr",
  "source_name" : "source_name",
  "amount" : 6.02745618307040320615897144307382404804229736328125,
  "payer_bank" : "payer_bank",
  "recipt_bank" : "recipt_bank",
  "kpk" : "kpk",
  "region_id" : 5,
  "contractNumber" : "contractNumber",
  "payer_mfo" : "payer_mfo",
  "payer_edrpou" : "payer_edrpou",
  "recipt_mfo" : "recipt_mfo",
  "payment_type" : "payment_type",
  "doc_date" : "doc_date",
  "recipt_account" : "recipt_account",
  "kekv" : 2,
  "contractId" : "contractId",
  "doc_vob" : "doc_vob",
  "source_id" : 5,
  "payer_name" : "payer_name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає Топ 5 транcакцій по Україні
 *
 * returns List
 **/
exports.getTop5UsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "payerEdrpou" : "payerEdrpou",
  "reciptName" : "reciptName",
  "transDate" : "yyyy-MM-dd",
  "payerName" : "payerName",
  "reciptEdrpou" : "reciptEdrpou",
  "id" : 6
}, {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "payerEdrpou" : "payerEdrpou",
  "reciptName" : "reciptName",
  "transDate" : "yyyy-MM-dd",
  "payerName" : "payerName",
  "reciptEdrpou" : "reciptEdrpou",
  "id" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запит транcакцій
 *
 * disposer String disposer
 * transactionId Long transactionId
 * returns TransactionDTO
 **/
exports.getTransactionDetailsUsingGET = function(disposer,transactionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "trans_date" : "trans_date",
  "payment_details" : "payment_details",
  "budgetCode" : "budgetCode",
  "doc_vob_name" : "doc_vob_name",
  "doc_number" : "doc_number",
  "amount_cop" : 1,
  "recipt_name" : "recipt_name",
  "payer_account" : "payer_account",
  "doc_v_date" : "doc_v_date",
  "currency" : "currency",
  "payment_data" : { },
  "id" : 0,
  "recipt_edrpou" : "recipt_edrpou",
  "doc_add_attr" : "doc_add_attr",
  "source_name" : "source_name",
  "amount" : 6.02745618307040320615897144307382404804229736328125,
  "payer_bank" : "payer_bank",
  "recipt_bank" : "recipt_bank",
  "kpk" : "kpk",
  "region_id" : 5,
  "contractNumber" : "contractNumber",
  "payer_mfo" : "payer_mfo",
  "payer_edrpou" : "payer_edrpou",
  "recipt_mfo" : "recipt_mfo",
  "payment_type" : "payment_type",
  "doc_date" : "doc_date",
  "recipt_account" : "recipt_account",
  "kekv" : 2,
  "contractId" : "contractId",
  "doc_vob" : "doc_vob",
  "source_id" : 5,
  "payer_name" : "payer_name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає дані по транcакціях
 *
 * payers_edrpous List Код платника (optional)
 * recipt_edrpous List Код отримувача (optional)
 * regions List Регіон (optional)
 * source String Джерело даних (optional)
 * startdate Date Дата з (optional)
 * enddate Date Дата по (optional)
 * payer_account String Рахунок платника (optional)
 * recipt_account String Рахунок одержувача (optional)
 * sumFrom BigDecimal Сума від (optional)
 * sumTo BigDecimal Сума до (optional)
 * purpose String Призначення платежу (optional)
 * payerName String Назва платника (optional)
 * reciptName String Назва одержувача (optional)
 * payerNameEdrpou String Назва або ЄДРПОУ платника (optional)
 * reciptNameEdrpou String Назва або ЄДРПОУ одержувача (optional)
 * key String key (optional)
 * returns List
 **/
exports.getTransactionsByStreamUsingGET = function(payers_edrpous,recipt_edrpous,regions,source,startdate,enddate,payer_account,recipt_account,sumFrom,sumTo,purpose,payerName,reciptName,payerNameEdrpou,reciptNameEdrpou,key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "trans_date" : "trans_date",
  "payment_details" : "payment_details",
  "budgetCode" : "budgetCode",
  "doc_vob_name" : "doc_vob_name",
  "doc_number" : "doc_number",
  "amount_cop" : 1,
  "recipt_name" : "recipt_name",
  "payer_account" : "payer_account",
  "doc_v_date" : "doc_v_date",
  "currency" : "currency",
  "payment_data" : { },
  "id" : 0,
  "recipt_edrpou" : "recipt_edrpou",
  "doc_add_attr" : "doc_add_attr",
  "source_name" : "source_name",
  "amount" : 6.02745618307040320615897144307382404804229736328125,
  "payer_bank" : "payer_bank",
  "recipt_bank" : "recipt_bank",
  "kpk" : "kpk",
  "region_id" : 5,
  "contractNumber" : "contractNumber",
  "payer_mfo" : "payer_mfo",
  "payer_edrpou" : "payer_edrpou",
  "recipt_mfo" : "recipt_mfo",
  "payment_type" : "payment_type",
  "doc_date" : "doc_date",
  "recipt_account" : "recipt_account",
  "kekv" : 2,
  "contractId" : "contractId",
  "doc_vob" : "doc_vob",
  "source_id" : 5,
  "payer_name" : "payer_name"
}, {
  "trans_date" : "trans_date",
  "payment_details" : "payment_details",
  "budgetCode" : "budgetCode",
  "doc_vob_name" : "doc_vob_name",
  "doc_number" : "doc_number",
  "amount_cop" : 1,
  "recipt_name" : "recipt_name",
  "payer_account" : "payer_account",
  "doc_v_date" : "doc_v_date",
  "currency" : "currency",
  "payment_data" : { },
  "id" : 0,
  "recipt_edrpou" : "recipt_edrpou",
  "doc_add_attr" : "doc_add_attr",
  "source_name" : "source_name",
  "amount" : 6.02745618307040320615897144307382404804229736328125,
  "payer_bank" : "payer_bank",
  "recipt_bank" : "recipt_bank",
  "kpk" : "kpk",
  "region_id" : 5,
  "contractNumber" : "contractNumber",
  "payer_mfo" : "payer_mfo",
  "payer_edrpou" : "payer_edrpou",
  "recipt_mfo" : "recipt_mfo",
  "payment_type" : "payment_type",
  "doc_date" : "doc_date",
  "recipt_account" : "recipt_account",
  "kekv" : 2,
  "contractId" : "contractId",
  "doc_vob" : "doc_vob",
  "source_id" : 5,
  "payer_name" : "payer_name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Повертає дату останнього завантаження даних до БД API
 *
 * returns List
 **/
exports.lastLoadUsingGET_1 = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "sourceId" : 0,
  "lastLoad" : "yyyy-MM-dd",
  "sourceName" : "sourceName"
}, {
  "sourceId" : 0,
  "lastLoad" : "yyyy-MM-dd",
  "sourceName" : "sourceName"
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
exports.pingUsingGET_8 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Запит транcакцій (page)
 *
 * no response value expected for this operation
 **/
exports.pingUsingGET_9 = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

