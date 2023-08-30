import { Arme, AvecPuissance, afficherPuissance } from '../domains/models/arme';

export function afficherText(test: unknown): void {
    if (typeof test === 'string') {
        console.log(test.toLowerCase());
    } else if (typeof test === 'number') {
        console.log(test.toFixed(2));
    }
}
afficherText('test');
afficherText(1);

const arme = new Arme();
const arc: AvecPuissance = {
    puissance: 10
};

afficherPuissance(arme);
afficherPuissance(arc);
afficherPuissance({ puissance: 50 });

// import { Orc } from '../domains/orc';

// const orc = new Orc('orcccK', 'MECHANT');


// type Nazgul = {
//     nom: string;
//     puissance: number;
//     cou : {
//         longueur: number;
//     }
// };

// type MasterNazGul = Nazgul & {
//     master: string
// }

// const nazgul: MasterNazGul = {
//     cou: { longueur: 10 },
//     master: 'Sauron',
//     nom: 'Nazgul',
//     puissance: 100
// }

// interface Elfe {
//     puissance: number;
//     arme: string;
// }
// interface DarkElfe extends Elfe {
//     couleur: string;
// }


type PersonName = 'Legolas' | 'Gimli' | 'Aragorn';
type OtherDetails = {
    age: number;
    taille: number;
}
type InformationPerson = PersonName | OtherDetails;

type Person = {
    info: InformationPerson;
    infoSecondaire: InformationPerson;
}

const person = {
    info: 'Legolas',
    infoSecondaire: {
        age: 100,
        taille: 1.80
    }
} satisfies Person;

person.info.charAt(0);



// if (typeof person.info === 'string') {
//     console.log(person.info.toUpperCase());
// }