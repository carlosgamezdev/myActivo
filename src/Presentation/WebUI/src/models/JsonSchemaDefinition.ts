import { Model, Str, Uid, Attr, BelongsTo, HasMany } from '@vuex-orm/core'
import JsonSchema from './JsonSchema'
import JsonSchemaProperty from './JsonSchemaProperty'

export default class JsonSchemaDefinition extends Model {
  static entity = 'json-schema-definitions'

  @Uid()
  id!: string

  @Str('')
  $id!: string

  @Attr('')
  type!: string | Array<string>

  @Attr(null)
  schemaId!: string | null

  @BelongsTo(() => JsonSchema, 'schemaId')
  schema!: JsonSchema | null

  @HasMany(() => JsonSchemaProperty,'schemaDefinitionId')
  properties!: JsonSchemaProperty[]
}
