import { createAction } from "redux-actions";
import types from "./actionTypes";

const {
  GET_HOME_DATA_REQUEST,
  GET_HOME_DATA_SUCCESS,
  GET_HOME_DATA_FAILURE
} = types;

// 首页横幅
const getHomeData = createAction(GET_HOME_DATA_REQUEST);
const getHomeDataSuccess = createAction(GET_HOME_DATA_SUCCESS, data => {
  return {
    data
  };
});
const getHomeDataFailure = createAction(GET_HOME_DATA_FAILURE, error => {
  return {
    error
  };
});

export default {
  getHomeData,
  getHomeDataSuccess,
  getHomeDataFailure
};
