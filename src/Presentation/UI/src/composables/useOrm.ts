import { uuid } from './useUid'

/**
 * Name of the property used as a unique identifier
 * for each instance of the Model
 */
export const idPropertyName = 'id'

/**
 * The type of the property used as a unique
 * identifier
 */
export type idPropertyType = string


/**
 * The base class for all models
 */
export abstract class Model {
  constructor() {
    this[idPropertyName] = uuid()
    this.created = Date.now()
    this.modified = Date.now()
  }

  [idPropertyName]!: idPropertyType
  created!: number
  modified!: number

  private _dirty = false
  isDirty() { return this._dirty }
}

/**
 * The base collection definition that will contain
 * many instances of Model
 */
export abstract class Collection<M extends Model> {
  constructor() {
    this._collection = <M[]>[]
  }

  private _collection: M[]

  count() { return this._collection.length }
  findById(id: idPropertyType) { return this._collection.find(m => m[idPropertyName] === id) }
  find(entity: M) { return this.findById(entity[idPropertyName])}
  add(entity: M) {
    if(this.findById(entity[idPropertyName]) == undefined) this._collection.push(entity)
  }
  removeById(id: idPropertyType) {
    const i = this._collection.findIndex(m => m[idPropertyName] === id)
    this._collection.splice(i,1)
  }
  remove(entity: M) {
    this.removeById(entity[idPropertyName])
  }
}
