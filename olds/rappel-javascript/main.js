// ES 5 => function constructeur, JSON parser
// ES 6 / ES 2015 => class, let, const, arrow function, template string, spread operator, destructuring, default parameter, for of, promise, module, import, export
// ES 2016 => exponentiation operator, Array.prototype.includes, typed array
// ES 2017 => async / await
// ES 2018 => rest operator, spread operator, async / await
// ES 2020 => nullish coalescing operator, optional chaining operator
// ES 2021 => promise allSettled, String.prototype.replaceAll, Logical Assignment Operators
// ES 2023 => juin 2023, decorator js

// une version pour les gouverner tous => ES 6

class Hobbit {
    constructor(name, age = 25) {
        this.name = name;
        this.age = age;
    }
}

let frodon = new Hobbit();
frodon = 1; // WARNING WTF !!!!!