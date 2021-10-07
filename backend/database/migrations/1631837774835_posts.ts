import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table
        .enu('transference', [
          'asynmptomatic',
          'synmptomatic',
          'not_transfered_yet'
        ])
        .notNullable()
        .defaultTo('not_transfered_yet')
      table.float('temperature').notNullable()
      /* table.integer('temperature').notNullable() */
      table.integer('blood_oxygen').notNullable()
      table.integer('heart_rate').notNullable()
      table.boolean('fever').notNullable()
      table.boolean('headache').notNullable()
      table.boolean('runny_nose').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
