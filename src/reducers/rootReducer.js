import { combineReducers } from 'redux';

const pageState = {
  home: {
    headline: "Hi! I'm Arren.",
    description: "I'm a Brooklyn based web developer and instructor.",
    slug: '/'
  },
  about: {
    bio: 'Full stack web developer and instructor with a passion for travel, music, and the outdoors.',
    bio2: 'I teach at the Flatiron School, helping students realize their own dreams of building with code. After studying music and literature, I too, discovered software development, and found their similarities in making creative decisions, constant practice, and the importance of having a beginner’s mindset.'
  }
}

const homeReducer = (state = pageState) => {
  return state.home
}

const aboutReducer = (state = pageState) => {
  return state.about
}

const rootReducer = combineReducers({
  home: homeReducer,
  about: aboutReducer
})

export { rootReducer }
