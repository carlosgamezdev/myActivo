import { Model } from 'src/composables/useOrm'
import JsonSchemaDefinition from './JsonSchemaDefinition'

export default class JsonSchemaProperty extends Model {
  id!: string
  $id!: string
  type!: string | Array<string>
  schemaDefinitionId!: string | null
  schema!: JsonSchemaDefinition | null
}
