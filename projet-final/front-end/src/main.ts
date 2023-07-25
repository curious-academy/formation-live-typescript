import { RequestString, StringDisplay } from './core/custom-types';
import { Game } from './domains/game';
import { Player } from './domains/player';

import 'materialize-css/dist/css/materialize.min.css';
import { TapTarget, Dropdown } from 'materialize-css';

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
    var instances = TapTarget.init(elems);

    instances[0].open();

    var elems = document.querySelectorAll('.dropdown-trigger');
    var instancesDropDowns = Dropdown.init(elems, {});
  });