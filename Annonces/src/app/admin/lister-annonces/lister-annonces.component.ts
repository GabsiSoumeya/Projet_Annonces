import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from 'src/app/services/annonces.service';
import { Annonce} from 'src/app/shared/models/annonce';

@Component({
  selector: 'app-lister-annonces',
  templateUrl: './lister-annonces.component.html',
  styleUrls: ['./lister-annonces.component.css']
})
export class ListerAnnoncesComponent implements OnInit {
  tabAnnonces: Annonce[] = [];
  constructor(private annoncesService : AnnoncesService) { }

  ngOnInit(): void {
    this.tabAnnonces=this.annoncesService.getAnnonces();
  }
  supprimer(id : number){
    this.annoncesService.delete(id);
  }

}
