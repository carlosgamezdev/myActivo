export interface UiStateInterface {
  userLoaded: boolean,
  leftDrawerOpen: boolean,
  miniState: boolean
}

function state(): UiStateInterface {
  return {
    userLoaded: false,
    leftDrawerOpen: false,
    miniState: false
  }
}

export default state;
