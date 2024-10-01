'use strict'

const Route = use('Route')

//Aqui van las rutas.. con los metodos GET POST etc... eso carga
// un controlador elegido con un metodo elegido.

Route.get('/', 'EjemploController.metodo1')

//localhost:3333/       - Carga la el controlador de ejemplo con el metodo 1