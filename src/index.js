import { combineReducers } from "redux-immutable";
import * as banner from "./banner";
import * as error from "./error";
import * as fetching from "./fetching";

const { STATE_KEY: BANNERS_STATE_KEY, default: bannerReducer } = banner;
const { STATE_KEY: ERROR_STATE_KEY, default: errorReducer } = error;
const { STATE_KEY: FETCHING_STATE_KEY, default: fetchReducer } = fetching;

const reducer = combineReducers({
  [BANNERS_STATE_KEY]: bannerReducer,
  [ERROR_STATE_KEY]: errorReducer,
  [FETCHING_STATE_KEY]: fetchReducer
});

export { banner, error, fetching };

export default reducer;
