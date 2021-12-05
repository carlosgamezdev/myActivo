import { Model, Str, Uid, Attr, HasMany } from '@vuex-orm/core'
import JsonSchemaDefinition from './JsonSchemaDefinition'
import JsonSchemaProperty from './JsonSchemaProperty'

export default class JsonSchema extends Model {
  static entity = 'json-schemas'

  @Uid()
  id!: string

  @Str('')
  $id!: string

  @Str('')
  $schema!: string

  @Str('')
  $comment!: string

  @Str('')
  title!: string

  @Attr('')
  type!: string | Array<string>

  @HasMany(() => JsonSchemaDefinition,'schemaId')
  definitions!: JsonSchemaDefinition[]

  @HasMany(() => JsonSchemaProperty, 'schemaId')
  properties!: JsonSchemaProperty[]
}
