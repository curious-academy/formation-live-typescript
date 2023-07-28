import { ArrayList, RequestString, StringDisplay } from "../../core/custom-types";
import { Player } from "./player";

/**
 * Classe représentant une liste de parties de jeu 
 */
export type GameList = ArrayList<Game>;

/**
 * Classe représentant une partie de jeu
 */
export class Game {
    constructor(public id: number, private _player: Player, private afficher: StringDisplay, private requestString: RequestString) {}

    //#region Public methods
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
    //#endregion

    //#region Properties
    get player(): Player {
        return this._player;
    }
    //#endregion
}

/**
 * Crée une nouvelle partie de jeu
 * @param id 
 * @param player 
 * @param afficher 
 * @param requestString 
 * @returns 
 */
export function createGame(id: number, player: Player, afficher: StringDisplay, requestString: RequestString): Game {
    return new Game(id, player, afficher, requestString);
}