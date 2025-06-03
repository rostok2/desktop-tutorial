import React, { useState, useRef, useCallback } from 'react';
import { useTasks } from '../hooks/useTasks';

export default function TaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const inputRef = useRef(null);

  const handleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const trimmed = title.trim();
      if (trimmed) {
        addTask(trimmed);
        setTitle('');
        // Після додавання фокус повертаємо на інпут
        inputRef.current.focus();
      }
    },
    [title, addTask]
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '16px' }}>
      <input
        type="text"
        ref={inputRef}
        value={title}
        onChange={handleChange}
        placeholder="Нове завдання..."
        style={{
          flex: 1,
          padding: '8px 12px',
          fontSize: '1rem',
          borderRadius: '4px 0 0 4px',
          border: '1px solid #ccc'
        }}
      />
      <button
        type="submit"
        disabled={!title.trim()}
        style={{
          padding: '0 16px',
          fontSize: '1rem',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '0 4px 4px 0'
        }}
      >
        Додати
      </button>
    </form>
  );
}
