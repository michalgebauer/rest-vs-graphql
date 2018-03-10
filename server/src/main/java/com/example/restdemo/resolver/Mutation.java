package com.example.restdemo.resolver;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.example.restdemo.model.Inventor;
import com.example.restdemo.repository.InventorRepository;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {
    private InventorRepository inventorRepository;

    public Mutation(InventorRepository inventorRepository) {
        this.inventorRepository = inventorRepository;
    }

    public Inventor newInventor(String firstname, String lastname, String nationality) {
        Inventor inventor = new Inventor();
        inventor.setFirstname(firstname);
        inventor.setLastname(lastname);
        inventor.setNationality(nationality);
        return inventorRepository.save(inventor);
    }

    public Inventor updateInventor(Long id, String firstname, String lastname, String nationality) {
        Inventor inventor = inventorRepository.findOne(id);
        inventor.setFirstname(firstname);
        inventor.setLastname(lastname);
        inventor.setNationality(nationality);
        return inventorRepository.save(inventor);
    }

    public boolean deleteInventor(Long id) {
        inventorRepository.delete(id);
        return true;
    }
}
