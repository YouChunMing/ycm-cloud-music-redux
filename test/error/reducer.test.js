import reducer from "../../src/error/reducer";
import { Map, fromJS } from "immutable";

describe("reducer", () => {
  let initialState;

  beforeAll(() => {
    initialState = reducer(undefined, { type: `@@redux/INIT` });
  });

  it("should return the initial state", () => {
    const expectedInitialState = Map();
    expect(initialState.equals(expectedInitialState)).toBe(true);
  });

  it("should handle */request, */failure actions ", () => {
    const actionArray = [
      {
        type: "api/get/xxx/request"
      },
      {
        type: "api/get/xxx/failure",
        payload: {
          error: {
            msg: "some error"
          }
        }
      }
    ];
    actionArray.forEach(action => {
      const { type, payload } = action;
      const requestName = type.replace(/\/(request|failure)$/, "");
      const expectedState =
        type === "api/get/xxx/request"
          ? fromJS({ [requestName]: null })
          : fromJS({ [requestName]: payload.error });
      const resultState = reducer(initialState, action);
      expect(resultState === initialState).toBe(false);
      expect(resultState.equals(expectedState)).toBe(true);
    });
  });
});
