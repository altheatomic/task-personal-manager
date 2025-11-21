import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();

  const linkClass = (to) =>
    pathname === to ? "nav-link nav-link-active" : "nav-link";

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Personal Task Manager</h1>
      <div className="navbar-links">
        <Link to="/tasks" className={linkClass("/tasks")}>
          Tasks
        </Link>
        <Link to="/tasks/new" className={linkClass("/tasks/new")}>
          New Task
        </Link>
      </div>
    </nav>
  );
}
