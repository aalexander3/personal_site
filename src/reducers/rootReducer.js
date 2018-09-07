import { combineReducers } from 'redux';
import { aboutReducer } from './aboutReducer'
import { homeReducer } from './homeReducer'

import {reducer as burgerMenu} from 'redux-burger-menu';


const rootReducer = combineReducers({
  burgerMenu,
  home: homeReducer,
  about: aboutReducer
})

export { rootReducer }
