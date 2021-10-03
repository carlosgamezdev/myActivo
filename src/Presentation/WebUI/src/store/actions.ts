import { ActionContext, ActionTree } from 'vuex'
import { StateInterface } from './index'
import axios, { AxiosResponse } from 'axios'

const actions: ActionTree<StateInterface, StateInterface> = {
  async getAll<T>(ctx:ActionContext<StateInterface,StateInterface>, url:string) {
    const items:AxiosResponse<T> = await axios.get(url)
    return items
  },
  async get<T>(ctx:ActionContext<StateInterface,StateInterface>, url:string): Promise<AxiosResponse<T>> {
    const item:AxiosResponse<T> = await axios.get(url)
    return item
  }
}

export default actions
