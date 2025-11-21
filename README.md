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

<img width="2879" height="1725" alt="image" src="https://github.com/user-attachments/assets/6e93da33-282a-4553-bafd-79c9e5fba36b" />

<img width="2876" height="1717" alt="image" src="https://github.com/user-attachments/assets/d9403e75-f7bc-4375-b517-e8d42b597895" />

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

## 3. Run the project 

### 3.1 Backend

```bash
cd TaskApi
dotnet restore
dotnet run
```

### 3.2 Frontend

```bash
cd task-client
npm install
npm run dev
```

## 4. API Endpoints

```
GET /api/tasks                   # Load all the tasks
GET /api/tasks?status=Doing      # Load tasks by status (Doing/Done)
GET /api/tasks/{id}              # Load a task by its id
POST /api/tasks                  # Create task
PUT /api/tasks/{id}              # Update task
DELETE /api/tasks/{id}           # Delete task
```
<img width="2872" height="1718" alt="image" src="https://github.com/user-attachments/assets/30b334ea-c334-416c-91e2-f4f60e17577b" />

## 5. Test with Postman

First I load all the list:

<img width="2873" height="1795" alt="image" src="https://github.com/user-attachments/assets/0f2856c4-a4a4-4575-8b90-0f0c26a2953c" />


I add a new task:

<img width="2879" height="1799" alt="image" src="https://github.com/user-attachments/assets/502a4cd3-8bf4-4e74-acda-c894e2d285c4" />


Then I update that task's title:

<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/9af188ac-88e2-4e16-bdeb-6ddae8220ed1" />


I load that task to see if its title has changed (the id on the url is the id of the above task):

<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/e2df67de-1158-48ca-a003-44bda2086dc1" />


Finally, I delete that task:

<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/f712626f-1990-4490-adad-df585491c478" />


---

## 6. Author

_Le Tran Kim Oanh - 22127319_
