import { useStore } from 'src/store/index'
import { AxiosResponse } from 'axios'
import User from 'src/models/User'

export default async function useUser(id: string): Promise<User> {

  if(typeof(id) == 'undefined') { throw new Error('User ID is required.') }

  const store = useStore()
  const repo = store.$repo(User)

  const response = await store.dispatch('get', `/api/user/${id}`) as AxiosResponse<User>

  repo.save(response.data)

  store.commit('ui/setUserLoaded', true)

  return response.data
}
