
const projectState = {
  projects: [
    {
      name: "Forecast VR",
      description: 'Forecast VR is a React, Redux, and AFrame web application that renders a virtual reality representation of current conditions of 21 major cities around the world. The application uses the Dark Sky API for its source of weather information.',
      github: 'https://github.com/aalexander3/forecast-vr-frontend',
      demo: 'http://forecast-vr.herokuapp.com/',
      images: ['ForecastVR-vr.png', 'ForecastVR-landing.png', 'ForecastVR-detail.png']
    },
    {
      name: "Forecast VR",
      description: 'Forecast VR is a React, Redux, and AFrame web application that renders a virtual reality representation of current conditions of 21 major cities around the world. The application uses the Dark Sky API for its source of weather information.',
      github: 'https://github.com/aalexander3/forecast-vr-frontend',
      demo: 'http://forecast-vr.herokuapp.com/',
      images: ['ForecastVR-vr.png', 'ForecastVR-landing.png', 'ForecastVR-detail.png']
    },
  ],
  defaultProj: {}
}


export const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case 'SHOW_PROJECT':

      break;
    default:
      return state
  }
}
