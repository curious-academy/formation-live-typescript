import { GetResultFromApi } from "./core";
import { CharactersApiResult } from "./models/character";
import { CharacterDto } from "./models/character.dto";

/**
 * Signature d'une méthode qui récupère la liste des personnages sous forme d'API result
 */
export type GetCharactersResultFromApi = GetResultFromApi<CharactersApiResult>;

function getTokenAsBearer(token: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`
  }
}

function getRequestHeaders(): RequestInit {
  return {
    headers: getTokenAsBearer(import.meta.env.VITE_BEARER_TOKEN)
  };
}

export async function getCharacters(): Promise<CharactersApiResult> {
  const url = import.meta.env.VITE_CHARACTERS_API_URL;
  const response = await fetch(url, getRequestHeaders());
  return await response.json();
}

/**
* Récupère la liste des personnages sous forme de DTO
* @returns la liste des personnages sous forme de DTO
*/
export async function getCharactersDto(getCharacters: GetCharactersResultFromApi): Promise<CharacterDto[]> {
  const apiResult = await getCharacters();

  return apiResult.docs.map(character => ({
    id: character._id,
    name: character.name,
    race: character.race
  }));
}