require('dotenv').config();
const express = require('express');
const db = require('./config/database');
const clientesRoutes = require('./routes/clientes');
const carrosRoutes = require('./routes/carros');
const aluguelRoutes = require('./routes/aluguel');

const app = express();
const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

app.use(express.json());

app.use('/clientes', clientesRoutes);
app.use('/carros', carrosRoutes);
app.use('/aluguel', aluguelRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
