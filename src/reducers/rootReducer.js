import { combineReducers } from 'redux';

const defaultReducer = (state = {}) => {
  return state
}

const rootReducer = combineReducers({
  default: defaultReducer
})

export { rootReducer }
