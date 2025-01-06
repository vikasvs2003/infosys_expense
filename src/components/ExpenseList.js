import React, { useState, useEffect } from 'react';
import ExpenseService from '../services/ExpenseService';
import EditExpenseForm from './EditExpenseForm';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null); // For editing
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filterCategory, setFilterCategory] = useState(''); // For category filter

  // Fetch paginated expenses whenever the currentPage or filterCategory changes
  useEffect(() => {
    fetchExpenses(currentPage, filterCategory);
  }, [currentPage, filterCategory]);

  const fetchExpenses = (page, category) => {
    if (category) {
      // If a category is selected, fetch filtered expenses
      ExpenseService.getFilteredExpenses(category, page, 5) // Assuming the backend supports filtered pagination
        .then((response) => {
          setExpenses(response.data.content); // Paginated filtered content
          setTotalPages(response.data.totalPages);
        })
        .catch((error) => {
          console.error('Error fetching filtered expenses:', error);
        });
    } else {
      // If no filter, fetch all expenses paginated
      ExpenseService.getPaginatedExpenses(page, 5) // Assuming the backend supports pagination
        .then((response) => {
          setExpenses(response.data.content); // Paginated content
          setTotalPages(response.data.totalPages);
        })
        .catch((error) => {
          console.error('Error fetching paginated expenses:', error);
        });
    }
  };

  // Handle delete
  const handleDelete = (id) => {
    ExpenseService.deleteExpense(id)
      .then(() => {
        alert('Expense deleted successfully!');
        fetchExpenses(currentPage, filterCategory); // Refresh the current page with filter
      })
      .catch((error) => {
        console.error('Error deleting expense:', error);
      });
  };

  // Handle edit button click
  const handleEdit = (expense) => {
    setEditExpense(expense);
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  // Pagination controls
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Expense List (Paginated)</h2>
      
      {/* Filter by Category */}
      <div>
        <label>Filter by Category: </label>
        <select value={filterCategory} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Expense List Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={() => handleEdit(expense)}>Edit</button>
                <button onClick={() => handleDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div>
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>

      {/* Edit Expense Form */}
      {editExpense && (
        <EditExpenseForm
          expense={editExpense}
          onClose={() => {
            setEditExpense(null);
            fetchExpenses(currentPage, filterCategory); // Refresh after editing
          }}
        />
      )}
    </div>
  );
};

export default ExpenseList;
