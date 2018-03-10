package com.example.restdemo.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Patent {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    @JoinColumn(name = "inventor_id")
    Inventor inventor;
    private String name;
    private int year;
    private String description;
}
