import { combineReducers } from "redux-immutable";
import * as banner from "./banner";

const { STATE_KEY: BANNERS_STATE_KEY, default: bannerReducer } = banner;

const reducer = combineReducers({
  [BANNERS_STATE_KEY]: bannerReducer
});

export { banner };

export default reducer;
