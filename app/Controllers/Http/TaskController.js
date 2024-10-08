class TaskController {
    // Show a single task (Show)
    // List all tasks (Index)
    async index({ view }) {
        const tasks = await Task.all();
        return view.render('tasks.index', { tasks: tasks.toJSON() });
    }
  }
  