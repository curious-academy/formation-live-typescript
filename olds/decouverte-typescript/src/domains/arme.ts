export class Arme {
    public puissance = 10;
    public bouclier = 0;
}

export type AvecPuissance = {
    puissance: number
}

/**
 * Afficher la puissance d'un objet de type Arme / ou ressemblant
 * @param arme objet contenant une propriété puissance
 */
export function afficherPuissance(arme: AvecPuissance) {
    console.log(`Puissance : ${arme.puissance}`);
}