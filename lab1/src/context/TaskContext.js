import React, {
  createContext,
  useState,
  useEffect,
  useCallback
} from 'react';

// Створюємо Context для завдань
export const TaskContext = createContext();

// Ключ для localStorage
const STORAGE_KEY = 'react-todo-lab1-tasks';

// Провайдер, що містить стан завдань і методи для роботи з ними
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Завантажуємо завдання з localStorage під час першого рендеру
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setTasks(JSON.parse(stored));
      } catch {
        setTasks([]);
      }
    }
  }, []);

  // Синхронізуємо tasks з localStorage при кожній зміні
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Додаємо нове завдання
  const addTask = useCallback((title) => {
    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      completed: false
    };
    setTasks((prev) => [newTask, ...prev]);
  }, []);

  // Оновлюємо текст існуючого завдання
  const editTask = useCallback((id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle.trim() } : task
      )
    );
  }, []);

  // Перемикаємо completed / active
  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // Видаляємо завдання за id
  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  // Значення, яке будемо надавати через Provider
  const value = {
    tasks,
    addTask,
    editTask,
    toggleTask,
    deleteTask
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
