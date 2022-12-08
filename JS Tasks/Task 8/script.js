/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b;
    }
    this.substraction = function () {
        return this.a - this.b;
    }
    this.multiplication = function () {
        return this.a * this.b;
    }
    this.division = function () {
        return this.a / this.b;
    }
}
const sumcount = new Calculator(1, 4);
const subscount = new Calculator(5, 4);
const multicount = new Calculator(2, 4);
const divcount = new Calculator(8, 2);

console.log(sumcount.sum());
console.log(subscount.substraction());
console.log(multicount.multiplication());
console.log(divcount.division());

