import { createSelector } from "reselect";
import {
  STATE_BYID_REDUCER_KEY,
  STATE_ALLIDS_REDUCER_KEY
} from "../utils/constants";
import { List, Map } from "immutable";

// key in root state
const STATE_KEY = "banners";

export { STATE_KEY, STATE_BYID_REDUCER_KEY, STATE_ALLIDS_REDUCER_KEY };

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
const selectHomeData = createSelector(
  selectById,
  selectAllIds,
  (byId, allIds) => {
    return allIds.map(id => byId.get(id));
  }
);

export default {
  selectHomeData
};
