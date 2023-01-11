import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnoncesService } from 'src/app/services/annonces.service';


@Component({
  selector: 'app-details-annonces',
  templateUrl: './details-annonces.component.html',
  styleUrls: ['./details-annonces.component.css']
})
export class DetailsAnnoncesComponent implements OnInit {
  nomAnnonce: string='';
  descAnnonce: string ='';
  constructor(private route:ActivatedRoute, private annonceService:AnnoncesService) { }

  ngOnInit(): void {
    const id =this.route.snapshot.params['id']-1;
  this.nomAnnonce = this.annonceService.getAnnonceParId(+id).nom+this.nomAnnonce;
  this.descAnnonce = this.annonceService.getAnnonceParId(+id).description+this.descAnnonce;

  }

}
