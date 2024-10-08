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

    // Create a new task (Store)
    async store({ request, response }) {
      const data = request.only(['title', 'description']);
      const task = await Task.create(data);
      return response.status(201).json(task);
    }

  }
  