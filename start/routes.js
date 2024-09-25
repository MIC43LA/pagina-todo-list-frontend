'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Aqui van las rutas.. con los metodos GET POST etc... eso carga
// un controlador elegido con un metodo elegido.

Route.get('/', 'EjemploController.metodo1')
Route.get('/vista2', 'EjemploController.metodo2')
Route.get('/vista3', 'EjemploController.metodo3')

//localhost:3333/       - Carga la el controlador de ejemplo con el metodo 1
//localhost:3333/vista2 - Carga la el controlador de ejemplo con el metodo 2
//localhost:3333/vista3 - Carga la el controlador de ejemplo con el metodo 3