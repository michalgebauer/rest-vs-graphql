package com.example.restdemo.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.example.restdemo.model.Inventor;
import com.example.restdemo.model.Patent;
import com.example.restdemo.repository.PatentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PatentResolver implements GraphQLResolver<Patent> {
    PatentRepository patentRepository;

    @Autowired
    public PatentResolver(PatentRepository patentRepository) {
        this.patentRepository = patentRepository;
    }

    public Patent getPatent(Inventor inventor) {
        return this.patentRepository.findOne(inventor.getId());
    }
}
