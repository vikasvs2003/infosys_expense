package com.example.expensemanagementsystem.controller;

import com.example.expensemanagementsystem.model.Expense;
import com.example.expensemanagementsystem.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
public class ExpenseController {

    private final ExpenseService expenseService;

    @Autowired
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    // Fetch all expenses
    @GetMapping
    public ResponseEntity<List<Expense>> getAllExpenses() {
        List<Expense> expenses = expenseService.getAllExpenses();
        return expenses.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(expenses);
    }

    // Fetch expense by ID
    @GetMapping("/{id}")
    public ResponseEntity<Expense> getExpenseById(@PathVariable String id) {
        Optional<Expense> expense = expenseService.getExpenseById(id);
        return expense.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Create a new expense
    @PostMapping
    public ResponseEntity<Expense> createExpense(@RequestBody Expense expense) {
        Expense createdExpense = expenseService.createExpense(expense);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdExpense);
    }

    // Update an existing expense
    @PutMapping("/{id}")
    public ResponseEntity<Expense> updateExpense(@PathVariable String id, @RequestBody Expense expense) {
        Expense updatedExpense = expenseService.updateExpense(id, expense);
        return updatedExpense != null ? ResponseEntity.ok(updatedExpense)
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    // Delete an expense by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExpense(@PathVariable String id) {
        boolean isDeleted = expenseService.deleteExpense(id);
        return isDeleted ? ResponseEntity.noContent().build()
                : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    // Fetch paginated list of expenses
    @GetMapping("/paginated")
    public ResponseEntity<Page<Expense>> getPaginatedExpenses(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        Page<Expense> expensesPage = expenseService.getPaginatedExpenses(PageRequest.of(page, size));
        return ResponseEntity.ok(expensesPage);
    }

    // Fetch expenses by category
    @GetMapping("/filter")
    public ResponseEntity<List<Expense>> getExpensesByCategory(@RequestParam String category) {
        List<Expense> expenses = expenseService.getExpensesByCategory(category);
        return expenses.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(expenses);
    }

    // Fetch category-wise analytics
    @GetMapping("/analytics")
    public ResponseEntity<Map<String, Double>> getCategoryWiseAnalytics() {
        Map<String, Double> analytics = expenseService.getCategoryWiseAnalytics();
        return analytics.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(analytics);
    }
}
