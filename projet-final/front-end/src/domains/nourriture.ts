export interface Nourriture {
    pointsDeVie: number;
}

export class NourritureElaboree {
    pointsDeVie = 0;
    nom = "";
}

// export class Nourriture {
//     private pv = 0;

//     constructor(pv: number) {
//         this.pointsDeVie = pv;
//     }

//     get pointsDeVie(): number {
//         return this.pv;
//     }

//     set pointsDeVie(value: number) {
//         this.pv = value;
//     }
// }