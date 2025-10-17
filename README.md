# Bookstore API - RESTful Backend Application

A comprehensive RESTful API for managing a bookstore application with user authentication, book management, and advanced filtering capabilities.

## Features

- **Authentication & Authorization**
  - Secure JWT-based login & signup
- **User Management**
  - Register, login, manage profile
- **Books Management**
  - CRUD operations for books with filtering and search
- **Validation**
  - All request payloads validated using **Zod**
- **Security**
  - Passwords hashed with **bcrypt**
  - JWT token verification middleware
- **Clean Project Structure**
  - Config, Models, Controllers, Routes, Middlewares, Validations, Utils

## Tech Stack

- Node.js + Express.js (Backend Framework)
- MongoDB + Mongoose (Database)
- JWT (Authentication)
- Zod (Validation)
- Middleware-based request handling
- Bcrypt (Password hashing)

## Project Structure

```bash
Bookstore_Application/
├── src/
│   ├── app.js            # Express app setup
│   ├── config/           # DB connection
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   ├── middlewares/      # Auth, error handling, role-based access
│   ├── validations/      # Zod schemas
│   └── utils/            # Helpers (JWT, hashing, responses)
├── .env                  # Environment variables
├── .gitignore
├── package.json
├── README.md
└── server.js             # Entry point
```

## Installation & Setup

1. **Clone the repo**

```bash
git clone https://github.com/AmiteshRanjan24/Bookstore_Application.git
cd Bookstore_Application
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**

- Create a .env file in the root directory and configure it like:

```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

4. **Run the server**

```bash
node server.js
```

## API Routes

### Base URL

```
http://localhost:5000/api
```

### Authentication Routes

| Method | Endpoint           | Description                  | Auth Required |
| ------ | ------------------ | ---------------------------- | ------------- |
| POST   | `/api/auth/signup` | Register a new user          | No            |
| POST   | `/api/auth/login`  | Login user and get JWT token | No            |

### User Management Routes

| Method | Endpoint                     | Description              | Auth Required |
| ------ | ---------------------------- | ------------------------ | ------------- |
| GET    | `/api/users/profile`         | Get current user profile | Yes           |
| PUT    | `/api/users/profile`         | Update user profile      | Yes           |
| DELETE | `/api/users/profile`         | Delete user account      | Yes           |
| PUT    | `/api/users/change-password` | Change user password     | Yes           |

### Books Routes

| Method | Endpoint         | Description               | Auth Required |
| ------ | ---------------- | ------------------------- | ------------- |
| POST   | `/api/books`     | Create a new book         | Yes           |
| GET    | `/api/books`     | Get all books             | Yes           |
| GET    | `/api/books/:id` | Get a specific book by ID | Yes           |
| PUT    | `/api/books/:id` | Update a book by ID       | Yes           |
| DELETE | `/api/books/:id` | Delete a book by ID       | Yes           |

### Query Parameters for Books Filtering

| Query Param | Example                                   | Description                           |
| ----------- | ----------------------------------------- | ------------------------------------- |
| `author`    | `?author=F. Scott Fitzgerald`             | Filter books by author name           |
| `category`  | `?category=Fiction`                       | Filter books by category              |
| `rating`    | `?rating=4.5`                             | Filter books with minimum rating      |
| `search`    | `?search=gatsby`                          | Search books by title (partial match) |
| Combined    | `?category=Fiction&rating=4&search=great` | Multiple filters together             |

### Complete Endpoint Summary

```
POST   /api/auth/signup
POST   /api/auth/login
GET    /api/users/profile
PUT    /api/users/profile
DELETE /api/users/profile
PUT    /api/users/change-password
POST   /api/books
GET    /api/books
GET    /api/books?author=<author_name>
GET    /api/books?category=<category_name>
GET    /api/books?rating=<min_rating>
GET    /api/books?search=<title_keyword>
GET    /api/books/:id
PUT    /api/books/:id
DELETE /api/books/:id
```

## Author

Amitesh Ranjan
