import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListerAnnoncesComponent } from './lister-annonces/lister-annonces.component';
import { DetailsAnnoncesComponent } from './details-annonces/details-annonces.component';
import { AjouterAnnoncesComponent } from './ajouter-annonces/ajouter-annonces.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListerAnnoncesComponent,
    DetailsAnnoncesComponent,
    AjouterAnnoncesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
