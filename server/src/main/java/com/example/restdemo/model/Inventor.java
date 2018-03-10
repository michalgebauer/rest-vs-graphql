package com.example.restdemo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Inventor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String firstname;
    private String lastname;
    private String nationality;
    private int born;
    private int died;
    @OneToMany(mappedBy = "inventor", cascade = CascadeType.ALL)
    private List<Patent> patents;
}
