# 📝 Task Tracker with Calendar Integration and Notifications


---

## 🚀 Tech Stack

### **Backend**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Data Validation**: Zod
- **Rate Limiting**: Prevent DOS attacks

### **Frontend**

- **Frontend**: React
- **UI**: Tailwind CSS
- **HTTP Requests**: Axios
- **Notifications**: React Toastify
- **Routing**: React Router DOM
- **Calendar**: React Calendar

---

## 📦 Installation

To set up and run both the frontend and backend, follow these steps:

### Backend

1. Install dependencies:

    ```bash
    npm install
    ```

2. Set up the database (local or cloud).

3. Start the backend server:

    ```bash
    nodemon index.js
    ```

### Frontend

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the frontend server:

    ```bash
    npm run dev
    ```

---

## 📚 API Routes backend

### 📝 Task Routes

| Method | Route                     | Description                            |
|--------|---------------------------|----------------------------------------|
| GET    | `/api/all`                | Get all tasks                          |
| GET    | `/api/task/:id`           | Get task by ID                         |
| POST   | `/api/new`                | Create new task                        |
| PUT    | `/api/update/:id`         | Update task                            |
| DELETE | `/api/delete/:id`         | Delete task                            |
| GET    | `/api/complete/:id`       | Mark task as completed                 |
| GET    | `/api/overdue`            | Get overdue tasks                      |
| PUT    | `/api/updateDueDate/:id`  | Update task due date                   |

---

### 👨‍💻 Pages & Routes Frontend

| Path                         | Component         | Description                               |
|------------------------------|-------------------|-------------------------------------------|
| `/`                          | Welcome           | Welcome page                              |
| `/alltask`                   | TaskList          | View all tasks                            |
| `/task/new`                  | TaskForm          | Create a new task                         |
| `/task/edit/:id`             | TaskEdit          | Edit an existing task                     |
| `/overdue`                   | NotificationPanel | View due and overdue task alerts          |
| `/calendar`                  | Calendar          | View calendar and select dates            |

---

## ✅ Features

### Backend Features

- Task creation, updating, and deletion
- Mark tasks as completed
- Get overdue tasks
- Rate limiting to prevent DOS attacks
- Data validation using **Zod**

### Frontend Features

- **Add, Edit, and View All Tasks**: Simple CRUD operations for tasks.
- **Calendar View**: Select dates and view tasks for that date.
- **Notifications**: Get alerts for tasks that are due today or overdue.
- **Simple UI**: Built using **Tailwind CSS** for fast styling.
- **Routing**: Navigation handled by **React Router DOM**.
- **Toast Notifications**: Show task reminders using **React Toastify**.

---

## 👨‍💻 Developer

**Ajit Waman**  
Backend Developer | Node.js | Express.js | MongoDB | Zod  
Frontend Developer | React | Tailwind CSS | Axios | React Router DOM

---


