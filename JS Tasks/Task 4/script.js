/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const fetchData = async () => {
    try {
        const response = await fetch(ENDPOINT);
        if (response.ok) {
            const cars = await response.json();
            return cars;
        }
    } catch (error) {
        console.error(error);
    }
};

(() => { fetchData().then(cars => displayData(cars)) })();

const output = document.querySelector("#output");

function displayData(car) {
    car.forEach(element => {
        output.innerHTML += `<div id='brandCard'><div id='cars'> ${element.brand}</div> <div id='models'> ${element.models}</div></div>`
    });
}

