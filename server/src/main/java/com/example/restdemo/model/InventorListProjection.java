package com.example.restdemo.model;

import org.springframework.data.rest.core.config.Projection;

@Projection(name="inventorList", types = {Inventor.class})
public interface InventorListProjection {
    Long getId();
    String getFirstname();
    String getLastname();
    String getNationality();
}
