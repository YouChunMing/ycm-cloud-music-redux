import { List, Map, fromJS } from "immutable";

const reducer = (state = Map(), action) => {
  const { type, payload } = action;

  const matches = /(.*)\/(request|failure)/.exec(type);

  // not a *_REQUEST  /  *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return state.withMutations(map => {
    map.set(
      requestName,
      requestState === "failure" ? fromJS(payload.error) : null
    );
  });
};

export default reducer;
