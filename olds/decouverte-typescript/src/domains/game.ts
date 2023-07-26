import { RequestString, StringDisplay } from "../core/custom-types";
import { Player } from "./player";

/**
 * Classe représentant une partie de jeu
 */
export class Game {
    constructor(private _player: Player, private afficher: StringDisplay, private requestString: RequestString) {}

    /**
     * Initialise la partie
     */
    init(): void {
        const nickNameCharacter = this.requestString('Quel est le nom de ton personnage ?');

        if(nickNameCharacter) {
            this.afficher(nickNameCharacter);
        }
    }

    /**
     * Démarre le jeu
     */
    start(): void {
        this.afficher(`Bienvenue ${this.player.prenom} !`);
    }

    get player(): Player {
        return this._player;
    }
}