package com.example.restdemo.repository;

import com.example.restdemo.model.Inventor;
import org.springframework.data.repository.CrudRepository;

public interface InventorRepository extends CrudRepository<Inventor, Long> {
}
