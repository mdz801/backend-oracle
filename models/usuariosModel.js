const oracledb = require('oracledb');
const { getConnection } = require('../db');

// Obtener todos los usuarios (sin paginación)
exports.getAllUsuarios = async () => {
  const conn = await getConnection();
  try {
    const result = await conn.execute('SELECT * FROM USUARIOS', [], {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });
    return result.rows;
  } finally {
    await conn.close();
  }
};

// Obtener usuarios con paginación usando ROWNUM (sin procedimiento almacenado)
exports.getUsuariosPaginado = async (offset = 0, limit = 100) => {
  const conn = await getConnection();
  try {
    const result = await conn.execute(
      `SELECT * FROM (
         SELECT a.*, ROWNUM rnum
         FROM (SELECT * FROM USUARIOS ORDER BY ID) a
         WHERE ROWNUM <= :max
       )
       WHERE rnum > :min`,
      { max: offset + limit, min: offset },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    return result.rows;
  } finally {
    await conn.close();
  }
};
// Buscar usuario por ID
exports.getUsuarioById = async (id) => {
  const conn = await getConnection();
  try {
    const result = await conn.execute(
      `SELECT * FROM USUARIOS WHERE ID = :id`,
      { id },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    if (result.rows.length === 0) return null; // no existe
    return result.rows[0];
  } finally {
    await conn.close();
  }
};
// Crear un usuario
exports.createUsuario = async (usuario) => {
  const conn = await getConnection();
  try {
    await conn.execute(
      `INSERT INTO USUARIOS (NOMBRE, APELLIDO, CORREO, CONTRASENA, ROL)
       VALUES (:nombre, :apellido, :correo, :contrasena, :rol)`,
      {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
          contrasena: usuario.contraseña,
        rol: usuario.rol
      },
      { autoCommit: true }
    );

    return { message: 'Usuario creado correctamente' };
  } finally {
    await conn.close();
  }
};


exports.updateUsuario = async (id, usuario) => {
  const conn = await getConnection();
  try {
    const result = await conn.execute(
      `UPDATE USUARIOS
       SET NOMBRE = :nombre,
           APELLIDO = :apellido,
           CORREO = :correo,
           CONTRASENA = :contrasena,
           ROL = :rol
       WHERE ID = :id`,
      {
        id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        contrasena: usuario.contraseña,
        rol: usuario.rol
      },
      { autoCommit: true }
    );

    if (result.rowsAffected === 0) {
      return { message: `No se encontró usuario con ID ${id}`, code: 404 };
    }

    return { message: 'Usuario actualizado correctamente' };
  } finally {
    await conn.close();
  }
};


// Eliminar usuario por ID
exports.deleteUsuario = async (id) => {
  const conn = await getConnection();
  try {
    const result = await conn.execute(
      `DELETE FROM USUARIOS WHERE ID = :id`,
      { id },
      { autoCommit: true }
    );

    if (result.rowsAffected === 0) {
      return { message: `No se encontró usuario con ID ${id}`, code: 404 };
    }

    return { message: 'Usuario eliminado correctamente' };
  } finally {
    await conn.close();
  }
};
