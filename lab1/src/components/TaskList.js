import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#666' }}>
        Немає завдань для відображення
      </p>
    );
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
