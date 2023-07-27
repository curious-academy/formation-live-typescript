import { ApiResultCharacterRace } from "./character";

/**
 * Alias de la liste des races disponibles pour un personnage 
 */
export type CharacterRace = ApiResultCharacterRace;

/**
 * DTO représentant un personnage
 */
export interface CharacterDto {
    id: string;
    name: string;
    race: CharacterRace;
}