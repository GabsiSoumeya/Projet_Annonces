package com.GestionAnnonces.demo.Repositories;

import com.GestionAnnonces.demo.entities.Annonce;
import com.GestionAnnonces.demo.entities.CategorieAnnonce;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface CategorieRepository  extends JpaRepository<CategorieAnnonce, Long> {
}
