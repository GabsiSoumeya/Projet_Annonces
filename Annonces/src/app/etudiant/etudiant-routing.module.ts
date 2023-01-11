import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { EtudiantComponent } from './etudiant.component';

const routes: Routes = [{ 
  path: '', component: EtudiantComponent ,
  children: [
    {path: 'apropos', component: AproposComponent },
    {path: 'home-etudiant', component: HomeEtudiantComponent },
    ] ,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
