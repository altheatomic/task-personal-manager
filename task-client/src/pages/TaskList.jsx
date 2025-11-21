import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks, deleteTask } from "../api/tasks";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState(""); // "", "Doing", "Done"
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const data = await getTasks(statusFilter);
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [statusFilter]);

  const handleDelete = async (id) => {
    if (confirm("Delete this Task?")) {
      await deleteTask(id);
      await load();
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Task List</h2>
        <div className="filter-group">
          <label htmlFor="statusFilter">Filter by the status:</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : tasks.length === 0 ? (
        <p>No task is found.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Due</th>
              <th>Status</th>
              <th>Created date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, index) => (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>{t.title}</td>
                <td>{new Date(t.dueDate).toLocaleDateString()}</td>
                <td>
                  <span
                    className={
                      t.status === "Done"
                        ? "badge badge-done"
                        : "badge badge-doing"
                    }
                  >
                    {t.status}
                  </span>
                </td>
                <td>{new Date(t.createdAt).toLocaleString()}</td>
                <td>
                  <div className="action-buttons">
                    <Link to={`/tasks/${t.id}`} className="btn-icon">
                      <img src={editIcon} alt="Edit" className="icon" />
                    </Link>
                    <button
                      className="btn-icon btn-danger"
                      onClick={() => handleDelete(t.id)}
                    >
                      <img src={deleteIcon} alt="Delete" className="icon" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
