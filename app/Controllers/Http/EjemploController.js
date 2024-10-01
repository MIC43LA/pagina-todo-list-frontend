'use strict'

const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const json = [
  {
    id: 1,
    titulo: "Preparar informe semanal",
    descripcion: "Completar el informe para el lunes",
    estado: "pendiente",
    fecha_creacion: "2024-10-01 00:27:35",
    fecha_modificacion: "2024-10-01 00:27:35",
    id_categoria: 1,
    id_lista: 1,
    categoria: {
      id: 1,
      nombre_categoria: "Trabajo",
      descripcion: "Tareas relacionadas con el trabajo"
    },
    lista: {
      id: 1,
      nombre_lista: "Lista de Trabajo",
      descripcion: "Tareas laborales a realizar"
    }
  },
  {
    id: 2,
    titulo: "Revisión de contratos",
    descripcion: "Revisar contratos de los proveedores",
    estado: "en progreso",
    fecha_creacion: "2024-10-01 00:27:35",
    fecha_modificacion: "2024-10-01 00:27:35",
    id_categoria: 1,
    id_lista: 1,
    categoria: {
      id: 1,
      nombre_categoria: "Trabajo",
      descripcion: "Tareas relacionadas con el trabajo"
    },
    lista: {
      id: 1,
      nombre_lista: "Lista de Trabajo",
      descripcion: "Tareas laborales a realizar"
    }
  },
  {
    id: 3,
    titulo: "Enviar correos pendientes",
    descripcion: "Responder correos atrasados",
    estado: "completado",
    fecha_creacion: "2024-10-01 00:27:35",
    fecha_modificacion: "2024-10-01 00:27:35",
    id_categoria: 1,
    id_lista: 1,
    categoria: {
      id: 1,
      nombre_categoria: "Trabajo",
      descripcion: "Tareas relacionadas con el trabajo"
    },
    lista: {
      id: 1,
      nombre_lista: "Lista de Trabajo",
      descripcion: "Tareas laborales a realizar"
    }
  },
  {
    id: 4,
    titulo: "Lavar los platos",
    descripcion: "Lavar los platos antes de la cena",
    estado: "pendiente",
    fecha_creacion: "2024-10-01 00:27:35",
    fecha_modificacion: "2024-10-01 00:27:35",
    id_categoria: 2,
    id_lista: 6,
    categoria: {
      id: 2,
      nombre_categoria: "Personal",
      descripcion: "Tareas personales del día a día"
    },
    lista: {
      id: 6,
      nombre_lista: "Lista de Casa",
      descripcion: "Tareas relacionadas con la casa y la familia"
    }
  },
  {
    id: 5,
    titulo: "Ir al supermercado",
    descripcion: "Comprar productos de limpieza",
    estado: "completado",
    fecha_creacion: "2024-10-01 00:27:35",
    fecha_modificacion: "2024-10-01 00:27:35",
    id_categoria: 2,
    id_lista: 5,
    categoria: {
      id: 2,
      nombre_categoria: "Personal",
      descripcion: "Tareas personales del día a día"
    },
    lista: {
      id: 5,
      nombre_lista: "Lista de Compras",
      descripcion: "Compras de supermercado y otros"
    }
  },
  {
    id: 6,
    titulo: "Estudiar AdonisJS",
    descripcion: "Revisar documentación de AdonisJS",
    estado: "pendiente",
    fecha_creacion: "2024-10-01 00:27:35",
    fecha_modificacion: "2024-10-01 00:27:35",
    id_categoria: 3,
    id_lista: 3,
    categoria: {
      id: 3,
      nombre_categoria: "Estudio",
      descripcion: "Tareas relacionadas con los estudios"
    },
    lista: {
      id: 3,
      nombre_lista: "Lista de Estudio",
      descripcion: "Tareas y objetivos de estudio"
    }
  },
  {
    id: 7,
    titulo: "Preparar presentación",
    descripcion: "Diapositivas para la reunión del viernes",
    estado: "en progreso",
    fecha_creacion: "2024-10-01 00:27:35",
    fecha_modificacion: "2024-10-01 00:27:35",
    id_categoria: 1,
    id_lista: 1,
    categoria: {
      id: 1,
      nombre_categoria: "Trabajo",
      descripcion: "Tareas relacionadas con el trabajo"
    },
    lista: {
      id: 1,
      nombre_lista: "Lista de Trabajo",
      descripcion: "Tareas laborales a realizar"
    }
  },
  {
    id: 8,
    titulo: "Salir a correr",
    descripcion: "Correr 5km en el parque",
    estado: "pendiente",
    fecha_creacion: "2024-10-01 00:27:35",
    fecha_modificacion: "2024-10-01 00:27:35",
    id_categoria: 4,
    id_lista: 4,
    categoria: {
      id: 4,
      nombre_categoria: "Salud",
      descripcion: "Tareas relacionadas con la salud y el bienestar"
    },
    lista: {
      id: 4,
      nombre_lista: "Lista de Ejercicio",
      descripcion: "Rutina de ejercicios y bienestar"
    }
  },
  {
    id: 9,
    titulo: "Actualizar base de datos",
    descripcion: "Actualizar la base de datos de empleados",
    estado: "en progreso",
    fecha_creacion: "2024-10-01 00:27:35",
    fecha_modificacion: "2024-10-01 00:27:35",
    id_categoria: 1,
    id_lista: 1,
    categoria: {
      id: 1,
      nombre_categoria: "Trabajo",
      descripcion: "Tareas relacionadas con el trabajo"
    },
    lista: {
      id: 1,
      nombre_lista: "Lista de Trabajo",
      descripcion: "Tareas laborales a realizar"
    }
  }
];


class EjemploController {

  async metodo1({ response }) {
    const rutaArchivo = path.join(__dirname, '../../../resources/views/vista1.hbs'); 
    const plantillaCargada = fs.readFileSync(rutaArchivo, 'utf-8'); 
    const plantillaCompilada = Handlebars.compile(plantillaCargada); 

    const html = plantillaCompilada(json);
    response.send(html); 
  }

}


module.exports = EjemploController
