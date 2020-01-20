import selectors from "../../src/error/selectors";
import { fromJS } from "immutable";

describe("", () => {
  let state;
  beforeAll(() => {
    state = fromJS({
      error: {
        "api/get/xxx": "",
        "api/get/yyy": {
          msg: "some expection happen"
        }
      }
    });
  });

  it("select api/get/xxx/request error from state", () => {
    const resultError = selectors.selectError(state, ["api/get/xxx/request"]);
    expect(resultError).toBe(null);
  });

  it("select api/get/yyy/request error from state", () => {
    const resultError = selectors.selectError(state, ["api/get/yyy/request"]);
    expect(
      resultError.equals(
        fromJS({
          msg: "some expection happen"
        })
      )
    ).toBe(true);
  });
});
