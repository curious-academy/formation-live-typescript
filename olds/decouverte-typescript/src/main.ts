interface Hobbit {
    name: string;
    age: number;
}

type ListAttributs = keyof Hobbit;
const attribut: ListAttributs = 'age';

// function search(obj: Hobbit, key: ListAttributs, value: unknown): boolean {
//     return obj[key] === value;
// }

function search<Type>(obj: Type, key: keyof Type, value: unknown): boolean {
    return obj[key] === value;
}

search({ name: 'Frodon', age: 33 }, 'age', 'Frodon');

const frodo: Hobbit = {
    name: 'Frodon',
    age: 33
};