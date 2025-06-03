# React Native Navigation Lab (Лабораторна робота №4)

**Мета:**  
Реалізувати багатосторінкову навігацію за допомогою React Navigation (з використанням стекової навігації та табів).

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
/react-native-navigation-lab
├── package.json
├── app.json
├── App.tsx
├── README.md
└── screens
    ├── HomeScreen.tsx
    ├── DetailsScreen.tsx
    └── ProfileScreen.tsx
```

- **package.json** – залежності: Expo, React Navigation, таби, стек.
- **app.json** – конфігурація Expo.
- **App.tsx** – файл із конфігурацією Stack Navigator в табах:
  - **HomeStack** (HomeScreen, DetailsScreen)
  - **ProfileScreen** як окремий таб.
- **screens/HomeScreen.tsx** – з кнопкою, що передає параметри до DetailsScreen.
- **screens/DetailsScreen.tsx** – отримує параметри route.params, показує їх, має кнопки для переходу на Profile та назад.
- **screens/ProfileScreen.tsx** – з кнопкою для повернення на Home.
