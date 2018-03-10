package com.example.restdemo.model;

import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="inventorDetail", types = {Inventor.class})
public interface InventorDetailProjection {
    String getFirstname();
    String getLastname();
    String getNationality();
    List<Patent> getPatents();
    Long getBorn();
    Long getDied();
}
