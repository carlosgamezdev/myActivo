import { Model, Attr, Str, Uid } from '@vuex-orm/core'

export default class Setting extends Model {
  static entity = 'settings'

  @Uid()
  id!: string

  @Str('')
  type!: string

  @Str('')
  name!: string

  @Attr(null)
  value!: any
}
