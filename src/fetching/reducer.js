import { List, Map } from "immutable";

const reducer = (state = Map(), action) => {
  const { type } = action;

  const matches = /(.*)\/(request|success|failure)/.exec(type);

  // not a */request, */success, */failure actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return state.withMutations(map => {
    map.set(requestName, requestState === "request");
  });
};

export default reducer;
