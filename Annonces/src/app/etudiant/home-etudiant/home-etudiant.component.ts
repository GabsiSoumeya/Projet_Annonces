import { Component, OnInit } from '@angular/core';
import { ANNONCES } from 'src/app/shared/models/des-annonces';
import { Annonce } from 'src/app/shared/models/annonce';

@Component({
  selector: 'app-home-etudiant',
  templateUrl: './home-etudiant.component.html',
  styleUrls: ['./home-etudiant.component.css']
})
export class HomeEtudiantComponent implements OnInit {
  tabAnnonces: Annonce[]= ANNONCES;
  constructor() { }

  ngOnInit(): void {
  }
  affiche(f:Annonce){
    f.descVisible=true;
  }

  cacher(f:Annonce){
    f.descVisible=false;
  }

}



