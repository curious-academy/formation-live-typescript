import { StringDisplay } from "../../core/custom-types";
import { Character } from "./character";
import { Life } from "./life";
/**
 * Classe abstraite représentant un ennemi
 */
export abstract class Enemy extends Character {
    constructor(name: string, life: Life, afficher: StringDisplay) {
        super(name, { points: 100 }, afficher);
    }
}