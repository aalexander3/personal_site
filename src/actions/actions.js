export const handleAboutChange = (e) => {
  return {
    type: "ABOUT_CHANGE",
    payload: e.target.dataset.name
  }
}
