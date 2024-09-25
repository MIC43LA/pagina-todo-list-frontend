

### `README.md`

# Todo List Dashboard

## Descripción

Este proyecto es una aplicación de gestión de tareas (*Todo List*) con un diseño minimalista. Permite a los usuarios agregar, completar y reabrir tareas. Está construida utilizando Node.js para el backend, Express como framework para la API, y SQL para la gestión de la base de datos.

## Características

- **CRUD de tareas**: Los usuarios pueden crear, leer, actualizar y eliminar tareas.
- **Diseño minimalista**: Una interfaz clara, con colores predominantes en blanco, negro y gris.
- **Gestión de tareas completadas y pendientes**.
- **Detalle visual**: Un pequeño detalle de color para acentuar el diseño.

## Tecnologías

- **Node.js**: Utilizado para la lógica del backend y el servidor.
- **Express**: Framework utilizado para gestionar la API y las rutas del servidor.
- **SQL**: Base de datos relacional utilizada para almacenar y gestionar las tareas.
- **Motor de plantillas**: Se puede utilizar Pug, EJS u otro motor de plantillas para generar las vistas.

## Requisitos previos

- **Node.js**: [Descargar Node.js](https://nodejs.org/)
- **Base de datos SQL**: Cualquier sistema de base de datos SQL (MySQL, PostgreSQL, SQLite, etc.)
- **Gestor de dependencias**: npm o yarn

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/usuario/todo-list-dashboard.git
   ```

2. **Instalar dependencias**:
   En el directorio del proyecto, ejecuta el siguiente comando para instalar las dependencias:
   ```bash
   npm install
   ```

3. **Configurar la base de datos**:
   Crea la base de datos SQL y ajusta la configuración en el archivo `.env`:
   ```bash
   DB_HOST=localhost
   DB_USER=usuario
   DB_PASS=password
   DB_NAME=todo_list
   ```

4. **Correr el servidor**:
   Una vez configurada la base de datos, corre el servidor de Node.js con Express:
   ```bash
   npm start
   ```

5. **Acceder al proyecto**:
   Abre tu navegador y dirígete a `http://localhost:3000` para ver el dashboard.

## API Endpoints

- **GET /tasks**: Obtiene la lista de todas las tareas.
- **POST /tasks**: Crea una nueva tarea.
- **PUT /tasks/:id**: Actualiza una tarea existente (completar/reabrir).
- **DELETE /tasks/:id**: Elimina una tarea.

## Motor de plantillas

Puedes optar por utilizar **Pug**, **EJS** u otro motor de plantillas para renderizar las vistas del frontend. Para instalar Pug, por ejemplo, puedes usar el siguiente comando:

```bash
npm install pug
```

Luego, configúralo en tu archivo `app.js` o en el servidor:

```javascript
app.set('view engine', 'pug');
```

Si prefieres **EJS**, instala con:

```bash
npm install ejs
```

Y configúralo de manera similar:

```javascript
app.set('view engine', 'ejs');
```

## Estructura del Proyecto

```
|-- app.js            # Archivo principal del servidor
|-- /routes           # Rutas del API
|-- /views            # Plantillas de frontend (Pug/EJS)
|-- /public           # Archivos estáticos (CSS, JS)
|-- /models           # Modelos para interactuar con la base de datos
|-- /controllers      # Controladores de las tareas
|-- .env              # Configuración de la base de datos
```


