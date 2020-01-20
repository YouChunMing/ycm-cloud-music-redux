// key in root state
const STATE_KEY = "fetching";

export { STATE_KEY };

function selectFetching(state, actionTypes) {
  return actionTypes.some(actionType => {
    const requestName = actionType.replace(/\/(request|success|failure)$/, "");
    return state.get(STATE_KEY).get(requestName);
  });
}

export default {
  selectFetching
};
