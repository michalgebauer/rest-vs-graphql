package com.example.restdemo.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.example.restdemo.model.Inventor;
import com.example.restdemo.model.Patent;
import com.example.restdemo.repository.InventorRepository;
import com.example.restdemo.repository.PatentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class InventorResolver implements GraphQLResolver<Inventor> {
    private InventorRepository inventorRepository;
    private PatentRepository patentRepository;

    @Autowired
    public InventorResolver(InventorRepository inventorRepository, PatentRepository patentRepository) {
        this.inventorRepository = inventorRepository;
        this.patentRepository = patentRepository;
    }

    public Inventor getInventor(Inventor inventor) {
        return inventorRepository.findOne(inventor.getId());
    }

    public Iterable<Patent> getPatents(Inventor inventor) {
        return patentRepository.findAllByInventorIdOrderByYearAsc(inventor.getId());
    }
}
