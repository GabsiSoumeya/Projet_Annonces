export class Categorie {
    id? : string; 
    categorieAnnonceName? : string; 
   
    constructor(args: Categorie = {}) { 
       this.id=args.id; 
       this.categorieAnnonceName = args.categorieAnnonceName; 
       }
   
   }
   