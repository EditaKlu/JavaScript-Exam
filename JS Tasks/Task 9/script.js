/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        return console.log(this.budget > 100000000);
    }
}

const firstMovie = new Movie('Avengers: Age of Ultron', 'Joss Whedon', 365000000);
const secondMovie = new Movie('Die Hard 2', 'Renny Harlin', 70000000);
const thirdMovie = new Movie('Maleficent', 'Robert Stromberg', 226000000);
firstMovie.wasExpensive();
secondMovie.wasExpensive();
thirdMovie.wasExpensive();