const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Rotas para gerenciar tarefas
router.get('/tasks', taskController.getAllTasks);   // Lista todas as tarefas
router.post('/tasks', taskController.createTask);   // Cria uma nova tarefa
router.patch('/tasks/:id', taskController.updateTaskStatus); // Atualiza uma tarefa
router.delete('/tasks/:id', taskController.deleteTask); // Exclui uma tarefa


module.exports = router;
