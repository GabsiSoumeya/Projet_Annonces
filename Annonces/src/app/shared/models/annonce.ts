export class Annonce {
    id? : string; 
    nom? : string; 
    categorieId? : string; 
    description? : string; 
    descVisible? : boolean; 
    constructor(args: Annonce = {}) { 
       this.id=args.id; 
       this.nom = args.nom; 
       this.description = args.description; 
       this.descVisible = args.descVisible; 
       this.categorieId = args.categorieId; 
       }
   
   }
   