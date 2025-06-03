import React, { useCallback } from 'react';

export default function TaskFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { label: 'Усі', value: 'all' },
    { label: 'Активні', value: 'active' },
    { label: 'Виконані', value: 'completed' }
  ];

  const handleClick = useCallback(
    (value) => {
      onFilterChange(value);
    },
    [onFilterChange]
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => handleClick(f.value)}
          disabled={currentFilter === f.value}
          style={{
            margin: '0 4px',
            padding: '6px 12px',
            border: '1px solid #007bff',
            backgroundColor: currentFilter === f.value ? '#007bff' : '#fff',
            color: currentFilter === f.value ? '#fff' : '#007bff',
            borderRadius: '4px',
            fontSize: '0.9rem'
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
