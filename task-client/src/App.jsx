import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import TaskList from "./pages/TaskList.jsx";
import TaskForm from "./pages/TaskForm.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
