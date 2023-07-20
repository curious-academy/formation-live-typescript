import { Nourriture } from "./nourriture";
import { Character } from "./character";

export class Hobbit extends Character {
    manger(nourriture: Nourriture) {
        console.info("Miam miam ! " + nourriture.pointsDeVie + " points de vie !");
    }
}
