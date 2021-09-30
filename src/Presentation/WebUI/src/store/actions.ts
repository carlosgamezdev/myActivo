import { ActionTree } from 'vuex'
import { StateInterface } from './index'
import axios from 'axios'

const actions: ActionTree<StateInterface, StateInterface> = {
  async getAll(ctx,url) {
    const items = await axios.get(url)
    return items
  }
}

export default actions
