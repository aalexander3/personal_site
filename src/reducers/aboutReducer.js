
const aboutState = {
    bio: 'Full stack web developer and instructor with a passion for travel, music, and the outdoors.',
    bio2: 'I teach at the Flatiron School, helping students realize their own dreams of building with code. After studying music and literature, I too, discovered software development, and found their similarities in making creative decisions, constant practice, and the importance of having a beginner’s mindset.',
    display: 'about',
    aboutToggle: false,
    defaultInt: { interest: "I'm a Brooklyn based developer and instructor.", source: 'https://cdn4.iconfinder.com/data/icons/iconize-apple-devices-freebies/128/apple-08-128.png' },
    coreInterests: [
      { interest: 'I climb and hike. My favorite crag is Rocky Mountain National Park', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-10-128.png' },
      { interest: "I'm a Brooklyn based developer and instructor", source: 'https://cdn4.iconfinder.com/data/icons/iconize-apple-devices-freebies/128/apple-08-128.png' },
      { interest: 'I\'m a musician. I played in an indie band for 10(ish) years', source: 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/gibson-les_paul_guitar_bass-128.png' },
      { interest: 'I write creative code with a focus on interaction', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-07-128.png' },
      { interest: 'I run on caffeine. Double macchiato, please', source: 'https://cdn0.iconfinder.com/data/icons/kitchen-49/128/Kitchen-36-128.png' },
      { interest: 'I studied opera, but I don\'t fit the stereotype', source: 'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Viking-128.png' },
      { interest: 'I\'m a wannabe home chef. I make a mean Thai Curry', source: 'https://cdn0.iconfinder.com/data/icons/kitchen-49/128/Kitchen-28-128.png' },
      { interest: 'I like languages and literature', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-05-128.png' },
      { interest: 'I\'m a fan of craft beer. Cheers!', source: 'https://cdn1.iconfinder.com/data/icons/alcohol-drinks-1/128/Drinks-23-2-128.png' },
      { interest: 'I love to travel. I can\'t wait to go back to Portugal', source: 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-21-128.png' },
      { interest: 'My family plays a lot of board games, but my brother always wins', source: 'https://cdn1.iconfinder.com/data/icons/artcorepart-4/128/chess.png' },
      { interest: 'I like gardening and getting my hands dirty!', source: 'https://cdn2.iconfinder.com/data/icons/spring-30/30/Watering_Can-128.png' },
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

    case "SET_INTEREST":
      return { ...state, defaultInt: action.payload }

    case "TOGGLE_ABOUT":
      return { ...state, aboutToggle: !state.aboutToggle }

    case "CLOSE_ABOUT":
      return { ...state, aboutToggle: false }

    default:
      return state
  }
}
