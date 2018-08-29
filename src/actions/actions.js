export const handleAboutChange = (e) => {
  // console.log('aboutChange', e.target.dataset.name)

  return {
    type: "ABOUT_CHANGE",
    payload: e.target.dataset.name
  }
}
