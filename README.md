# React TODO List App 

This is a simple but powerful React TODO List application that demonstrates a variety of useful React concepts including state management, controlled components, conditional rendering, list filtering, and local storage integration.

## Features

- **CRUD Operations** – Create, read, update, and delete todos.
- **Single Edit Mode** – Only one TODO can be edited at a time.
- **Conditional Delete** – Todos can only be deleted when marked as completed.
- **Timestamps** – Each todo has `created` and `modified` timestamps.
- **Tab Filters** – Switch between **All / Completed / Not Completed** tabs.
- **Search Filter** – Filter todos by keyword using a search input.
- ⏱**Debounced Search** – Filtering is debounced by 300ms for smoother UX.
- **React Hooks** – Uses `useState` and `useEffect` extensively.
- **Local Storage Integration** – Save all current todos to localStorage with one click.

## Technologies Used

- React (functional components)
- JavaScript ES6+
- CSS for basic styling

## Components Overview

- `TodoAddSection` – Input and add new todos.
- `TodoItem` – Handles each individual todo, edit/delete/mark done.
- `TodoList` – Lists and filters todos, includes tab logic.
- `SearchBar` – Filters todos by keyword (with debounce).
- `SaveToLocalButton` – Saves the entire todos list to `localStorage`.

## Behavior Notes

- You must **check the checkbox** to mark a todo as completed, which then reveals the delete button.
- The app ensures only one todo can be in **edit mode** at any time.
- The filter/search is case-insensitive and applies on `value` field.
- Local storage save stores all todo info, including created/modified times and completion status.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
