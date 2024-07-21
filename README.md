# Full-Stack Web Developer Technical Assessment

## Project Overview

This project is a technical assessment aimed at evaluating proficiency in building a secure, scalable, and user-friendly web application using React and Laravel. The application includes functionalities for user management, file uploads, permissions, access control, folder creation, and download links, with separate admin and employee sides.

## Features Implemented

### User Management (Admin)
- Creation of employee accounts with usernames, passwords, and permission levels.
- Secure storage of user credentials using Laravel's built-in authentication system (Hashing, Salting).
- Generation and management of unique access credentials for employees.

### File and Folder Management
- Employees can upload files with size and type restrictions.
- Server-side validation of file extensions and sizes to prevent security vulnerabilities and storage issues.
- Secure storage of uploaded files using Laravel's file storage system (Storage Facade).
- Organized directory structure for file storage, allowing users to create folders within their designated areas.
- Permissions for both admin and employees to create new folders within the designated storage structure.

## Installation and Setup

### Prerequisites

- PHP = 8.1.2
- Composer
- Node.js and npm
- MySQL

### Backend Setup (Laravel)

1. Clone the repository:
    ```bash
    git clone https://github.com/boularakSaraManel/tech-test-project.git .
    ```

2. Install dependencies:
    ```bash
    composer install
    ```

3. Create a `.env` file and configure your database settings:
    ```bash
    cp .env.example .env
    ```

4. Generate an application key:
    ```bash
    php artisan key:generate
    ```

5. Run migrations:
    ```bash
    php artisan migrate
    ```

6. Start the Laravel development server:
    ```bash
    php artisan serve
    ```

### Frontend Setup (React)

1. Navigate to the frontend directory:
    ```bash
    cd react-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

4. Start the React development server:
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

## Project Structure

### Backend (Laravel)
- `app/Models`: User, File, Folder models
- `app/Http/Controllers`: AuthController, Admin/UserController, FileController, FolderController
- `database/migrations`: Database schema for users, files, folders, add_role_to_users
- `routes/api.php`: API routes

### Frontend (React)
- `src/components/auth2`: Login, Register components
- `src/components/docs_management`: FileUpload, FolderCreation, FolderList components
- `src/App.js`: Main application file with routing

