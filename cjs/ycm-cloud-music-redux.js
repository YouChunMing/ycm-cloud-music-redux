'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reduxImmutable = require('redux-immutable');
require('core-js/modules/es.array.concat');
var reduxActions = require('redux-actions');
require('core-js/modules/es.array.map');
var reselect = require('reselect');
var immutable = require('immutable');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var TYPE_REQUEST = "request";
var TYPE_SUCCESS = "success";
var TYPE_FAILURE = "failure";
var STATE_BYID_REDUCER_KEY = "byId";
var STATE_ALLIDS_REDUCER_KEY = "allIds";

var TYPE_PREFIX = "banners"; // 首页横幅

var TYPE_GET_HOME = "get/home";
var GET_HOME_DATA_REQUEST = "".concat(TYPE_PREFIX, "/").concat(TYPE_GET_HOME, "/").concat(TYPE_REQUEST);
var GET_HOME_DATA_SUCCESS = "".concat(TYPE_PREFIX, "/").concat(TYPE_GET_HOME, "/").concat(TYPE_SUCCESS);
var GET_HOME_DATA_FAILURE = "".concat(TYPE_PREFIX, "/").concat(TYPE_GET_HOME, "/").concat(TYPE_FAILURE);
var types = {
  GET_HOME_DATA_REQUEST: GET_HOME_DATA_REQUEST,
  GET_HOME_DATA_SUCCESS: GET_HOME_DATA_SUCCESS,
  GET_HOME_DATA_FAILURE: GET_HOME_DATA_FAILURE
};

var GET_HOME_DATA_REQUEST$1 = types.GET_HOME_DATA_REQUEST,
    GET_HOME_DATA_SUCCESS$1 = types.GET_HOME_DATA_SUCCESS,
    GET_HOME_DATA_FAILURE$1 = types.GET_HOME_DATA_FAILURE; // 首页横幅

var getHomeData = reduxActions.createAction(GET_HOME_DATA_REQUEST$1);
var getHomeDataSuccess = reduxActions.createAction(GET_HOME_DATA_SUCCESS$1, function (data) {
  return {
    data: data
  };
});
var getHomeDataFailure = reduxActions.createAction(GET_HOME_DATA_FAILURE$1, function (error) {
  return {
    error: error
  };
});
var actions = {
  getHomeData: getHomeData,
  getHomeDataSuccess: getHomeDataSuccess,
  getHomeDataFailure: getHomeDataFailure
};

var STATE_KEY = "banners";
/**
 * @param {Map<string, Map>} state - root state.
 * @return {Map<string, Map>}
 */

function selectById(state) {
  return state.get(STATE_KEY).get(STATE_BYID_REDUCER_KEY);
}
/**
 * @param {Map<string, Map>} state - root state.
 * @return {List<string>}
 */


function selectAllIds(state) {
  return state.get(STATE_KEY).get(STATE_ALLIDS_REDUCER_KEY);
}
/**
 * @callback Predicate
 * @param {Map<string, any>} state
 * @returns {List<Map<string, any>>}
 */

/** @type {Predicate} */


var selectHomeData = reselect.createSelector(selectById, selectAllIds, function (byId, allIds) {
  return allIds.map(function (id) {
    return byId.get(id);
  });
});
var selectors = {
  selectHomeData: selectHomeData
};

var _combineReducers;
var GET_HOME_DATA_SUCCESS$2 = types.GET_HOME_DATA_SUCCESS;
var byIdReducer = reduxActions.handleActions(_defineProperty({}, GET_HOME_DATA_SUCCESS$2, function (state, action) {
  var payload = action.payload;
  var banners = payload.data.entities.banners;
  var data = immutable.fromJS(banners);
  return state.withMutations(function (map) {
    map.clear().merge(data);
  });
}), immutable.Map());
var allIdsReducer = reduxActions.handleActions(_defineProperty({}, GET_HOME_DATA_SUCCESS$2, function (state, action) {
  var payload = action.payload;
  var result = payload.data.result;
  return state.withMutations(function (list) {
    list.clear().concat(result);
  });
}), immutable.List());
var reducer = reduxImmutable.combineReducers((_combineReducers = {}, _defineProperty(_combineReducers, STATE_BYID_REDUCER_KEY, byIdReducer), _defineProperty(_combineReducers, STATE_ALLIDS_REDUCER_KEY, allIdsReducer), _combineReducers));



var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': reducer,
  types: types,
  actions: actions,
  selectors: selectors,
  STATE_KEY: STATE_KEY
});

var BANNERS_STATE_KEY = STATE_KEY,
    bannerReducer = reducer;
var reducer$1 = reduxImmutable.combineReducers(_defineProperty({}, BANNERS_STATE_KEY, bannerReducer));

exports.banner = index;
exports.default = reducer$1;
