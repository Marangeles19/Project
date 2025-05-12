import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://98.84.205.127:4800'; // Ajusta según tu backend

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newDescription, setNewDescription] = useState('');

  // Obtener tareas al cargar
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newDescription.trim()) return;

    try {
      await axios.post(`${API_URL}/tasks`, {
        description: newDescription,
        completed: 0 // Por defecto en false (tinyint 0)
      });
      setNewDescription('');
      fetchTasks();
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Lista de Tareas</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginTop: '10px' }}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.description}
            </span>
            {task.completed ? ' ✅' : ' ❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTasks;