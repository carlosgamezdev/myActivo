import { Model, Attr, Str, Uid, BelongsTo } from '@vuex-orm/core'
import User from './User'

export default class Setting extends Model {
  static entity = 'settings'

  @Uid()
  id!: string

  @Attr(null)
  userId!: string | null

  @Str('')
  type!: string

  @Str('')
  name!: string

  @Attr(null)
  value!: string | number

  @BelongsTo(() => User, 'userId')
  user!: User | null
}
