import React, { useState, useEffect } from 'react';
import ExpenseService from '../services/ExpenseService';

const Analytics = () => {
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    fetchCategoryWiseAnalytics();
  }, []);

  const fetchCategoryWiseAnalytics = () => {
    ExpenseService.getCategoryWiseAnalytics()
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching analytics:', error);
      });
  };

  return (
    <div>
      <h2>Expense Analytics (Category-wise)</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Total Expense</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categoryData).map(([category, total]) => (
            <tr key={category}>
              <td>{category}</td>
              <td>{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;
