import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

// Хук для зручного доступу до TaskContext
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
