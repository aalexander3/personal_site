import { combineReducers } from 'redux';

const pageState = {
  home: {
    headline: "Hi, I'm Arren!",
    description: "I'm a web developer and instructor currently working at Flatiron School in Brooklyn",
    color: 'pink'
  },
  about: {
    headline: 'About me',
    description: 'Some of facts are fun...',
    color: 'blue'
  },
  projects: {
    headline: "My Projects",
    description: "Mostly me playing around in React",
    color: 'purple'
  },
  contact: {
    headline: 'Say hello?',
    description: 'Say hi, shoot an email, or even put a message in a bottle. I\'d love to hear from you!',
    color: 'grey'
  }
}

const homeReducer = (state = pageState) => {
  return state
}

const rootReducer = combineReducers({
  home: homeReducer
})

export { rootReducer }
