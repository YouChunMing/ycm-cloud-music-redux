import reducer from '../src/index'
import { STATE_KEY as BANNERS_STATE_KEY } from '../src/banner'
import {
  STATE_BYID_REDUCER_KEY,
  STATE_ALLIDS_REDUCER_KEY
} from '../src/banner/selectors'
import { Map, List } from 'immutable'

describe('reducers', () => {
  let initialState

  beforeAll(() => {
    initialState = reducer(undefined, { type: `@@redux/INIT` })
  })

  it('should return the initial state', () => {
    const expectedInitialState = Map({
      [BANNERS_STATE_KEY]: Map({
        [STATE_BYID_REDUCER_KEY]: Map(),
        [STATE_ALLIDS_REDUCER_KEY]: List()
      })
    })
    expect(initialState.equals(expectedInitialState)).toBe(true)
  })
})
