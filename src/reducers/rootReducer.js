import { combineReducers } from 'redux';

const homeState = {
    headline: "Hi! I'm Arren.",
    description: "I'm a Brooklyn based web developer and instructor.",
    slug: '/'
}

const aboutState = {
    bio: 'Full stack web developer and instructor with a passion for travel, music, and the outdoors.',
    bio2: 'I teach at the Flatiron School, helping students realize their own dreams of building with code. After studying music and literature, I too, discovered software development, and found their similarities in making creative decisions, constant practice, and the importance of having a beginner’s mindset.',
    display: 'about'
}

const homeReducer = (state = homeState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const aboutReducer = (state = aboutState, action) => {
  console.log('reducer', action)

  switch (action.type) {
    case "ABOUT_CHANGE":
      return { ...state, display: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  home: homeReducer,
  about: aboutReducer
})

export { rootReducer }
