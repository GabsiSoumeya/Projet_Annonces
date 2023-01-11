package com.GestionAnnonces.demo.Repositories;

import jakarta.transaction.Transactional;
import com.GestionAnnonces.demo.entities.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Transactional
public interface AnnonceRepository extends JpaRepository<Annonce, Long> {
    List<Annonce> findAll();
}
