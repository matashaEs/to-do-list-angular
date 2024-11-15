# ToDo List Aplication with Angular 18, Node.js, MySQL

This project is a Full-Stack ToDo List Application built with Angular 18, Node.js, and MySQL. It provides a sleek, responsive user interface, efficient task management features, and secure user authentication. The backend is powered by Node.js and Express.js, with Sequelize ORM handling database interactions. The application incorporates Angular Material components to deliver a polished and professional look.

## Functionality:
- **User Registration & Authentication:** Secure sign-up and login for users, with JWT-based session management.
- **Password Management:** Users can change their passwords securely.
- **Email Notifications:** Sends email notifications for account confirmation or password reset.
- **Create, Edit, Delete Tasks:** Task management system with the ability to create, modify, or delete tasks.
- **Change Task Status:** Users can update the status of tasks to different stages (e.g., "ToDo," "In Progress," "Done") to track progress effectively.

## Technologies Used:
- **Frontend:** Angular 18, RxJS, Angular Material, TypeScript
- **Styling:** Angular Material
- **Backend:** Node.js, Express.js
- **Database:** MySQL, Sequelize ORM (sequelize-typescript)
- **Authentication:** JWT (JSON Web Token)
- **Email Notifications:** Resend
- **Validation:** Zod (Data validation)

## Installation

1. Clone the repository:
```sh
git clone https://github.com/matashaEs/blog-angular/
```

2. **Frontend:**
```sh
cd blog-angular/frontend
npm install
ng serve
```

3. **Backend:**
```sh
cd blog-angular/backend
npm install
```

4. Create a **.env** file in the **backend/src** folder:
- Add the following environment variables to the **.env** file:
```sh
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306
PORT=3000
JWT_SECRET=secretkey
FRONTEND_URL=http://localhost:4200
```

5. In the **backend/src/database/index.ts** file, change **force: false** to **force: true** for database initialization.

6. To set up Resend:
- Go to [Resend.com](https://resend.com/).
- Sign up and create a team.
- Obtain your API Key.
- Add to the **.env**:
```sh
RESEND_API_KEY=your_api_key
```
 7. Build the backend:
```sh
npm run build
```

8. Run the backend:
 ```sh
npm run dev
```

9. In the **backend/src/database/index.ts** file, change **force: true** to **force: false** to prevent the database from updating after every server start.

## Home page
<img width="1437" alt="Screenshot 2024-11-15 at 17 09 48" src="https://github.com/user-attachments/assets/a042bff4-439c-4f17-bb39-9ac3d55c64e7">

## Update task page
<img width="1410" alt="Screenshot 2024-11-15 at 17 11 23" src="https://github.com/user-attachments/assets/b2870881-f000-44c0-84aa-b14fc9b4c8a7">

## Create task page
<img width="1424" alt="Screenshot 2024-11-15 at 17 12 31" src="https://github.com/user-attachments/assets/1e8740ec-39da-4b4a-8d82-e6befa8016c1">

## Status change selection (Sorted by status)
<img width="1426" alt="Screenshot 2024-11-15 at 17 13 42" src="https://github.com/user-attachments/assets/a1c58a23-b35a-4bc0-93f6-524a74cb4aeb">

## Register page
<img width="1396" alt="Screenshot 2024-11-15 at 17 15 54" src="https://github.com/user-attachments/assets/5db5e338-80ae-4938-8721-fc538823ee48">

## Errors on the Register page
<img width="1226" alt="Screenshot 2024-11-15 at 17 17 24" src="https://github.com/user-attachments/assets/7a1637bc-f936-4917-94ca-7d17bbdd6d4c">

## Login page
<img width="1402" alt="Screenshot 2024-11-15 at 17 19 40" src="https://github.com/user-attachments/assets/d882a9ae-27e1-450d-88e1-96fd29aeaa50">

## Reset password pages
<img width="1343" alt="Screenshot 2024-11-15 at 17 20 04" src="https://github.com/user-attachments/assets/852fe713-a62a-46a2-b7fa-b0378b5b452f">
<img width="1344" alt="Screenshot 2024-11-15 at 17 20 29" src="https://github.com/user-attachments/assets/c1bd9eb2-9bc6-4a8b-b46b-dd2112613a22">
<img width="1369" alt="Screenshot 2024-11-15 at 17 20 45" src="https://github.com/user-attachments/assets/d5548d7c-1344-475e-bafe-e3ed15c61ae4">

