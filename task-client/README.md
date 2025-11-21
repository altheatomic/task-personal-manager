# Personal Task Manager

A simple personal task management application with:

- **Backend:** ASP.NET Core Web API (.NET 9) + Entity Framework Core + MySQL
- **Frontend:** React (Vite) + Axios + React Router

Users can:

- Create tasks (task title + due date, status default: **Doing**)
- View the task list
- Update task content + status
- Delete tasks
- Filter tasks by status

---

## 1. Technologies and Versions

### Backend

- .NET SDK: **9.0**
- ASP.NET Core Web API: **9.0.9**
- Entity Framework Core: **9.0.0**
- Pomelo.EntityFrameworkCore.MySql: **9.0.0**

---

### Frontend

- React: **19.2.0**
- React DOM: **19.2.0**
- React Router DOM: **7.9.6**
- Vite: **7.2.4**
- Axios: **1.13.2**

---

## 2. Database Configuration (MySQL)

### 2.1 Create Database and User

```sql
CREATE DATABASE taskdb;
CREATE USER 'task_user'@'localhost' IDENTIFIED BY 'Task123!';
GRANT ALL PRIVILEGES ON taskdb.* TO 'task_user'@'localhost';
FLUSH PRIVILEGES;
```

### 2.2 Check appsettings.json

Make sure your ConnectionStrings matches the Database and User you just created on **your** Server.

---

## 3. Running the Backend

```bash
cd TaskApi
dotnet restore
dotnet run
```

---

## 4. Running the Frontend

```bash
cd task-client
npm install
npm run dev
```

---

## 5. API Endpoints

```
GET /api/tasks                   # Load all the tasks
GET /api/tasks?status=Doing      # Load tasks by status (Doing/Done)
GET /api/tasks/{id}              # Load a task by its id
POST /api/tasks                  # Create task
PUT /api/tasks/{id}              # Update task
DELETE /api/tasks/{id}           # Delete task
```

---

## 6. Author

_Le Tran Kim Oanh - 22127319_
