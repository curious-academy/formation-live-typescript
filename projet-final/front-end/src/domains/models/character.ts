import { StringDisplay } from "../../core/custom-types";
import { Life } from "./life";

/**
 * Classe abstraite représentant un personnage
 */
export abstract class Character {
    constructor(private _name: string, private life: Life, protected afficher: StringDisplay) {
    }

    attack(character: Character): void {
        this.afficher(`${this.name} attaque ${character.name}`);
        
        this.life.points -= 10;
    }

    //#region Properties
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        if (! name) {
            throw new Error('Le nom est obligatoire');
        }
        this._name = name;
    }
    //#endregion
}