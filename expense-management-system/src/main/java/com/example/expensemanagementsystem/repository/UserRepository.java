package com.example.expensemanagementsystem.repository;

import com.example.expensemanagementsystem.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username); // Find user by username
    Optional<User> findByEmail(String email);       // Find user by email
}
