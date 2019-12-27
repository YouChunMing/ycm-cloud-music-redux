import reducer from "../../src/banner/reducer";
import actions from "../../src/banner/actions";
import {
  STATE_ALLIDS_REDUCER_KEY,
  STATE_BYID_REDUCER_KEY
} from "../../src/banner/selectors";
import { List, Map, fromJS } from "immutable";

describe("reducers", () => {
  let initialState;

  beforeAll(() => {
    initialState = reducer(undefined, { type: `@@redux/INIT` });
  });

  it("should return the initial state", () => {
    const expectedInitialState = Map({
      [STATE_BYID_REDUCER_KEY]: Map(),
      [STATE_ALLIDS_REDUCER_KEY]: List()
    });
    expect(initialState.equals(expectedInitialState)).toBe(true);
  });

  it("should handle HOME_GETDATA_SUCCESS", () => {
    const data = {
      entities: {
        banners: {
          1: {},
          2: {},
          3: {}
        }
      },
      result: [1, 2, 3]
    };
    const expectedState = fromJS({
      [STATE_ALLIDS_REDUCER_KEY]: [1, 2, 3],
      [STATE_BYID_REDUCER_KEY]: {
        1: {},
        2: {},
        3: {}
      }
    });
    const resultState = reducer(initialState, actions.getHomeDataSuccess(data));
    expect(resultState === initialState).toBe(false);
    expect(resultState.equals(expectedState)).toBe(true);
  });

  // 对于GET_HOME_DATA_FAILURE 暂时不处理
  it("should handle GET_HOME_DATA_FAILURE", () => {
    const error = {};
    const resultState = reducer(
      initialState,
      actions.getHomeDataFailure(error)
    );
    expect(resultState === initialState).toBe(true);
  });
});
