package com.example.restdemo.repository;

import com.example.restdemo.model.Patent;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PatentRepository extends CrudRepository<Patent, Long> {
    public List<Patent> findAllByInventorIdOrderByYearAsc(Long inventorId);
}
