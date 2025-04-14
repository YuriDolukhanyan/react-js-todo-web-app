# React JS : TODO List WEB App 

This is a simple but powerful React TODO List application that demonstrates a variety of useful React concepts including state management, controlled components, conditional rendering, list filtering, and local storage integration. Built using hooks useState and useEffect.

## Features

- **CRUD Operations** – Create, read, update, and delete todos.
- **Single Edit Mode** – Only one TODO can be edited at a time.
- **Conditional Delete** – Todos can only be deleted when marked as completed. Confirmation prompt on delete.
- **Timestamps** – Each todo has `created` and `modified` timestamps.
- **Tab Filters** – Switch between **All / Completed / Not Completed** tabs.
- **Search Filter** – Filter todos by keyword using a search input.
- **Debounced Search** – Filtering is debounced by 300ms to decrease the query request frequency.
- **React Hooks** – Uses `useState` and `useEffect`.
- **Local Storage Integration** – Save all current todos to localStorage with one click.

## Technologies Used

- React (functional components)
- JavaScript ES6+
- CSS for basic styling

## Components Overview

- `TodoContainer` – All the main methods and resolutions are here.
- `TodoAddSection` – Input and add new todos.
- `TodoItem` – Handles each individual todo, edit/delete/mark done.
- `TodoList` – Lists and filters todos, includes tab logic.
- `TodoCountSection` – Counts number of completed tasks.
- `TodoFilterSection` – Filters todos by keyword (with debounce).
- `TodoSaveSection` – Saves the entire todos list to `localStorage`.
- `StorageService` – Implementation of `getItem` & `setItem` for storing data in the `localStorage`.

## Behavior Notes

- You must **check the checkbox** to mark a todo as completed, which then reveals the delete button.
- The app ensures only one todo can be in **edit mode** at any time.
- The filter/search is case-insensitive and applies on `value` field.
- Local storage save stores all todo info, including created/modified times and completion status.
- Filter input has a 300ms delay for throttling.

## Follow these steps to run the project locally:

1. **Download or clone** this repository from GitHub:
   ```bash
   git clone https://github.com/your-username/react-js-todo-web-app.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd react-js-todo-web-app
   ```

3. **Install dependencies** using npm:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

> Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
