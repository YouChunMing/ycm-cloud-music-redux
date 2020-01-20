// key in root state
const STATE_KEY = "error";

export { STATE_KEY };

function selectError(state, actionTypes) {
  const errorArray = actionTypes.map(actionType => {
    const requestName = actionType.replace(/\/(request|failure)$/, "");
    return state.get(STATE_KEY).get(requestName);
  });

  let result = null;
  errorArray.forEach(error => {
    if (result === null && error) {
      result = error;
    }
  });
  return result;
}

export default {
  selectError
};
