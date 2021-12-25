import { Model } from 'src/composables/useOrm'

export default class User extends Model {
  name!: string
  email!: string
}
