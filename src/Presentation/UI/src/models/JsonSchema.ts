import { Model } from 'src/composables/useOrm'

export default class JsonSchema extends Model {
  title!: string
  type!: string | Array<string>
}
