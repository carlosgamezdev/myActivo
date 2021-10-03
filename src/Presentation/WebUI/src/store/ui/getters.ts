import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { UiStateInterface } from './state'

const getters: GetterTree<UiStateInterface, StateInterface> = {
  // getAppTitle(ctx,getters,rootState): string {
  //   const title = rootState.entities.settings.find(setting => setting.name === 'appName')?.value as string
  //   console.log(rootState)
  //   return title
  // }
}

export default getters
