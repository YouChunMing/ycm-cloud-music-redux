import { combineReducers } from "redux-immutable";
import { handleActions } from "redux-actions";
import { List, Map, fromJS } from "immutable";
import types from "./actionTypes";
import { STATE_ALLIDS_REDUCER_KEY, STATE_BYID_REDUCER_KEY } from "./selectors";

const { GET_HOME_DATA_SUCCESS } = types;

const byIdReducer = handleActions(
  {
    [GET_HOME_DATA_SUCCESS]: (state, action) => {
      const { payload } = action;
      const {
        entities: { banners }
      } = payload.data;
      const data = fromJS(banners);
      return state.withMutations(map => {
        map.clear().merge(data);
      });
    }
  },
  Map()
);

const allIdsReducer = handleActions(
  {
    [GET_HOME_DATA_SUCCESS]: (state, action) => {
      const { payload } = action;
      const { result } = payload.data;
      return state.withMutations(list => {
        list.clear().concat(result);
      });
    }
  },
  List()
);

const reducer = combineReducers({
  [STATE_BYID_REDUCER_KEY]: byIdReducer,
  [STATE_ALLIDS_REDUCER_KEY]: allIdsReducer
});

export default reducer;
