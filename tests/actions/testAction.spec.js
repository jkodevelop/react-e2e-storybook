import * as actions from '../../source/js/actions/index.js'

describe('actions', () => {
  it('should increment by count', () => {
    const count = 1;
    const expectedAction = {
      type: 'INCREMENT',
      count,
    }
    expect(actions.incrementCount(count)).toEqual(expectedAction)
  })
  it('should decrement by count', () => {
    const count = 1;
    const expectedAction = {
      type: 'DECREMENT',
      count,
    }
    expect(actions.decrementCount(count)).toEqual(expectedAction)
  })
  it('should increment by even_count', () => {
    const count = 1;
    const expectedAction = {
      type: 'INCREMENT_EVEN',
      count,
    }
    expect(actions.incrementCountEven(count)).toEqual(expectedAction)
  })
  it('should decrement by even_count', () => {
    const count = 1;
    const expectedAction = {
      type: 'DECREMENT_EVEN',
      count,
    }
    expect(actions.decrementCountEven(count)).toEqual(expectedAction)
  })
})