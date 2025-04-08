# Receipt Reimbursement App

This project is a simple web application that allows university employees to submit receipts for reimbursement. It consists of a frontend built with Angular and a backend API built with .NET.



## Prerequisites

- .NET SDK (latest version)
- Node.js (latest version)
- Angular CLI (latest version)

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Restore the NuGet packages:
   ```
   dotnet restore
   ```

3. Update the connection string in `appsettings.json` to point to your database.

4. Run the backend API:
   ```
   dotnet run
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the required npm packages:
   ```
   npm install
   ```

3. Run the Angular application:
   ```
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200` to access the application.

## Usage

- Employees can fill out the receipt submission form by entering the date, amount, description, and uploading a receipt file.
- Upon submission, the data will be sent to the backend API for processing and storage in the database.

## Estimated Time

- Estimated hours: 4 hours
- Actual hours: 5

## Tech Stack Justification

The choice of Angular for the frontend allows for a dynamic and responsive user interface, while .NET provides a robust backend framework with excellent support for RESTful APIs. SQLite is chosen for the database due to its simplicity and ease of setup for this minimal application.

## Assumptions

- The application is intended for internal use by university employees only.
- Basic validation is implemented for the form fields.

## Highlights

- The application follows a clean architecture with separation of concerns between the frontend and backend.
- The use of Angular services for API calls promotes reusability and maintainability.

Feel free to explore the code and contribute to the project!
