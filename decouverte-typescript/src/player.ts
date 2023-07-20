import { StringOrNull } from './custom-types';

/**
 * Classe représentant un joueur
 */
export class Player {
    private _prenom !: string;

    constructor(prenom: StringOrNull) {
        this.prenom = prenom;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(prenom: StringOrNull) {
        if (! prenom) {
            throw new Error('Le prénom est obligatoire');
        }
        this._prenom = prenom;
    }
}
