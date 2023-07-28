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




/**
 *  Classe représentant une liste d'éléments 
 */
export class ArrayList<Type extends { id: number }> {
    private _items: Type[] = [];

    /**
     * Ajoute un élément à la liste
     * @param item   
     */
    public add(item: Type): void {
        this._items.push(item);
    }

    public get(index: number): Type {
        return this._items[index];
    }

    public get length(): number {
        return this._items.length;
    }
}