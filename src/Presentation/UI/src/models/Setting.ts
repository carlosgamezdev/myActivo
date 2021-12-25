import { Model } from 'src/composables/useOrm'
import User from './User'

export default class Setting extends Model {
  id!: string
  userId!: string | null
  type!: string
  name!: string
  value!: string | number
  user!: User | null
}
