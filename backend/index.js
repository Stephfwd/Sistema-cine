require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

// Basic Route for testing
app.get('/', (req, res) => {
  res.json({ message: "Bienvenido a la API del Sistema de Cine" });
});

// Routes
app.use('/cines', require('./Routes/CineRoute'));
app.use('/peliculas', require('./Routes/PeliculaRoute'));
app.use('/salas', require('./Routes/SalaRoute'));
app.use('/funciones', require('./Routes/FuncionRoute'));
app.use('/entradas', require('./Routes/EntradaRoute'));
app.use('/asientos', require('./Routes/AsientoRoute'));
app.use('/carteleras', require('./Routes/CarteleraRoute'));
app.use('/tiposalas', require('./Routes/TipoSalaRoute'));

const PORT = process.env.PORT || 3000;

// Sync database and start server
db.sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
