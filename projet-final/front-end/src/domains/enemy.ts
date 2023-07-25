import { StringDisplay } from "../core/custom-types";
import { Character } from "./character";
/**
 * Classe abstraite représentant un ennemi
 */
export abstract class Enemy extends Character {
    constructor(name: string,afficher: StringDisplay) {
        super(name, afficher);
    }
}