/* clase para configurar el server */

const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    //crear la aplicacion express como propiedad en instancia del servidor
    this.app = express();

    //creamos la variable port en donde se encuentra especificado mi puerto de .env
    this.port = process.env.PORT;

    //configuracion de ruta de api usuarios
    this.usuariosPath = '/api/usuarios';

    //llamamos MIDDLEWARES
    this.middlewares();

    //llamamos a las rutas de aplicacion
    this.routes();
  }

  //configuro MIDDLEWARES
  middlewares() {
    //cors
    this.app.use(cors());

    //Lectura y parseo del body en formato JSON
    this.app.use(express.json());

    // configuro el Directorio público
    this.app.use(express.static('public'));
  }

  //metodo para RUTAS DE APLICACIÓN
  routes() {
    //Configuro la ruta para api/usuarios
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }

  //configuramos el listen de express
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

//exportamos la clase Server para poder usarlo
module.exports = Server;
