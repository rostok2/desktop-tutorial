# React Native Lab7: Gestures (Лабораторна робота №7)

**Мета:**  
Реалізувати приклади взаємодії з жестами:
1. Різні типи touch feedback (TouchableOpacity, TouchableHighlight, Pressable).
2. Прокручуваний контент із pull-to-refresh.
3. Swipeable елементи для видалення.

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
/react-native-lab7
├── package.json
├── app.json
├── App.tsx
├── README.md
├── components
│   └── SwipeableItem.tsx
└── screens
    ├── TouchFeedbackScreen.tsx
    ├── ScrollExampleScreen.tsx
    └── SwipeListScreen.tsx
```

- **TouchFeedbackScreen.tsx** – показ трьох кнопок із різним feedback (TouchableOpacity, TouchableHighlight, Pressable).
- **ScrollExampleScreen.tsx** – вертикальний ScrollView із 12 елементів та pull-to-refresh.
- **SwipeListScreen.tsx** – список елементів SwipeableItem для видалення свайпом.
- **SwipeableItem.tsx** – компонент із горизонтальним ScrollView, що реагує на свайп та викликає onSwipe.
