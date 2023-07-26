/**
 * Type générique pour les fonctions qui retournent une promesse d'un type donné
 */
export type GetResultFromApi<Type> = () => Promise<Type>;