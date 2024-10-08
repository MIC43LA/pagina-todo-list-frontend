class TaskController {
    // Show a single task (Show)
    // List all tasks (Index)
    async index({ view }) {
        const tasks = await Task.all();
        return view.render('tasks.index', { tasks: tasks.toJSON() });
    }

    async show({ params, response }) {
      const task = await Task.find(params.id);
      if (!task) {
        return response.status(404).json({ message: 'Task not found' });
      }
      return response.json(task);
    }

  }
  