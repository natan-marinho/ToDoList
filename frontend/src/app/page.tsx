'use client'

import React, { useState, useEffect } from 'react';
import { Trash } from "phosphor-react";
import axios from 'axios';
import { Button, ContainerAddNewTask, ContainerListTask, ContainerModal, ContainerPage, Form, Input, StatusTask, Task, TextTask, TitleModal } from "./style";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const HandleCreateNewTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      await axios.post(`${API_BASE_URL}/tasks`, { title: newTask });
      setNewTask('');
      fetchTasks();
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };

  const HandleDeleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  const HandleToggleTaskStatus = async (id, currentStatus) => {
    try {
        await axios.patch(`${API_BASE_URL}/tasks/${id}`, {
            completed: !currentStatus
        });
        fetchTasks();
    } catch (error) {
        console.error('Erro ao atualizar status:', error);
    }
};

  return (
    <ContainerPage>
      <ContainerModal>
        <TitleModal>Minhas Tarefas</TitleModal>
        <ContainerAddNewTask>
          <Form onSubmit={HandleCreateNewTask}>
            <Input 
              type="text" 
              placeholder="Adicionar nova tarefa..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button type="submit">+ Adicionar</Button>
          </Form>
        </ContainerAddNewTask>
        <ContainerListTask>
          {tasks.map((task) => (
            <Task key={task.id}>
              <StatusTask
                checked={task.completed}
                onClick={() => HandleToggleTaskStatus(task.id, task.completed)}
              />
              <TextTask checked={task.completed}>{task.title}</TextTask>
              <Trash onClick={() => HandleDeleteTask(task.id)} size={22} />
            </Task>
          ))}
        </ContainerListTask>
      </ContainerModal>
    </ContainerPage>
  );
}