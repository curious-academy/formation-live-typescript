import { Nourriture } from "./nourriture";
import { Character } from "./character";

export class Hobbit extends Character {
    manger(nourriture: Nourriture) {
        this.afficher("Miam miam ! " + nourriture.pointsDeVie + " points de vie !");
    }
}
