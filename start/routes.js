'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Aqui van las rutas.. con los metodos GET POST etc... eso carga
// un controlador elegido con un metodo elegido.

Route.get('/', 'EjemploController.index')
Route.get('/dashboard', 'EjemploController.dashboard')
Route.get('/vista3', 'EjemploController.metodo3')
Route.post('login', 'AuthController.login')
Route.post('register', 'AuthController.register')

//localhost:3333/       - Carga la el controlador de ejemplo con el metodo 1
//localhost:3333/vista2 - Carga la el controlador de ejemplo con el metodo 2
//localhost:3333/vista3 - Carga la el controlador de ejemplo con el metodo 3