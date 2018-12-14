import { combineReducers } from 'redux';
import { aboutReducer } from './aboutReducer'
import { homeReducer } from './homeReducer'
import { projectReducer } from './projectReducer'
import { navReducer } from './navReducer'
// import {reducer as burgerMenu} from 'redux-burger-menu';


const rootReducer = combineReducers({
  home: homeReducer,
  about: aboutReducer,
  projects: projectReducer,
  nav: navReducer
})

export { rootReducer }
