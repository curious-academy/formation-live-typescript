import { Player } from "./player";

/**
 * Classe représentant une partie de jeu
 */
export class Game {
    constructor(private _player: Player) {}

    /**
     * Démarre le jeu
     */
    start(): void {
        console.log(`Bienvenue ${this.player.prenom} !`);
    }

    get player(): Player {
        return this._player;
    }
}