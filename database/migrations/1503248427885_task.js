'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.createTable('tasks', (table) => {
      table.increments('id');
      table.string('title');
      table.text('description');
      table.timestamps();
    });    
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
