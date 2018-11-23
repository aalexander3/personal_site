
const projectState = {
  projects: [
    {
      name: "Forecast VR",
      description: 'Forecast VR is a React, Redux, and AFrame web application that renders a virtual reality representation of current conditions of 21 major cities around the world. The application uses the Dark Sky API for its source of weather information.',
      github: 'https://github.com/aalexander3/forecast-vr-frontend',
      demo: 'http://forecast-vr.herokuapp.com/',
      images: ['ForecastVR-vr.png', 'ForecastVR-landing.png', 'ForecastVR-detail.png'],
      slug: 'forecast-vr',
      environment: 'React, Redux, JavaScript, HTML 5, CSS, AFrame VR, Heroku, Git'
    },
    {
      name: "Investr",
      description: 'Investr is a React frontend and Rails API backend application that pairs venture seeking investors with startups looking for funding. The startup data was scraped from Angel\'s List. The real-time messaging feature was implemented with Action Cable.',
      github: 'https://github.com/aalexander3/venture-time-frontend',
      demo: null,
      images: ['investr-match.png', 'investr-message.png', 'investr-profile.png'],
      slug: 'investr',
      environment: 'React, JavaScript, HTML 5, CSS, Rails API, Web Sockets, PostgreSQL, Git'
    },
    {
      name: "Wantr",
      description: 'Wantr is a productivity dashboard designed to help users keep track of their goals. The application is built on a Rails API backend with a vanilla JavaScript frontend.',
      github: 'https://github.com/aalexander3/wantr',
      demo: null,
      images: ['wantr-land.png', 'wantr-dash.png', 'wantr-add.png'],
      slug: 'wantr',
      environment: 'React, JavaScript, HTML 5, CSS, Rails API, Web Sockets, PostgreSQL, Git'
    },
    {
      name: "Crowd Capsule",
      description: 'Crowd Capsule is a crowd-sourced digital time capsule designed to collectively tell the story of the human experience. Conceived and built in 36 hours by a team of developers as a solution to NASA\'s 2018 Space Apps Challenge: "Remix the Golden Record"',
      github: 'https://github.com/aalexander3/crowd-capsule',
      demo: null,
      images: ['crowd-capsule-interaction.gif', 'crowd-capsule-map.png', 'crowd-capsule-upload.png'],
      slug: 'crowd-capsule',
      environment: 'React, Redux, HTML 5, CSS, Cloudinary API, Rails API, PostgreSQL, Git'
    },
  ],
  selectedProject: {}
}


export const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case 'SET_DETAIL':
      return {
        ...state,
        selectedProject: action.payload
      }
    default:
      return state
  }
}
