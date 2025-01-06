import axios from 'axios';

const API_URL = 'http://localhost:8080/api/expenses';
const BASE_URL = 'http://localhost:8080/expense';
class ExpenseService {
  // Get all expenses
  getAllExpenses() {
    return axios.get(API_URL)
    .then((response) => {
        console.log('Expenses fetched:', response.data);
        return response;
      })
      .catch((error) => {
        console.error('Error fetching expenses:', error);
        throw error;
      });
  }

  // Get an expense by ID
  getExpenseById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  // Create a new expense
  createExpense(expense) {
    return axios.post(API_URL, expense);
  }

  // Update an expense
  updateExpense(id, expense) {
    return axios.put(`${API_URL}/${id}`, expense);
  }

  // Delete an expense
  deleteExpense(id) {
    return axios.delete(`${API_URL}/${id}`);
  }

  getPaginatedExpenses(page, size) {
    return axios.get(`${BASE_URL}/paginated?page=${page}&size=${size}`);
  }
}

export default new ExpenseService();
