package com.GestionAnnonces.demo.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;


@Entity
@Table(name= "CategorieAnnonce")
public class CategorieAnnonce implements Serializable {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String categorieAnnonceName;
    @OneToMany(mappedBy="categorieAnnonce")
    Collection<Annonce> annonces = new ArrayList<>();

    public void setCategorieName(String categorieAnnonceName) {
        this.categorieAnnonceName = categorieAnnonceName;
    }

    public String getCategorieAnnonceName() {
        return categorieAnnonceName;
    }
}

