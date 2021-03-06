import { TYPE_REQUEST, TYPE_SUCCESS, TYPE_FAILURE } from "../utils/constants";

// action type prefix
const TYPE_PREFIX = "banners";

// 首页横幅
const TYPE_GET_HOME = "get/home";
const GET_HOME_DATA_REQUEST = `${TYPE_PREFIX}/${TYPE_GET_HOME}/${TYPE_REQUEST}`;
const GET_HOME_DATA_SUCCESS = `${TYPE_PREFIX}/${TYPE_GET_HOME}/${TYPE_SUCCESS}`;
const GET_HOME_DATA_FAILURE = `${TYPE_PREFIX}/${TYPE_GET_HOME}/${TYPE_FAILURE}`;

export default {
  GET_HOME_DATA_REQUEST,
  GET_HOME_DATA_SUCCESS,
  GET_HOME_DATA_FAILURE
};
