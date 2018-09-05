import { combineReducers } from 'redux';

const homeState = {
    headline: "Hi! I'm Arren.",
    description: "I'm a Brooklyn based web developer and instructor.",
    slug: '/'
}

const aboutState = {
    bio: 'Full stack web developer and instructor with a passion for travel, music, and the outdoors.',
    bio2: 'I teach at the Flatiron School, helping students realize their own dreams of building with code. After studying music and literature, I too, discovered software development, and found their similarities in making creative decisions, constant practice, and the importance of having a beginner’s mindset.',
    display: 'about',
    fastFacts: [

    ],
    coreInterests: [
      { interest: 'I climb and hike', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-10-128.png' },
      { interest: 'I\'m a musician', source: 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/gibson-les_paul_guitar_bass-128.png' },
      { interest: 'I write interactive code', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-07-128.png' },
      { interest: 'I run on caffeine', source: 'https://cdn0.iconfinder.com/data/icons/kitchen-49/128/Kitchen-36-128.png' },
      { interest: 'I\'m a wannabe home chef', source: 'https://cdn0.iconfinder.com/data/icons/kitchen-49/128/Kitchen-28-128.png' },
      { interest: 'I love to travel', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-21-128.png' }
    ]
}

const homeReducer = (state = homeState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const aboutReducer = (state = aboutState, action) => {
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
