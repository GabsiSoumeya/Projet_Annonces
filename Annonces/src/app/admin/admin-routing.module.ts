import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { AjouterAnnoncesComponent } from './ajouter-annonces/ajouter-annonces.component';
import { DetailsAnnoncesComponent } from './details-annonces/details-annonces.component';
import { ListerAnnoncesComponent } from './lister-annonces/lister-annonces.component';

const routes: Routes = [{ path: '', component: AdminComponent ,

children: [
  {path: 'ajouter-annonces', component: AjouterAnnoncesComponent},
  {path: 'lister-annonces', component: ListerAnnoncesComponent },
  { path: 'details/:id', component: DetailsAnnoncesComponent }
  ] ,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
