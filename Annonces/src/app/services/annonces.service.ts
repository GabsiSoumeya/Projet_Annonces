import { Annonce } from 'src/app/shared/models/annonce';
import { ANNONCES } from 'src/app/shared/models/des-annonces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { Categorie } from '../shared/models/categorie';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  annonces : Annonce[]=ANNONCES;
  constructor(private http: HttpClient) { }

  getAnnonces () : Annonce[]
  {
      return this.annonces;
  }
  delete(index : number){
    this.annonces.splice(index,1)
  }

ajouterAnnonce(nom:string, desc: string, cat:string): Observable<any>{
  const headers = { 'content-type': 'application/json'}  

  var f:Annonce;
  var id;
  if((this.annonces.length==0))
  id ='1';
  else
  id=Number(this.getAnnonces()[this.getAnnonces().length-1].id)+1;

  f=new Annonce();
 // f.id=id.toString();
  f.description=desc;
  f.nom=nom;
  f.categorieId=cat;
  f.descVisible=true;
  this.getAnnonces()[this.getAnnonces().length]=f;
  const body=JSON.stringify(f);

  console.log('posssssssssssssssst', this.http.post<Annonce>('http://localhost:8080/api/Annonces', body, {'headers':headers})
 )
 return  this.http.post<Annonce>('http://localhost:8080/api/Annonces', body, {'headers':headers})



}
getAnnonceParId(id : number) : Annonce{
  var f: Annonce=new Annonce();
  f=this.getAnnonces()[id];
  return f;
}

getCategories(): Observable<any>{
  return this.http.get("http://localhost:8080/api/categories").pipe(
    catchError((err) => {
      console.error(err);
      throw err;
    }
    )
  )
}
}