# 🗂️ TaskTrek – Task Management App

A modern **Kanban-style Task Management frontend application** built with **React.js** and **Zustand**.  
This project focuses on **clean architecture**, **scalable state management**, and **interview-ready best practices**.

---

## 🚀 Live Demo

👉 Add your deployed link here (Vercel / Netlify)

---

## 🧠 Why This Project?

This project was first built using **local state and props**, and then **refactored to Zustand** to:

- Eliminate prop drilling
- Centralize business logic
- Make drag-and-drop reliable
- Follow real-world frontend architecture

This makes the project **production-like**, not just tutorial-level.

---

## ✨ Features

- ✅ Add tasks with status and tags
- 🏷️ Tag-based task labeling (HTML, CSS, JavaScript, React)
- 🖱️ Drag & Drop tasks between columns (Todo → Doing → Done)
- 🗑️ Delete tasks
- 💾 Persistent storage using LocalStorage
- 🆔 Unique task IDs (no array index usage)
- ⚡ Lightweight global state management using Zustand
- 🧼 Clean and modular component structure

---

## 🛠️ Tech Stack

- **React.js** (Functional Components & Hooks)
- **Zustand** – Global state management
- **CSS** – Custom styling
- **HTML5 Drag & Drop API**
- **LocalStorage** – Data persistence

---

## 📁 Project Structure

src/
│
├─ store/
│ └─ useTaskStore.js # Zustand global store
│
├─ components/
│ ├─ TaskForm.jsx # Create new tasks
│ ├─ TaskColumn.jsx # Todo / Doing / Done columns
│ ├─ TaskCard.jsx # Individual task card
│ ├─ Tag.jsx # Tag component
│ └─ DropArea.jsx # Drag & drop area
│
├─ App.jsx # Root component

---

## 🧩 State Management Strategy

### 🔹 Local State (`useState`)

Used for **component-specific UI state**:

- Form input handling
- Tag selection
- Drag hover effect

### 🔹 Global State (Zustand)

Used for **shared application state**:

- Tasks list
- Active dragged task ID
- Add / Delete / Move task actions

This separation improves:

- Readability
- Scalability
- Maintainability

---

## 🆔 Why Unique IDs Instead of Array Index?

Each task uses a **unique ID** generated with:

**crypto.randomUUID()**

Benefits:

- Prevents bugs during drag & drop
- Safe deletion without index shifting
- Correct React re-rendering using stable keys
- Industry best practice
