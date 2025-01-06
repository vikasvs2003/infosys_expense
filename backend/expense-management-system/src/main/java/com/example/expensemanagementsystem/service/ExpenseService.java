package com.example.expensemanagementsystem.service;

import com.example.expensemanagementsystem.model.Expense;
import com.example.expensemanagementsystem.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;

    @Autowired
    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    // Get all expenses
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    // Get expense by ID
    public Optional<Expense> getExpenseById(String id) {
        return expenseRepository.findById(id);
    }

    // Create a new expense
    public Expense createExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    // Update an existing expense
    public Expense updateExpense(String id, Expense expense) {
        if (expenseRepository.existsById(id)) {
            expense.setId(id);
            return expenseRepository.save(expense);
        }
        return null;  // Return null if the expense with the given ID does not exist
    }

    // Delete an expense
    public boolean deleteExpense(String id) {
        if (expenseRepository.existsById(id)) {
            expenseRepository.deleteById(id);
            return true;
        }
        return false; // Return false if the expense with the given ID does not exist
    }

    // Get paginated expenses
    public Page<Expense> getPaginatedExpenses(PageRequest pageRequest) {
        return expenseRepository.findAll(pageRequest);
    }

    // Get expenses filtered by category
    public List<Expense> getExpensesByCategory(String category) {
        return expenseRepository.findByCategory(category);
    }

    // Get category-wise analytics (e.g., total amount spent per category)
    public Map<String, Double> getCategoryWiseAnalytics() {
        List<Expense> expenses = expenseRepository.findAll();

        // Group expenses by category and calculate the sum of amounts per category
        return expenses.stream()
                .collect(Collectors.groupingBy(Expense::getCategory,
                        Collectors.summingDouble(Expense::getAmount)));
    }
}
