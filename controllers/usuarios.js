const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

  const {nombre, apellido, edad} = req.query;

  res.json({
    msg: 'get API - controlador',
    nombre,
    apellido,
    edad
  });
}

const usuariosPost = (req, res = response) => {
  const body = req.body
  res.json({
    msg: 'post API - controlador',
    body
  });
}

const usuariosPut = (req, res = response) => {

  const { id } = req.params;

  res.json({
    msg: 'put API - controlador',
    id
  });
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controlador'
  });
}


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
}