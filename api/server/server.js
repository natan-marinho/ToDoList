const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('../routes/taskRoute');

const app = express();

// Middleware
app.use(bodyParser.json());

// Configuração das rotas
app.use('/api', taskRoutes);

// Configuração do servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
