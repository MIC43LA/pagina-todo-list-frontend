'use strict'

const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')

class EjemploController {
  
  /*----------------------------------------------------------------------------------------------------------*/
  /*-----------------------------------------------METODO 1---------------------------------------------------*/
  /*----------------------------------------------------------------------------------------------------------*/
    // metodfo 1 para manejar la solicitud GET y renderizar vista1.hbs
  async index({ response }) {
    const rutaArchivo = path.join(__dirname, '../../../resources/views/index.hbs') // Ruta a la plantilla Handlebars
    const plantillaCargada = fs.readFileSync(rutaArchivo, 'utf-8') // Leer el archivo de la plantilla
    const plantillaCompilada = Handlebars.compile(plantillaCargada) // Compilar la plantilla
    
    // Datos que se enviaran a la plantilla
    const datos = {
      titulo: 'Vista 1 - Handlebars',
      mensaje: 'Esta es la primera vista renderizada con Handlebars',
      datosAdicionales: 'Datos extra para la vista 1'
    }

    const html = plantillaCompilada(datos) // Renderizr la plantilla con los datos
    response.send(html) // Enviar la respuesta con la plantila renderizada
  }
  
  /*----------------------------------------------------------------------------------------------------------*/
  /*-----------------------------------------------METODO 2---------------------------------------------------*/
  /*----------------------------------------------------------------------------------------------------------*/
  // metodo 2 para manejar la solcitud GET y renderizar vista2.hbs
  async dashboard({ response }) {
    const rutaArchivo = path.join(__dirname, '../../../resources/views/dashboard.hbs') // Ruta a la plantilla Handlebars
    const plantillaCargada = fs.readFileSync(rutaArchivo, 'utf-8') // Leer el archivo de la plantilla
    const plantillaCompilada = Handlebars.compile(plantillaCargada) // Compilar la plantilla
    
    // Datos que se enviaran la plantilla
    const datos = {
      titulo: 'Vista 2 - Handlebars',
      mensaje: 'Esta es la segunda vista renderizada con Handlebars',
      datosAdicionales: 'Datos personalizados para la vista 2'
    }
    
    const html = plantillaCompilada(datos) // Renderzar la plantilla con los datos
    response.send(html) // Enviar la respuest con la plantilla renderizada
  }
  
  /*----------------------------------------------------------------------------------------------------------*/
  /*-----------------------------------------------METODO 3---------------------------------------------------*/
  /*----------------------------------------------------------------------------------------------------------*/
  // Metodo 3 para manejar la solicitud GET y renderizar vista3.hbs
  async metodo3({ response }) {
    const rutaArchivo = path.join(__dirname, '../../../resources/views/examples/vista3.hbs') // Ruta a la plantilla Handlebars
    const plantillaCargada = fs.readFileSync(rutaArchivo, 'utf-8') // Leer el archivo de la plantilla
    const plantillaCompilada = Handlebars.compile(plantillaCargada) // Compilar la plantilla

    // Datos que se enviarán a la plantilla
    const datos = {
      titulo: 'Vista 3 - Handlebars',
      mensaje: 'Esta es la tercera vista renderizada con Handlebars',
      datosAdicionales: 'Datos específicos para la vista 3'
    }

    const html = plantillaCompilada(datos) // Renderizar la plantilla con los datos
    response.send(html) // Enviar la respuesta con la plantilla renderizada
  }
}
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/

module.exports = EjemploController
