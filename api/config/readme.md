// DATABASE SCHEMA

CREATE DATABASE ToDoList;
USE ToDoList;

CREATE TABLE task (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único para cada tarefa
    title VARCHAR(255) NOT NULL,       -- Nome ou título da tarefa
    completed BOOLEAN DEFAULT FALSE    -- Estado da tarefa: concluída ou não
);

