import React, { useState, useMemo, useCallback } from 'react';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import { useTasks } from '../hooks/useTasks';

export default function App() {
  const { tasks } = useTasks();

  // Локальний стан фільтра: 'all', 'active', 'completed'
  const [filter, setFilter] = useState('all');

  // Обраховуємо відфільтрований список за допомогою useMemo
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter((t) => !t.completed);
      case 'completed':
        return tasks.filter((t) => t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Обробник зміни фільтра
  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TaskForm />
      <TaskFilter currentFilter={filter} onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}
