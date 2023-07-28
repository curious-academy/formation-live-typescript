import { RequestString, StringDisplay } from "../../core/custom-types";
import { Player, PlayerOrUndefined } from "./player";

/**
 *  Classe représentant le jeu 
 */
export class GamePlay {
    private player: PlayerOrUndefined;

    constructor(private afficher: StringDisplay, private requestString: RequestString) {}

    //#region Public methods
    /**
     * Crée un nouveau joueur
     */
    createPlayer(): void {
        const prenom = this.requestString('Quel est ton prénom ?');

        if (prenom) {
            this.player = new Player(prenom);
        }
    }

    /**
     * Initialise la partie
     */
    startNewGame(): void {
        if (! this.player) {
            throw new Error('Le joueur doit être défini');
        }
        this.player.startNewGame(this.afficher, this.requestString);
    }
    //#endregion
}