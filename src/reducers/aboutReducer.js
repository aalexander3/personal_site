
const aboutState = {
    bio: 'Full stack web developer and instructor with a passion for travel, music, and the outdoors.',
    bio2: 'I teach at the Flatiron School, helping students realize their own dreams of building with code. After studying music and literature, I too, discovered software development, and found their similarities in making creative decisions, constant practice, and the importance of having a beginner’s mindset.',
    display: 'about',
    coreInterests: [
      { interest: 'I climb and hike', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-10-128.png' },
      { interest: 'I\'m a musician', source: 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/gibson-les_paul_guitar_bass-128.png' },
      { interest: 'I write interactive code', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-07-128.png' },
      { interest: 'I run on caffeine', source: 'https://cdn0.iconfinder.com/data/icons/kitchen-49/128/Kitchen-36-128.png' },
      { interest: 'I\'m a wannabe home chef', source: 'https://cdn0.iconfinder.com/data/icons/kitchen-49/128/Kitchen-28-128.png' },
      { interest: 'I love to travel', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-21-128.png' },
      // need a few more here 12 total!!!
    ]
}

export const aboutReducer = (state = aboutState, action) => {
  switch (action.type) {
    case "SHOW_ABOUT":
      return { ...state, display: action.payload.display }

    case "SHOW_INTEREST":
      return { ...state, display: action.payload.display }

    case "SHOW_FAST":
      return { ...state, display: action.payload.display }

    default:
      return state
  }
}
