
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
      demo: 'https://app-investr.herokuapp.com',
      images: ['investr-match.png', 'investr-message.png', 'investr-profile.png'],
      slug: 'investr',
      environment: 'React, JavaScript, HTML 5, CSS, Rails API, Web Sockets, PostgreSQL, Git'
    },
    {
      name: "JDID Portfolio",
      description: 'Music producer and sculpture artist portfolio built with custom HTML & CSS, including: animations, perspective, and a custom audio player.',
      github: 'https://github.com/aalexander3/josh-portfolio',
      demo: 'https://jdid.art',
      images: ['jdid-music.png', 'jdid-gallery.png', 'jdid-art.png'],
      slug: 'jdid',
      environment: 'React, HTML5, HTML Audio, CSS, Animations, Git'
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
    {
      name: "Bryceez the Pisceez",
      description: 'Bryceez the Pisceez is a web e-vite for a dearly-loved dog\'s birthday party. It has a downloadable invitation, custom flying doggos, and some truly obnoxious UI',
      github: 'https://github.com/aalexander3/bryceez-the-pisceez',
      demo: 'bryceez-the-piseez.dog',
      images: ['bryceez-full.png', 'bryceez-pie.png', 'bryceez-empty.png'],
      slug: 'bryceez-the-pisceez',
      environment: 'Vanilla JS, HTML5, CSS, downloadable, Git'
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
