package com.example.expensemanagementsystem.repository;

import com.example.expensemanagementsystem.model.Expense;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends MongoRepository<Expense, String> {
    // Custom queries can be added here if necessary
    List<Expense> findByCategory(String category);
}
