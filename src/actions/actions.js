export const showAbout = () => {
  return {
    type: "SHOW_ABOUT",
    payload: { display: 'about' }
  }
}

export const toggleAbout = () => {
  return {
    type: "TOGGLE_ABOUT"
  }
}

export const closeAbout = () => {
  return {
    type: "CLOSE_ABOUT"
  }
}

export const showInterest = () => {
  return {
    type: "SHOW_INTEREST",
    payload: { display: 'core' }
  }
}

export const showFast = () => {
  return {
    type: "SHOW_FAST",
    payload: { display: 'fast' }
  }
}

export const setDetail = (project) => {
  return {
    type: "SET_DETAIL",
    payload: project
  }
}

export const setInterest = int => {
  return {
    type: "SET_INTEREST",
    payload: int
  }
}
