import { StringDisplay } from "../core/custom-types";
import { Character } from "./character";
import { Mechancete } from "./mechancete";

/**
 * Classe abstraite représentant un ennemi
 */
export abstract class Enemy extends Character {
    constructor(name: string, private mechancete: Mechancete = 'MECHANT', afficher: StringDisplay) {
        super(name, afficher);
    }
}