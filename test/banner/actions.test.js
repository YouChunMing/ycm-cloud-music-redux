import actions from "../../src/banner/actions";
import types from "../../src/banner/actionTypes";

describe("actions", () => {
  it("should create an action to GET_HOME_DATA_REQUEST ", () => {
    const expectedAction = {
      type: types.GET_HOME_DATA_REQUEST
    };
    expect(actions.getHomeData()).toEqual(expectedAction);
  });

  it("should create an action to GET_HOME_DATA_SUCCESS", () => {
    const data = [];
    const expectedAction = {
      type: types.GET_HOME_DATA_SUCCESS,
      payload: {
        data: data
      }
    };
    expect(actions.getHomeDataSuccess(data)).toEqual(expectedAction);
  });

  it("should create an action to GET_HOME_DATA_FAILURE", () => {
    const error = {};
    const expectedAction = {
      type: types.GET_HOME_DATA_FAILURE,
      payload: {
        error: error
      }
    };
    expect(actions.getHomeDataFailure(error)).toEqual(expectedAction);
  });
});
