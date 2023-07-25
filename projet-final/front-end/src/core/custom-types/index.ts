// type Nullable<T> = T | null;

/**
 * Type représentant une chaine de caractères ou null
 */
export type StringOrNull = string | null;

/**
 * Type représentant une fonction qui affiche un message
 */
export type StringDisplay = (message: string) => void;

/**
 * Type représentant une fonction qui demande une chaine de caractères
 */
export type RequestString = (message: string) => StringOrNull;