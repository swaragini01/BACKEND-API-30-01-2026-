Overview

This project focuses on building a scalable and secure Backend Server Architecture for a Blog Application using:

Node.js
Express.js
MongoDB (Mongoose)

The backend is designed using a modular and layered architecture to ensure maintainability, scalability, and separation of concerns.

Backend Project Structure

The project follows a strict layered architecture pattern:

Blog_app_backend/
│
├── APIs/                # Routing Layer (HTTP endpoints)
│   ├── user.api.js      # User registration, login, profile
│   ├── author.api.js    # Author-specific routes
│   └── blog.api.js      # Blog CRUD & comments
│
├── middlewares/         # Middleware Layer
│   ├── bodyParser.js    # Request parsing
│   └── errorHandler.js  # Global error handling
│
├── models/              # Data Layer (Schemas)
│   ├── user.model.js
│   ├── author.model.js
│   └── blog.model.js
│
├── services/            # Business Logic Layer
│   └── auth.service.js  # Authentication & utilities
│
├── .env                 # Environment variables
├── .gitignore           # Ignored files
├── package.json         # Dependencies & configuration
├── req.http             # API testing file
└── server.js            # Application entry point
System Architecture & Workflow

The backend follows a structured request-processing pipeline:

Client (HTTP Request)
        │
        ▼
server.js (Application Entry Point)
        │
        ▼
Middlewares Layer
        │
        ▼
API Routing Layer
        │
        ▼
Services Layer (Business Logic)
        │
        ▼
Models Layer (Mongoose)
        │
        ▼
MongoDB Database
        │
        ▼
JSON Response to Client
Architectural Layers Explanation
1. Application Entry Point (server.js)
Initializes the Express application
Loads environment variables using dotenv
Establishes MongoDB connection using Mongoose
Registers global middleware
2. Models Layer (models/)
Defines database schemas using Mongoose
Ensures data validation and structure

Key Components:

User and Author schemas with constraints (e.g., unique email)
Blog schema with support for nested comments
3. Services Layer (services/)
Implements reusable business logic
Follows DRY (Don't Repeat Yourself) principle

Example:

Authentication service for password handling and token generation
4. Middleware Layer (middlewares/)

Handles request preprocessing and error management:

Parses incoming JSON and URL-encoded data
Centralized error handling to prevent server crashes
Sends consistent JSON error responses
5. API Routing Layer (APIs/)

Defines RESTful endpoints using HTTP methods:

GET → Fetch data
POST → Create data
PUT / PATCH → Update data
DELETE → Remove data
Setup and Initialization Guide
Step 1: Initialize Project
git init
touch .env .gitignore

Add the following to .gitignore:

node_modules/
.env
Step 2: Install Dependencies
npm init -y
npm install express mongoose dotenv

Update package.json:

{
  "type": "module",
  "main": "server.js"
}
Step 3: Run the Server
node server.js
API Testing

You can test endpoints using the req.http file or any HTTP client.

Example: Register User
POST http://localhost:5000/api/users/register
Content-Type: application/json
{
  "name": "Sidhvi",
  "email": "sidhvi@example.com",
  "password": "SecurePassword123"
}
