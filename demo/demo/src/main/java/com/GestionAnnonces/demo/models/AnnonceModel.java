package com.GestionAnnonces.demo.models;

public class AnnonceModel {
    private long categorieId;
    private String nom;
    private String description;
    boolean descVisible;

    public long getCategorieId() {
        return categorieId;
    }

    public void setCategorieId(long categorieId) {
        this.categorieId = categorieId;
    }

    public String getNom() {
        return nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description){
        this.description = description;
    }

    public boolean getDescVisible() {
        return descVisible;
    }
    public void  setDescVisible(String descVisible){
        descVisible = descVisible;
    }


}
