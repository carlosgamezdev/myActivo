import { Model } from 'src/composables/useOrm'

export default class Module extends Model {
  constructor(init?: Partial<Module>) {
    super()

    if (init) {
      Object.assign(this,init)
    }
  }

  id!: string
  title!: string
  caption!: string
  icon!: string
  to!: string
}
