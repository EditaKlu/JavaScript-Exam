/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const weightInput = document.querySelector('#search');
const submitBtn = document.querySelector('#submit-btn');
const convertedWeight = document.querySelector('#output');

submitBtn.addEventListener('click', myFunction);

function myFunction(event) {
    event.preventDefault();
    convertedWeight.innerHTML = '';
    const lbWeight = weightInput.value * 2.2046;
    const gWeight = weightInput.value / 0.0010000;
    const ozWeight = weightInput.value * 35.274;
    convertedWeight.innerHTML += `<div id='outputStyles'>
    <div> Pounds: ${lbWeight} lb. </div>
    <div> Grams: ${gWeight} g. </div>
    <div> Ounces: ${ozWeight} oz. </div></div>`
}
