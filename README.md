# 🔁 LRU Cache in React

A minimal and efficient implementation of an **LRU (Least Recently Used) Cache** using **functional programming** in React. This project demonstrates how to maintain a list of most recently searched items using a combination of `Map`, `useState`, and modern React practices.

## 🚀 Features

- ⚛️ Built using **React Functional Components**
- 🔄 Efficient **LRU Cache** logic using `Map`
- 💾 Stores and retrieves **recently searched items**
- 🎯 Keyboard support: Press **Enter** to search
- 💡 Click on a recent search to load it again
- ✨ Styled with clean, responsive CSS and pastel-colored chips

## 🧠 How It Works

- A user types into the search bar and hits **Enter**
- The term is stored in an LRU cache (limited in size)
- Previously searched terms are shown as clickable chips
- Uses `Map` to maintain order and fast access
- Cache is automatically updated on every search

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Installation

```bash
git clone https://github.com/<your-username>/lru-cache-react.git
cd lru-cache-react
npm install
npm run dev
```

## Live Demo

[React LRU Cache Implementation](https://varun-kelkar.github.io/lru-cache-implementation/)
