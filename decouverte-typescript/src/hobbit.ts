import { Nourriture } from "./nourriture";

export class Hobbit {
    manger(nourriture: Nourriture) {
        console.info("Miam miam ! " + nourriture.pointsDeVie + " points de vie !");
    }
}
