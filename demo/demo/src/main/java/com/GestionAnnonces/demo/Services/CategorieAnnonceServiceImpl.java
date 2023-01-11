package com.GestionAnnonces.demo.Services;

import com.GestionAnnonces.demo.Repositories.CategorieRepository;
import com.GestionAnnonces.demo.entities.Annonce;
import com.GestionAnnonces.demo.entities.CategorieAnnonce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GestionAnnonces.demo.entities.CategorieAnnonce;

import java.util.List;

@Service
public class CategorieAnnonceServiceImpl implements CategorieAnnonceService{
    @Autowired
    CategorieRepository categorieRepository;
   @Override
   public void createCategorieAnnonce(CategorieAnnonce c){
       this.categorieRepository.save(c);
   }

    @Override
    public List<CategorieAnnonce> findCategorieAnnonces() {
        return categorieRepository.findAll();
    }


    @Override
    public CategorieAnnonce findOneCategorieAnnonce(long id) {
        return this.categorieRepository.findById(id).get();
    }
}
