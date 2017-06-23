export const users = state => state.all
export const session = state => {
  return JSON.parse(window.localStorage.getItem('user'))
}
