const connection = require('../config/connection');

// Listar todas as tarefas
const getAllTasks = (req, res) => {
    connection.query('SELECT * FROM task', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao buscar tarefas', error: err });
        }
        res.status(200).json(results);
    });
};

// Criar uma nova tarefa
const createTask = (req, res) => {
    const { title } = req.body;
    connection.query(
        'INSERT INTO task (title) VALUES (?)',
        [title],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao criar tarefa', error: err });
            }
            res.status(201).json({ id: results.insertId, title });
        }
    );
};

// Atualiza uma tarefa
const updateTaskStatus = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    
    connection.query(
        'UPDATE task SET completed = ? WHERE id = ?',
        [completed ? 1 : 0, id],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error updating task', error: err });
            }
            res.status(200).json({ id, completed });
        }
    );
};

// Excluir uma tarefa
const deleteTask = (req, res) => {
    const { id } = req.params;
    connection.query(
        'DELETE FROM task WHERE id = ?',
        [id],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao excluir tarefa', error: err });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: 'Tarefa não encontrada' });
            }
            res.status(204).send();
        }
    );
};

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTaskStatus  
};
