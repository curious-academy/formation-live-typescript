import { Hobbit } from './hobbit';
import { Nourriture, NourritureElaboree } from './nourriture';
import { Orc } from './orc';
import { Arme, AvecPuissance, afficherPuissance } from './arme';

let frodon = new Hobbit();
let orc = new Orc();
//frodon = 1;

frodon.manger({ pointsDeVie: 10 });
frodon.manger(new NourritureElaboree());


const maNourriture = { pointsDeVie: 20 };


const arme = new Arme();
const arc: AvecPuissance = {
    puissance: 10
};


afficherPuissance(arme);
afficherPuissance(arc);
afficherPuissance({ puissance: 50 });