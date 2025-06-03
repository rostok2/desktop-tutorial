# React To-Do App (Лабораторна робота №1)

**Мета:**  
Побудувати багатофункціональний додаток для управління завданнями на React із використанням Context API, хуків (useState, useEffect, useCallback, useMemo, useRef) і оптимізаціями.

---

## Запуск проєкту

1. Склонуйте репозиторій або скачайте файли.
2. У кореневій директорії виконайте:
   ```bash
   npm install
   npm start
   ```
3. Відкрийте браузер за адресою `http://localhost:3000`.

---

## Структура файлів

```
/project-root
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── App.js
│   │   ├── TaskForm.js
│   │   ├── TaskFilter.js
│   │   ├── TaskList.js
│   │   └── TaskItem.js
│   ├── /context
│   │   └── TaskContext.js
│   ├── /hooks
│   │   └── useTasks.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

- **public/index.html** – базова HTML-розмітка з контейнером `div#root`.
- **src/index.js** – точка входу, обгортає `<App />` у `<TaskProvider>`.
- **src/index.css** – базові стилі для всього проєкту.
- **src/context/TaskContext.js** – контекст для зберігання списку завдань, методів додавання, редагування, видалення й синхронізації з localStorage.
- **src/hooks/useTasks.js** – хук для швидкого доступу до контексту завдань.
- **src/components/App.js** – головний компонент, бере з контексту `tasks`, керує фільтром і рендерить форму, фільтр та список.
- **src/components/TaskForm.js** – форма для додавання нового завдання з використанням `useState`, `useRef`, `useCallback`.
- **src/components/TaskFilter.js** – кнопки-фільтри (`all`, `active`, `completed`), рендеряться динамічно, обробка через `useCallback`.
- **src/components/TaskList.js** – рендерить масив завдань, переданих як проп `tasks`. Якщо завдань немає, показує відповідне повідомлення.
- **src/components/TaskItem.js** – кожне завдання: чекбокс для позначки виконання, можливість подвійного кліку для редагування, кнопка видалення. Використовує `useState`, `useEffect`, `useRef`, `useCallback`.
- **README.md** – інструкції зі структури та запуску.
