import React, { useState } from 'react';
import ExpenseService from '../services/ExpenseService';

const EditExpenseForm = ({ expense, onClose }) => {
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExpense = {
      ...expense,
      description,
      amount,
      category,
    };

    ExpenseService.updateExpense(expense.id, updatedExpense)
      .then(() => {
        alert('Expense updated successfully!');
        onClose(); // Close the edit form
      })
      .catch((error) => {
        console.error('Error updating expense:', error);
      });
  };

  return (
    <div>
      <h2>Edit Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditExpenseForm;
