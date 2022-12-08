/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const fetchData = async () => {
    try {
        const response = await fetch(ENDPOINT);
        if (response.ok) {
            const user = await response.json();
            return user;
        }
    } catch (error) {
        console.error(error);
    }
};

(() => { fetchData().then(user => displayData(user)) })();

const showUsersBtn = document.querySelector('#btn');
const output = document.querySelector("#output");

function displayData(user) {
    showUsersBtn.addEventListener('click', () => {
        output.innerHTML = '';
        user.forEach(element => {
            output.innerHTML += `<div id='person'> Login: ${element.login} <img src=${element.avatar_url}></div>`
        });
    })
}


