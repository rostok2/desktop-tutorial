# React Native Lab5 (Лабораторна робота №5)

**Мета:**  
Реалізувати:
1. Рендеринг списків за допомогою FlatList (різні задачі: фільтрація, сортування, pull-to-refresh, lazy load).
2. Використання геолокації та відображення карти з маркерами та полігоном.
3. Збір введених користувачем даних: TextInput, Switch, Picker, DateTimePicker.

---

## Запуск проєкту

1. Склонуйте репозиторій або скачайте файли.
2. У кореневій директорії виконайте:
   ```bash
   npm install
   npm start
   ```
3. Відкрийте Expo Go на вашому пристрої або емуляторі, відскануйте QR-код.

---

## Структура файлів

```
/react-native-lab5
├── package.json
├── app.json
├── App.tsx
├── README.md
└── screens
    ├── ItemListScreen.tsx
    ├── LocationScreen.tsx
    └── UserInputScreen.tsx
```

- **ItemListScreen.tsx** – рендеринг списку елементів з фільтрацією, сортуванням, pull-to-refresh і lazy loading.
- **LocationScreen.tsx** – запит геолокації, відображення карти з маркером користувача, маркером-локацією та полігоном.
- **UserInputScreen.tsx** – форми введення: TextInput для логіна/пароля, Switch для Airplane Mode/Wi-Fi, Picker для вибору розміру, DateTimePicker для вибору дати.
