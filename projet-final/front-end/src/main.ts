import 'materialize-css/dist/css/materialize.min.css';
import { RequestString, StringDisplay } from './core/custom-types';
import { GamePlay } from './domains/models/game-play';

const callBack: StringDisplay = (mess: string) => console.log(mess);
const requestString: RequestString = (mess: string) => prompt(mess);


const gamePlay = new GamePlay(callBack, requestString);

gamePlay.startNewGame();




