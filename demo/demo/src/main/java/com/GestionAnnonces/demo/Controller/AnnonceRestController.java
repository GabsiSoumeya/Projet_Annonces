package com.GestionAnnonces.demo.Controller;

import com.GestionAnnonces.demo.Services.AnnonceService;
import com.GestionAnnonces.demo.Services.CategorieAnnonceService;
import com.GestionAnnonces.demo.entities.Annonce;
import com.GestionAnnonces.demo.models.AnnonceModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(value="*")
public class AnnonceRestController {
    @Autowired
    AnnonceService annonceService;
    @Autowired
    CategorieAnnonceService categorieAnnonceService;
    @PostMapping("/Annonces")
    void createAnnonce(@RequestBody AnnonceModel a){
        Annonce annonce=new Annonce();
        annonce.setNom(a.getNom());
        annonce.setDescription(a.getDescription());
        annonce.setDescVisible(a.getDescVisible());
        annonce.setCategorieAnnonce(this.categorieAnnonceService.findOneCategorieAnnonce(a.getCategorieId()

        ));

        this.annonceService.createAnnonce(annonce);
    }
@GetMapping("/annonces")
    List<Annonce>findAllAnnonces() {
        return this.annonceService.getAnnonces();
}
@GetMapping("/annonces/{id}")
    Annonce getOneAnnonce(@PathVariable long id) {
        return this.annonceService.getOneAnnonce(id);
}
}
