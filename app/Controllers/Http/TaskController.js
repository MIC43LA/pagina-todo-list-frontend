class TaskController {
    // List all tasks (Index)
    async index({ view }) {
      const tasks = await Task.all();
      return view.render('tasks.index', { tasks: tasks.toJSON() });
    }

    // Show a single task (Show)
    async show({ params, view, response }) {
      const task = await Task.find(params.id);
      if (!task) {
        return response.status(404).json({ message: 'Task not found' });
      }
      return view.render('tasks.show', { task });
    }

    // Render a form for creating a new task (Create)
    async create({ view }) {
      return view.render('tasks.create');
    }

    // Create a new task (Store)
    async store({ request, response }) {
      const data = request.only(['title', 'description']);
      const task = await Task.create(data);
      return response.redirect('/tasks'); // Redirigir a la lista después de crear
    }

    // Render a form for editing an existing task (Edit)
    async edit({ params, view, response }) {
      const task = await Task.find(params.id);
      if (!task) {
      return response.status(404).json({ message: 'Task not found' });
      }
      return view.render('tasks.edit', { task });
    }
  
    // Update an existing task (Update)
    async update({ params, request, response }) {
      const task = await Task.find(params.id);
      if (!task) {
        return response.status(404).json({ message: 'Task not found' });
      }
      task.merge(request.only(['title', 'description']));
      await task.save();
      return response.redirect('/tasks'); // Redirigir a la lista después de actualizar
    }
  
    // Delete a task (Destroy)
    async destroy({ params, response }) {
      const task = await Task.find(params.id);
      if (!task) {
        return response.status(404).json({ message: 'Task not found' });
      }
      await task.delete();
      return response.redirect('/tasks'); // Redirigir a la lista después de eliminar
    }
  }
  
module.exports = TaskController;
  