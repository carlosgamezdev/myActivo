import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UiStateInterface } from './state';

const actions: ActionTree<UiStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
