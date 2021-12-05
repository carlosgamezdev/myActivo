import { Model, Str, Uid, Attr, BelongsTo } from '@vuex-orm/core'
import JsonSchemaDefinition from './JsonSchemaDefinition'

export default class JsonSchemaProperty extends Model {
  static entity = 'json-schema-properties'

  @Uid()
  id!: string

  @Str('')
  $id!: string

  @Attr('')
  type!: string | Array<string>

  @Attr(null)
  schemaDefinitionId!: string | null

  @BelongsTo(() => JsonSchemaDefinition, 'schemaDefinitionId')
  schema!: JsonSchemaDefinition | null
}
