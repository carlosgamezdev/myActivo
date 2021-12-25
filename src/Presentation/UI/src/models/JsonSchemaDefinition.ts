import JsonSchema from './JsonSchema'
import JsonSchemaProperty from './JsonSchemaProperty'
import { Model } from 'src/composables/useOrm'

export default class JsonSchemaDefinition extends Model {
  id!: string
  $id!: string
  type!: string | Array<string>
  schemaId!: string | null
  schema!: JsonSchema | null
  properties!: JsonSchemaProperty[]
}
