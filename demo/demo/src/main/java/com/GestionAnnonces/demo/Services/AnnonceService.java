package com.GestionAnnonces.demo.Services;
import java.util.List;
import com.GestionAnnonces.demo.entities.Annonce;

public interface AnnonceService {
    void createAnnonce(Annonce a);
    List<Annonce> getAnnonces();
    Annonce getOneAnnonce(long id);

}
