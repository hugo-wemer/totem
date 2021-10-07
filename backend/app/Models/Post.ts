import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  /* @column({ isPrimary: true })
  @slugify({
    strategy: 'simple',
    fields: ['name'],
    allowUpdates: true
  })
  public slug: string */

  @column()
  public transference: 'asynmptomatic' | 'synmptomatic' | 'not_tranfered_yet'

  @column()
  public temperature: Float32Array
  /* @column()
  public temperature: number */

  @column()
  public blood_oxygen: number

  @column()
  public heart_rate: number

  @column()
  public fever: boolean

  @column()
  public headache: boolean

  @column()
  public runny_nose: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
