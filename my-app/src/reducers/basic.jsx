import {OPEN_BUTTON, CLOSE_BUTTON} from '../constants'

function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    return reducer
      ? reducer(state, action.payload)
      : state;
  };
}

const initialState = {
  isOpen: null
};

export default createReducer(initialState, {
  [OPEN_BUTTON]: (state, payload) => {
    return Object.assign({}, state, {
      'isOpen': true
    });
  },
  [CLOSE_BUTTON]: (state, payload) => {
    return Object.assign({}, state, {
      'isOpen': false
    });
  }
});
