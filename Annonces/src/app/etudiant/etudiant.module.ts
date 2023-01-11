import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { AproposComponent } from './apropos/apropos.component';


@NgModule({
  declarations: [
    EtudiantComponent,
    HomeEtudiantComponent,
    AproposComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
