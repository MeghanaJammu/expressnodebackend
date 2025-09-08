# expressnodebackend

<img width="1919" height="981" alt="image" src="https://github.com/user-attachments/assets/0cf8921e-a80c-4266-82aa-f339a26e1348" />


MyServer Backend API
Overview

This is a Node.js + Express backend for a role-based program management platform. It provides secure REST APIs for user management, programs, and dashboards, with JWT-based authentication and role-based access control. Built with MongoDB and Mongoose for data storage.

Features

  User Authentication

 Login with username & password

 JWT access tokens and refresh tokens (httpOnly cookies)

 Logout and token revocation

 Role-Based Access

 Admin, Editor, and User roles

 Restrict API access based on roles

 Programs Management

 CRUD operations on programs

 Programs linked to specific activists

 Dashboards

 Admin: view all activists and programs

 Editor: add/edit programs

 Activist: view assigned programs

 Secure & Scalable

 Passwords hashed with bcrypt

 Environment-based configuration

 Proper error handling and validation

API Endpoints
Authentication

POST /auth/login – Login with username & password

GET /auth/refresh – Get new access token using refresh token

POST /auth/logout – Logout and clear refresh token

Dashboard

GET /dashboard/activists – List all activists (Admin)

GET /dashboard/activist/:id – Get an activist by ID (Admin)

GET /dashboard/program – Get all programs (Admin)

POST /dashboard/program – Enter a new program (Editor)

GET /dashboard/program/:id – Get program by ID (Admin/Editor)

PUT /dashboard/program/:id – Edit program by ID (Admin/Editor)

DELETE /dashboard/program/:id – Delete program by ID (Admin/Editor)

Note: All endpoints require authentication via JWT and correct roles.

Setup & Deployment

Clone the repository:

git clone [<repo-url>](https://github.com/MeghanaJammu/expressnodebackend/)


Install dependencies:

npm install


Create a .env file with the following variables:

MONGO_URI=<your-mongodb-uri>
ACCESS_TOKEN_SECRET=<your-access-token-secret>
REFRESH_TOKEN_SECRET=<your-refresh-token-secret>


Start the server:

npm start



Technologies Used

Node.js, Express

MongoDB, Mongoose

JWT (jsonwebtoken)

bcrypt (password hashing)

cookie-parser (refresh token handling)

dotenv (environment variables)


Usage

Frontend apps can consume these APIs by logging in first to get an access token, then sending it in the Authorization header for protected routes.

Refresh tokens are stored as httpOnly cookies for secure token renewal.
