'use strict'

const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')

// Registrar los partials
const partialsDir = path.join(__dirname, '../../../resources/views/partials')
fs.readdirSync(partialsDir).forEach(filename => {
  const partialName = path.parse(filename).name
  const partialPath = path.join(partialsDir, filename)
  const partialTemplate = fs.readFileSync(partialPath, 'utf-8')
  Handlebars.registerPartial(partialName, partialTemplate) // Registrar partial con Handlebars
})
function vista(file) {
  // Ruta al layout base
  const layoutPath = path.join(__dirname, '../../../resources/views/layouts/index.hbs')
  const layoutContent = fs.readFileSync(layoutPath, 'utf-8')
  const layoutTemplate = Handlebars.compile(layoutContent)

  // Ruta a la vista (contenido principal)
  const viewPath = path.join(__dirname, file)
  const viewContent = fs.readFileSync(viewPath, 'utf-8')
  const viewTemplate = Handlebars.compile(viewContent)

  // Datos que se enviarán a la vista
  const datos = {
    titulo: 'Vista 1 - Handlebars',
    mensaje: 'Esta es la primera vista renderizada con Handlebars',
    datosAdicionales: 'Datos extra para la vista 1',
  }

  // Renderizar la vista principal con los datos
  const viewHtml = viewTemplate(datos)

  // Datos para el layout (renderizar el contenido principal dentro del layout)
  const layoutData = {
    body: viewHtml, // Inserta la vista dentro del layout
    titulo: 'Mi página con layout',
  }

  // Renderizar el layout completo con la vista dentro
  return layoutTemplate(layoutData)

}

class EjemploController {
  /*----------------------------------------------------------------------------------------------------------*/
  /*-----------------------------------------------METODO 1---------------------------------------------------*/
  /*----------------------------------------------------------------------------------------------------------*/
  // Método 1 para manejar la solicitud GET y renderizar vista1.hbs
  async index({ response }) {
    return response.send(vista('../../../resources/views/index.hbs')) // Enviar la respuesta con el HTML final renderizado
  }
  /*----------------------------------------------------------------------------------------------------------*/
  /*-----------------------------------------------METODO 2---------------------------------------------------*/
  /*----------------------------------------------------------------------------------------------------------*/
  // metodo 2 para manejar la solcitud GET y renderizar vista2.hbs
  async dashboard({ response }) {
    return response.send(vista('../../../resources/views/dashboard.hbs')) // Enviar la respuest con la plantilla renderizada
  }
  
  /*----------------------------------------------------------------------------------------------------------*/
  /*-----------------------------------------------METODO 3---------------------------------------------------*/
  /*----------------------------------------------------------------------------------------------------------*/
  // Metodo 3 para manejar la solicitud GET y renderizar vista3.hbs
  async metodo3({ response }) {
    return response.send(vista(null)
    )
  }
}
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/

module.exports = EjemploController
