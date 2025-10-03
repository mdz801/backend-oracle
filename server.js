const express = require('express');
const { getConnection } = require('./db');
const app = express();
app.use(express.json());

//importar rutas

app.use('/usuarios', require('./routes/usuarios'));
const port = 3000;
app.listen(port, () => { console.log(`Server running on port ${port}`); });