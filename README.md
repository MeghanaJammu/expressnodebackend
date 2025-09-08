# expressnodebackend

<img width="1919" height="981" alt="image" src="https://github.com/user-attachments/assets/0cf8921e-a80c-4266-82aa-f339a26e1348" />


## MyServer Backend API
Overview

This is a Node.js + Express backend for a role-based program management platform. It provides secure REST APIs for user management, programs, and dashboards, with JWT-based authentication and role-based access control. Built with MongoDB and Mongoose for data storage.

## Features

 1. User Authentication
 2. Login with username & password
 3.JWT access tokens and refresh tokens (httpOnly cookies)
 4.Logout and token revocation
 5.Role-Based Access
 6.Admin, Editor, and User roles
 7.Restrict API access based on roles
 8.Programs Management
 9.CRUD operations on programs
 10.Programs linked to specific activists

 ## Dashboards

 Admin: view all activists and programs
 Editor: add/edit programs
 Activist: view assigned programs
 Secure & Scalable
 Passwords hashed with bcrypt
 Environment-based configuration
 Proper error handling and validation

# API Endpoints
## Authentication

1. POST /auth/login – Login with username & password
2. GET /auth/refresh – Get new access token using refresh token
3. POST /auth/logout – Logout and clear refresh token

## Dashboard

1. GET /dashboard/activists – List all activists (Admin)
2. GET /dashboard/activist/:id – Get an activist by ID (Admin)
3. GET /dashboard/program – Get all programs (Admin)
4. POST /dashboard/program – Enter a new program (Editor)
5. GET /dashboard/program/:id – Get program by ID (Admin/Editor)
6. PUT /dashboard/program/:id – Edit program by ID (Admin/Editor)
7. DELETE /dashboard/program/:id – Delete program by ID (Admin/Editor)
   
Note: All endpoints require authentication via JWT and correct roles.

# Setup & Deployment

Clone the repository:

git clone [<repo-url>](https://github.com/MeghanaJammu/expressnodebackend/)


  ## Install dependencies:

   `npm install`

 
### Create a .env file with the following variables:

`MONGO_URI=<your-mongodb-uri>\n
ACCESS_TOKEN_SECRET=<your-access-token-secret>\n
REFRESH_TOKEN_SECRET=<your-refresh-token-secret>`


## Start the server:

`npm start`



### Technologies Used

1. Node.js, Express
2. MongoDB, Mongoose
3. JWT (jsonwebtoken)
4. bcrypt (password hashing)
5. cookie-parser (refresh token handling)
6. dotenv (environment variables)


# Usage

Frontend apps can consume these APIs by logging in first to get an access token, then sending it in the Authorization header for protected routes.
Refresh tokens are stored as httpOnly cookies for secure token renewal.
