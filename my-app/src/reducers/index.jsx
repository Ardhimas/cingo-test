import {combineReducers} from 'redux';
import basic from './basic';

// export default combineReducers({
//   customer,
//   request: request,
//   form: formReducer,
//   routing: routerReducer
// });

const appReducer = combineReducers({
  basic
})

export default (state, action) => {
  return appReducer(state, action)
}
