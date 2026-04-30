const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

// Basic Route for testing
app.get('/', (req, res) => {
  res.json({ message: "Bienvenido a la API del Sistema de Cine" });
});

// Example of how endpoints will look
// app.get('/peliculas', async (req, res) => {
//   const peliculas = await db.Pelicula.findAll();
//   res.json(peliculas);
// });

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
