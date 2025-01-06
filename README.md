 
# Expense Management System

Your Money, Managed Wisely

---

## **Project Overview**
The Expense Management System, also known as **Expense Tracker **, is a web application designed to simplify personal financial management. It helps users track expenses, set budgets, and visualize spending patterns, ensuring better financial planning and decision-making.

---

## **Features**
1. **User-friendly Dashboard**: Centralized platform for tracking expenses.
2. **Interactive Cards**: Display Total Expenses, Savings, and Budget information.
3. **Secure Login and Registration**: User data is protected with robust authentication mechanisms using JWT.
4. **Budget Planning and Analytics**: Tools to set and monitor financial goals.
5. **Responsive Design**: Optimized for use on all devices.
6. **Visual Analytics**: Charts and graphs to analyze spending patterns using Chart.js and Recharts.

---

## **Key Modules**
1. **User Authentication and Registration**:
   - Secure login and registration process with JWT.
2. **Expense Tracking**:
   - Add, edit, and delete expenses with categorization.
3. **Budget Management**:
   - Set monthly budgets and monitor progress.
4. **Savings Overview**:
   - Visualize savings to plan future financial goals.
5. **Notifications**:
   - Receive alerts when budgets are exceeded.
6. **Dashboard**:
   - Get a centralized summary of financial activity.
7. **Analytics & Reporting**:
   - Insights into spending trends and financial health.

---

## **Tech Stack**
- **Frontend**: React.js
- **Backend**: Spring Boot
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Libraries**: Chart.js, Recharts (for analytics and reporting)
- **Styling**: CSS
- **API Requests**: Axios

---

## **System Workflow**
### For Users:
1. **Register/Login**:
   - Securely sign up or log in.
2. **Expense Management**:
   - Add expenses categorized by type.
3. **Budget Tracking**:
   - Set budgets and monitor financial health.
4. **Dashboard**:
   - Access detailed analytics and insights.

### For Admins:
1. **User Management**:
   - Manage user data and expenses.
2. **System Efficiency**:
   - Ensure data security and smooth operation.

---

## **Installation**
### Prerequisites:
Ensure you have the following installed:
- react.js (for the frontend)
- Java JDK (for the backend)
- MongoDB (local or cloud instance)

### Frontend (React.js):
1. Clone the repository:
   ```bash
   git clone (https://github.com/vikasvs2003/infosys_expense.git)
   cd expense
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the React development server:
   ```bash
   npm start
   ```
   This will launch the frontend on `http://localhost:3000`.

### Backend (Java Spring Boot):
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Open the project in your IDE (e.g., IntelliJ IDEA, Eclipse).
3. Build the application:
   ```bash
   mvn clean install
   ```
4. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   This will start the backend server on `http://localhost:8080`.

### MongoDB Setup:
1. Install and start MongoDB (or use a cloud instance like MongoDB Atlas).
2. Ensure your MongoDB server is running on `mongodb://localhost:27017` (or update the connection string in `application.properties` in the backend).

---

## **Usage**
1. **Authentication**:
   - Create a new account via the registration form.
   - Log in using email/password to access your dashboard.
2. **Expense Management**:
   - Add, edit, or delete expenses.
   - Categorize expenses (e.g., food, transport, entertainment).
3. **Budget Management**:
   - Set a budget for each category and track progress.
4. **Reports and Analytics**:
   - View spending trends with visual charts (pie, bar graphs, etc.).

---



---

## **Benefits of the System**
1. **Simplified Financial Tracking**:
   - Effortless categorization and tracking of expenses.
2. **Improved Budget Management**:
   - Realistic budgeting and effective monitoring.
3. **Visual Insights**:
   - Analytics for a clear overview of financial health.
4. **Accessibility**:
   - Fully responsive design ensures usability on all devices.
---

## **Contributing**
We welcome contributions to the Expense Management System! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your fork.
4. Create a pull request describing your changes.

---

## **License**
This project is licensed under the [MIT License](LICENSE).
