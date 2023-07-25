import { StringDisplay } from "../core/custom-types";

/**
 * Classe abstraite représentant un personnage
 */
export abstract class Character {
    constructor(private _name: string, protected afficher: StringDisplay) {
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