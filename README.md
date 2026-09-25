# API REST con Oracle

> **Tipo de proyecto:** Proyecto académico / práctica técnica

Proyecto desarrollado para practicar la integración entre **Node.js**, **Express** y **Oracle Database**, aplicando una estructura separada por rutas, controladores y modelos.

## Tecnologías

- Node.js
- Express 5
- Oracle Database
- node-oracledb

## Estructura

```text
controllers/
models/
routes/
db.js
server.js
```

## Ejecución

```bash
npm install
node server.js
```

El servidor utiliza el puerto `3000` por defecto.

## API

Actualmente incluye rutas relacionadas con usuarios bajo:

```text
/usuarios
```

## Nota

Este repositorio fue realizado con fines de aprendizaje y no corresponde a un sistema utilizado en producción.

Las credenciales de base de datos deben configurarse mediante variables de entorno y nunca incluirse directamente en el repositorio.

---

**Autor:** Miguel Martínez
