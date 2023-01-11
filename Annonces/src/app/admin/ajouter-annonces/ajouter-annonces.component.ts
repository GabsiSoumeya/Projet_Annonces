import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnoncesService } from 'src/app/services/annonces.service';
import { Categorie } from 'src/app/shared/models/categorie';


@Component({
  selector: 'app-ajouter-annonces',
  templateUrl: './ajouter-annonces.component.html',
  styleUrls: ['./ajouter-annonces.component.css']
})
export class AjouterAnnoncesComponent implements OnInit {
  
  categories: Categorie[] = [];  
  constructor(private annoncesService: AnnoncesService,private route:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  ajouterAnnonce(nom: string, desc: string, cat:string){
    console.log('cat', cat);
    
    this.annoncesService.ajouterAnnonce(nom,desc, cat).subscribe(data => {
      console.log(data)
    alert('Annonce ajouté');
    this.route.navigate(['admin/liste-des annonces']);
  })
}

getCategories(){
  this.annoncesService.getCategories().subscribe(data => {
     this.categories = data
     console.log('cattt', data);
     console.log('cattt', this.categories);
     
  });
}

}
