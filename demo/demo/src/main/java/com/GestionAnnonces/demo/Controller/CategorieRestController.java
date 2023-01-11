package com.GestionAnnonces.demo.Controller;


import com.GestionAnnonces.demo.Services.CategorieAnnonceService;
import com.GestionAnnonces.demo.entities.CategorieAnnonce;
import com.GestionAnnonces.demo.models.CategorieModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(value="*")

public class CategorieRestController {
    @Autowired
    CategorieAnnonceService categorieAnnonceService;
    @PostMapping("/categories")
    void createCategorie(@RequestBody CategorieModel model){
        CategorieAnnonce categorieAnnonce = new CategorieAnnonce();
        categorieAnnonce.setCategorieName(model.getCategorieName());
        this.categorieAnnonceService.createCategorieAnnonce(categorieAnnonce);
    }

    @GetMapping ("/categories")
    List<CategorieAnnonce> Categories(){
        return this.categorieAnnonceService.findCategorieAnnonces();
    }
    @GetMapping("/categories/{id}")
    CategorieAnnonce getOneCategorie(@PathVariable long id){
        return this.categorieAnnonceService.findOneCategorieAnnonce(id);
    }
}
