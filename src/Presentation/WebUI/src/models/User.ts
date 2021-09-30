import { Model, Str, Uid } from '@vuex-orm/core'

export default class User extends Model {
  static entity = 'users'

  @Uid()
  id!: string

  @Str('')
  name!: string
}
