// app/Models/Task.js
const { BaseModel } = require('@adonisjs/lucid/src/Lucid/Orm')

class Task extends BaseModel {
  static get table () {
    return 'tasks' // La tabla en la base de datos
  }
}

module.exports = Task
