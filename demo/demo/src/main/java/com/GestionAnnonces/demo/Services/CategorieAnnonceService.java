package com.GestionAnnonces.demo.Services;

import com.GestionAnnonces.demo.entities.CategorieAnnonce;

import java.util.List;

public interface CategorieAnnonceService {
    void createCategorieAnnonce(CategorieAnnonce c);
    List<CategorieAnnonce> findCategorieAnnonces();
    CategorieAnnonce findOneCategorieAnnonce(long id);
}
