# Backend Oracle API

REST API built with **Node.js**, **Express** and **Oracle Database**.

## Overview

This project demonstrates a simple backend architecture organized into routes, controllers and models, with OracleDB connectivity.

## Tech Stack

- Node.js
- Express 5
- Oracle Database
- node-oracledb

## Project Structure

```text
controllers/
models/
routes/
db.js
server.js
```

## Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Configure your Oracle database connection in the appropriate local environment/configuration.
4. Start the API:

```bash
node server.js
```

The server runs on port `3000` by default.

## API

The current application exposes user-related routes under:

```text
/usuarios
```

## Notes

Database credentials should never be committed to the repository. Use environment variables for local and production configuration.

---

**Author:** Miguel Martínez
