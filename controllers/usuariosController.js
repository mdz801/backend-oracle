const { getUsuariosPaginado, createUsuario } = require('../models/usuariosModel');

exports.getUsuarios = async (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 100;

  try {
    const usuarios = await getUsuariosPaginado(offset, limit);
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
};

exports.createUsuarioController = async (req, res) => {
  try {
    await createUsuario(req.body); // inserta en Oracle
    res.json({ message: 'Usuario creado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear usuario', error: error.message });
  }
};


const { updateUsuario } = require('../models/usuariosModel');

exports.updateUsuarioController = async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ message: 'ID inválido' });

  try {
    const result = await updateUsuario(id, req.body);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
  }
};
const { deleteUsuario } = require('../models/usuariosModel');

exports.deleteUsuarioController = async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ message: 'ID inválido' });

  try {
    const result = await deleteUsuario(id);
    if (result.code === 404) return res.status(404).json({ message: result.message });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar usuario', error: error.message });
  }
};
const { getUsuarioById: getUsuarioByIdModel } = require('../models/usuariosModel');

exports.getUsuarioById = async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ message: 'ID inválido' });

  try {
    const usuario = await getUsuarioByIdModel(id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener usuario', error: error.message });
  }
};
