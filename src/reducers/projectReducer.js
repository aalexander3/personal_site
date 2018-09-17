
const projectState = {
  projects: [
    {
      name: "Forecast VR",
      description: 'Forecast VR is a React, Redux, and AFrame web application that renders a virtual reality representation of current conditions of 21 major cities around the world. The application uses the Dark Sky API for its source of weather information.',
      github: 'https://github.com/aalexander3/forecast-vr-frontend',
      demo: 'http://forecast-vr.herokuapp.com/',
      images: ['ForecastVR-vr.png', 'ForecastVR-landing.png', 'ForecastVR-detail.png'],
      slug: 'forecast-vr'
    },
    {
      name: "Investr",
      description: 'Investr is a React, Redux, and Rails application that pairs investors with startups looking for funding. The startup data was scraped from Angel\'s List. The Real-time messaging feature was implemented with Action Cable.',
      github: 'https://github.com/aalexander3/venture-time-frontend',
      demo: null,
      images: ['ForecastVR-vr.png', 'ForecastVR-landing.png', 'ForecastVR-detail.png'],
      slug: 'investr'
    },
    {
      name: "Wantr",
      description: 'Forecast VR is a React, Redux, and AFrame web application that renders a virtual reality representation of current conditions of 21 major cities around the world. The application uses the Dark Sky API for its source of weather information.',
      github: 'https://github.com/aalexander3/forecast-vr-frontend',
      demo: null,
      images: ['ForecastVR-vr.png', 'ForecastVR-landing.png', 'ForecastVR-detail.png'],
      slug: 'wantr'
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
