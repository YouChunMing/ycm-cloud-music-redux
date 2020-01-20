import selectors from "../../src/fetching/selectors";
import { fromJS } from "immutable";

describe("selectors", () => {
  let state;

  beforeAll(() => {
    state = fromJS({
      fetching: {
        "api/get/xxx": true
      }
    });
  });

  it("select api/get/xxx/request from state", () => {
    const expectedFetching = true;
    const resuleFetching = selectors.selectFetching(state, [
      "api/get/xxx/request"
    ]);
    expect(resuleFetching).toBe(expectedFetching);
  });

  it("select api/get/yyy/request from state", () => {
    const expectedFetching = false;
    const resuleFetching = selectors.selectFetching(state, [
      "api/get/yyy/request"
    ]);
    expect(resuleFetching).toBe(expectedFetching);
  });
});
