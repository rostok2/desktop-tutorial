import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTasks } from '../hooks/useTasks';

export default function TaskItem({ task }) {
  const { editTask, toggleTask, deleteTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(task.title);
  const inputRef = useRef(null);

  // При активації режиму редагування — ставимо фокус на інпут
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [toggleTask, task.id]);

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
  }, [deleteTask, task.id]);

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  const cancelEditing = useCallback(() => {
    setIsEditing(false);
    setDraftTitle(task.title);
  }, [task.title]);

  const handleChange = useCallback((e) => {
    setDraftTitle(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const trimmed = draftTitle.trim();
      if (trimmed && trimmed !== task.title) {
        editTask(task.id, trimmed);
      }
      setIsEditing(false);
    },
    [draftTitle, editTask, task.id, task.title]
  );

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #eee'
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        style={{ marginRight: '12px' }}
      />

      {isEditing ? (
        <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex' }}>
          <input
            type="text"
            ref={inputRef}
            value={draftTitle}
            onChange={handleChange}
            onBlur={cancelEditing}
            style={{
              flex: 1,
              padding: '4px 8px',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </form>
      ) : (
        <span
          onDoubleClick={startEditing}
          style={{
            flex: 1,
            fontSize: '1rem',
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? '#999' : '#333',
            cursor: 'text'
          }}
        >
          {task.title}
        </span>
      )}

      <button
        onClick={handleDelete}
        style={{
          marginLeft: '12px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#dc3545',
          fontSize: '1rem'
        }}
        aria-label="Delete task"
        title="Видалити"
      >
        &#10006;
      </button>
    </li>
