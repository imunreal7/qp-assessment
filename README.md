# 🛒 Grocery Inventory Management System - API

Welcome to the **Grocery Inventory Management System** repository! This project provides APIs for **Admin** and **User** functionalities such as managing groceries, viewing available items, and booking items.

---

## 📚 **Table of Contents**

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [API Endpoints](#api-endpoints)
6. [Docker](#docker)
7. [Contribution Guidelines](#contribution-guidelines)
8. [License](#license)

---

## 🚀 **Overview**

This application allows **Admins** to manage grocery items (add, remove, edit, and view items) and **Users** to view available grocery items and book them through orders.

---

## 🛠️ **Features**

### **Admin Responsibilities**

-   Add new grocery items to the system.
-   View, update, and remove grocery items.
-   Manage inventory levels of grocery items.

### **User Responsibilities**

-   View the list of available grocery items.
-   Book multiple grocery items in a single order.

---

## 💻 **Technologies Used**

-   **Node.js & TypeScript** for server-side logic.
-   **Sequelize ORM** for database management.
-   **SQLite** as the database for simplicity.
-   **Docker** for containerizing the application.
-   **Express.js** as the web framework.

---

## 🛠️ **Setup Instructions**

Follow these steps to set up the project locally.

---

### 1️⃣ **Clone the Repository**

git clone <https://github.com/imunreal7/qp-assessment.git>
cd qp-assessment
2️⃣ Install Dependencies
Run the following to install required dependencies:

bash
Copy code
npm install
3️⃣ Setup the Database
The database is SQLite-based and will initialize automatically on server startup. No additional configuration is necessary.

4️⃣ Start the Application
bash
Copy code
npm start
The server will run at <http://localhost:3000>.

🐳 Docker

1. Build the Docker Image
   bash
   Copy code
   docker-compose build
2. Start the Application
   bash
   Copy code
   docker-compose up
   This will:

Start the application server.
Map port 3000 from the container to your local machine. 3. Stop the Application
bash

