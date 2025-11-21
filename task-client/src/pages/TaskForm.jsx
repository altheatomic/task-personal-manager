import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTask, createTask, updateTask } from "../api/tasks";

export default function TaskForm() {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();
  const todayStr = new Date().toISOString().slice(0, 10);

  const [form, setForm] = useState({
    title: "",
    dueDate: "",
    status: "Doing",
  });

  useEffect(() => {
    if (isEdit) {
      getTask(id).then((data) => {
        setForm({
          title: data.title,
          dueDate: data.dueDate.slice(0, 10), // yyyy-MM-dd
          status: data.status,
        });
      });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Please enter a title");
      return;
    }

    if (!form.dueDate) {
      alert("Please select a due date");
      return;
    }

    if (form.dueDate < todayStr) {
      alert("The start date must before the due date.");
      return;
    }

    if (isEdit) {
      await updateTask(id, {
        title: form.title,
        dueDate: form.dueDate,
        status: form.status,
      });
    } else {
      await createTask({
        title: form.title,
        dueDate: form.dueDate,
      });
    }

    navigate("/tasks");
  };

  return (
    <div className="card">
      <h2>{isEdit ? "Edit Task" : "Add new Task"}</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter the Task title..."
          />
        </div>

        <div className="form-group">
          <label>Due date</label>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
            min={todayStr}
          />
        </div>

        {isEdit && (
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => navigate("/tasks")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
