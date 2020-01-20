import reducer from "../../src/fetching/reducer";
import { fromJS, Map } from "immutable";

describe("reducers", () => {
  let initialState;

  beforeAll(() => {
    initialState = reducer(undefined, { type: `@@redux/INIT` });
  });

  it("should return the initial state", () => {
    const expectedInitialState = Map();
    expect(initialState.equals(expectedInitialState)).toBe(true);
  });

  it("should handle */request, */success, */failure actions ", () => {
    const types = [
      "api/get/xxx/request",
      "api/get/xxx/success",
      "api/get/xxx/failure"
    ];
    types.forEach(type => {
      const requestName = type.replace(/\/(request|success|failure)$/, "");
      const expectedState = fromJS({
        [requestName]: type === "api/get/xxx/request"
      });
      const resultState = reducer(initialState, { type });
      expect(resultState === initialState).toBe(false);
      expect(resultState.equals(expectedState)).toBe(true);
    });
  });
});
