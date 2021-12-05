export interface UiStateInterface {
  appTitle: string,
  userLoaded: boolean,
  leftDrawerOpen: boolean,
  miniState: boolean
}

function state(): UiStateInterface {
  return {
    appTitle: 'myActivo',
    userLoaded: false,
    leftDrawerOpen: false,
    miniState: false
  }
}

export default state;
