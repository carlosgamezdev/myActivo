import { HasMany, Model, Str, Uid } from '@vuex-orm/core'
import Setting from './Setting'

export default class User extends Model {
  static entity = 'users'

  @Uid()
  id!: string

  @Str('')
  name!: string

  @Str('')
  email!: string

  @HasMany(() => Setting,'userId')
  settings!: Setting[]
}
