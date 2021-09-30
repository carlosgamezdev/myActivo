import { Model, Str, Uid } from '@vuex-orm/core'

export default class Module extends Model {
  static entity = 'modules'

  @Uid()
  id!: string

  @Str('')
  title!: string

  @Str('')
  caption!: string

  @Str('')
  icon!: string

  @Str('')
  to!: string
}
