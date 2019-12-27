import selectors from "../../src/banner/selectors";
import { fromJS } from "immutable";

describe("selectors", () => {
  let state;

  beforeAll(() => {
    state = fromJS({
      banners: {
        byId: {
          1: {},
          2: {},
          3: {}
        },
        allIds: [1, 2, 3]
      }
    });
  });

  it("select home data from state", () => {
    const expectedData = state
      .get("banners")
      .get("allIds")
      .map(id => {
        return state
          .get("banners")
          .get("byId")
          .get(id);
      });
    const resuleData = selectors.selectHomeData(state);
    expect(resuleData.equals(expectedData)).toBe(true);
  });
});
