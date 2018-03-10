package com.example.restdemo.resolver;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.restdemo.model.Inventor;
import com.example.restdemo.model.Patent;
import com.example.restdemo.repository.InventorRepository;
import com.example.restdemo.repository.PatentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Query implements GraphQLQueryResolver {
    private InventorRepository inventorRepository;
    private PatentRepository patentRepository;

    @Autowired
    public Query(InventorRepository inventorRepository, PatentRepository patentRepository) {
        this.inventorRepository = inventorRepository;
        this.patentRepository = patentRepository;
    }

    public Inventor inventor(long id) {
        return inventorRepository.findOne(id);
    }

    public Iterable<Inventor> inventors() {
        return inventorRepository.findAll();
    }

    public Patent patent(long id) {
        return patentRepository.findOne(id);
    }

    public Iterable<Patent> patents() {
        return patentRepository.findAll();
    }
}
