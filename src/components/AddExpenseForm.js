import React, { useState } from 'react';
import ExpenseService from '../services/ExpenseService';

const AddExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      description,
      amount,
      category,
    };

    ExpenseService.createExpense(newExpense)
      .then((response) => {
        alert('Expense added successfully!');
        setDescription('');
        setAmount('');
        setCategory('');
      })
      .catch((error) => {
        console.error('There was an error adding the expense!', error);
      });
  };

  return (
    <div>
      <h2>Add New Expense</h2>
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
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
