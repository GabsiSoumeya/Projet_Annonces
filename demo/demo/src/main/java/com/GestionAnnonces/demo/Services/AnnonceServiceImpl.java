package com.GestionAnnonces.demo.Services;

import com.GestionAnnonces.demo.entities.Annonce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GestionAnnonces.demo.entities.Annonce;
import com.GestionAnnonces.demo.Repositories.AnnonceRepository;

import java.util.List;

@Service
public class AnnonceServiceImpl implements AnnonceService {
    @Autowired
    AnnonceRepository annonceRepository;
    @Override
    public  void  createAnnonce(Annonce a){
        this.annonceRepository.save(a);
    }

    @Override
    public List<Annonce> getAnnonces (){
        return this.annonceRepository.findAll();
    }

    @Override
    public Annonce getOneAnnonce(long id) {
        return this.annonceRepository.findById(id).get();

    }

    }

