package com.GestionAnnonces.demo.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
;

@Entity
@Table(name= "Annonce")
public class Annonce implements Serializable {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String description;
    boolean descVisible;

    @ManyToOne
            CategorieAnnonce categorieAnnonce;

    public void setNom(String nom) {
         this.nom=nom;
    }

    public void setDescription(String description) {
         this.description=description;
    }

    public void setDescVisible(boolean descVisible) {
        this.descVisible =descVisible;
    }

    public void setCategorieAnnonce(CategorieAnnonce oneCategorieAnnonce) {
         this.categorieAnnonce =oneCategorieAnnonce;
    }
    //Collection<Annonce> annonces=new ArrayList<>();

    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getDescription() {
        return description;
    }

    public boolean isDescVisible() {
        return descVisible;
    }

    public CategorieAnnonce getCategorieAnnonce() {
        return categorieAnnonce;
    }
}