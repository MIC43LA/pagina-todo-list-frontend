'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Aqui van las rutas.. con los metodos GET POST etc... eso carga
// un controlador elegido con un metodo elegido.

Route.get('/', 'EjemploController.index')
Route.get('/dashboard', 'EjemploController.dashboard')
Route.get('/vista3', 'EjemploController.metodo3')

Route.get('/tasks', 'TaskController.index');        // Listar todas las tareas (Index)
Route.get('/tasks/create', 'TaskController.create'); // Formulario de creación (Create)
Route.get('/tasks/:id', 'TaskController.show');      // Mostrar una tarea (Show)
Route.post('/tasks', 'TaskController.store');        // Guardar una nueva tarea (Store)
Route.get('/tasks/:id/edit', 'TaskController.edit'); // Formulario de edición (Edit)
Route.put('/tasks/:id', 'TaskController.update');    // Actualizar tarea existente (Update)
Route.delete('/tasks/:id', 'TaskController.destroy');// Eliminar tarea (Destroy)

//localhost:3333/       - Carga la el controlador de ejemplo con el metodo 1
//localhost:3333/vista2 - Carga la el controlador de ejemplo con el metodo 2
//localhost:3333/vista3 - Carga la el controlador de ejemplo con el metodo 3