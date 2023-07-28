import 'materialize-css/dist/css/materialize.min.css';
import { RequestString, StringDisplay } from './core/custom-types';

const callBack: StringDisplay = (mess: string) => console.log(mess);
const requestString: RequestString = (mess: string) => prompt(mess);

// const enemies: Enemy[] = [
//     new Orc('orcccK', 'MECHANT', callBack),
//     new Orc('orcccK', 'MECHANT', (mess: any) => {
//         callBack(mess.toLowerCase());
//     }),
// // ]

// const pseudo = requestString('Quel est ton prénom ?');
// const player = new Player(pseudo);

// const game = new Game(player, callBack, requestString);
// game.init();




