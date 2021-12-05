import { MutationTree } from 'vuex';
import { UiStateInterface } from './state';

const mutation: MutationTree<UiStateInterface> = {
  setAppTitle(state: UiStateInterface, value: string | null) {
    state.appTitle = value ? value : 'myActivo'
  },
  setUserLoaded (state: UiStateInterface, value: boolean) {
    state.userLoaded = value
  },
  setLeftDrawer(state: UiStateInterface, value: boolean) {
    state.leftDrawerOpen = value
  },
  toggleLeftDrawer(state: UiStateInterface) {
    state.leftDrawerOpen = !state.leftDrawerOpen
  },
  toggleMiniState(state: UiStateInterface) {
    state.miniState = !state.miniState
  }
};

export default mutation;
