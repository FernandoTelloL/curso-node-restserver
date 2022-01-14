require('dotenv').config();

//creo una constante el cual tiene la configuracion de nuestro servidor el cual es la clase Server
const Server = require('./models/server');

//instanciamos server
const server = new Server();

//levantamos el servidor
server.listen();
