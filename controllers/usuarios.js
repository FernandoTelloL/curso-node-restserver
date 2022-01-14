// esto hago para que visual studio me reconozca res como el response de express en javascript
const { response, request } = require('express');

//Controlador USUARIOS GET
const usuariosGet = (req = request, res = response) => {
  //configurando los parametros OPCIONALES QUE PODRIAN IR EN LA RUTA DEL GET, para esto uso los params llamados QUERY, podría obtener todos los datos del query pero solo quiero algunos asi que voy a desestructurar
  const { q, nombre = 'No name', apikey, page = 1, limit = 10 } = req.query;

  res.json({
    msg: 'get api - controlador',
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

//Controlador USUARIOS POST
const usuariosPost = (req = request, res = response) => {
  //obtengo los datos de POST que mande el usuario en formato json, unicamente me interesa en este caso la propiedad nombre y edad es por eso que desestructuro
  const { nombre, edad } = req.body;

  //muestro los datos en formato json
  res.json({
    msg: 'post api - controlador',
    nombre,
    edad,
  });
};

//Controlador USUARIOS PUT
const usuariosPut = (req, res = response) => {
  //creamos la constante con el id del usuario que queremos actualizar, en este caso en la ruta de usuarioPut yo configure mi variable con nombre :id en la ruta
  //1 forma de hacerlo
  // const id = req.params.id;

  //2 forma de hacerlo con desestructuración
  const { id } = req.params;

  res.json({
    msg: 'put api - usuariosPut',
    id,
  });
};

//Controlador USUARIOS PATCH
const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch api - controlador',
  });
};

//Controlador USUARIOS DELETE
const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete api - controlador',
  });
};

//exportamos nuestras funciones controladoras
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
