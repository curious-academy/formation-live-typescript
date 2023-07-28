import { ArrayList, RequestString, StringDisplay, StringOrNull } from '../../core/custom-types';
import { Game, GameList, createGame } from './game';

/**
 * Classe représentant un joueur
 */
export class Player {
    //#region Fields
    private _prenom !: string;
    private gameList: GameList = new ArrayList<Game>();
    //#endregion

    constructor(prenom: StringOrNull) {
        this.prenom = prenom;
    }

    //#region Public methods
    /**
     * Démarre une nouvelle partie de jeu
     * @param displayer  
     * @param requestString  
     */
    public startNewGame(displayer: StringDisplay, requestString: RequestString): void {
        const game = createGame(this.gameList.length + 1, this, displayer, requestString);

        game.init();

        this.gameList.add(game);
    }
    //#endregion

    //#region Properties
    get prenom(): string {
        return this._prenom;
    }

    set prenom(prenom: StringOrNull) {
        if (! prenom) {
            throw new Error('Le prénom est obligatoire');
        }
        this._prenom = prenom;
    }
    //#endregion
}
