/*
 * configuro las rutas de usuario
 */

//desestructuro express obteniendo Router
const { Router } = require('express');

const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} = require('../controllers/usuarios');

//llamo a la funcion router
const router = Router();

router.get('/', usuariosGet);

//ojo.. los dos puntos y la variable que le sigue es el nombre que le quiero dar a ese parametro
router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

// exporto toda la configuracion de router
module.exports = router;
