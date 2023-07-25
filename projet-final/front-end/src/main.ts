import { RequestString, StringDisplay } from './core/custom-types';
import { Game } from './domains/game';
import { Player } from './domains/player';

const callBack: StringDisplay = (mess: string) => console.log(mess);
const requestString: RequestString = (mess: string) => prompt(mess);

// const enemies: Enemy[] = [
//     new Orc('orcccK', 'MECHANT', callBack),
//     new Orc('orcccK', 'MECHANT', (mess: any) => {
//         callBack(mess.toLowerCase());
//     }),
// ]

const pseudo = requestString('Quel est ton prénom ?');
const player = new Player(pseudo);

const game = new Game(player, callBack, requestString);
game.init();



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = MO.TapTarget.init(elems);

    instances[0].open();
  });