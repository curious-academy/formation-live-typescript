import 'materialize-css/dist/css/materialize.min.css';
import { RequestString, StringDisplay } from './core/custom-types';
import { GamePlay } from './domains/models/game-play';
import { CustomElementsLoader } from './learn/views/custom-elements-loader';

const customElementsLoader = new CustomElementsLoader();
customElementsLoader.load();

const callBack: StringDisplay = (mess: string) => console.log(mess);
const requestString: RequestString = (mess: string) => prompt(mess);

const gamePlay = new GamePlay(callBack, requestString);


const buttonInitPlayer = document.getElementById('btnCreatePlayer');
const buttonStartGame = document.getElementById('btnStartGame');

if (buttonInitPlayer) {
    buttonInitPlayer.addEventListener('click', () => {
        gamePlay.createPlayer();
    });
}

if (buttonStartGame) {
    buttonStartGame.addEventListener('click', () => {
        gamePlay.startNewGame();
    });
}




