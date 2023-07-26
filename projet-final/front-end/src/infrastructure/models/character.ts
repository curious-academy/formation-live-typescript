/**
 * Liste des races disponibles pour un personnage 
 */
export type ApiResultCharacterRace = 'Human' | 'Elf' | 'Dwarf' | 'Orc' | 'Hobbit' | 'Maiar';

/**
 * Représente le résultat d'une requête vers l'API pour un personnage
 */
export type ApiResultCharacterDetail = {
    _id: string,
    name: string,
    race: ApiResultCharacterRace
}

/**
 * Représente le résultat d'une requête vers l'API pour les personnages
 */
export type CharactersApiResult = {
    docs: ApiResultCharacterDetail[]
}