const BASE_URL = 'https://www.dnd5eapi.co/api/monsters'
let monsterArray = [];

fetch(BASE_URL)
.then(response => response.json())
.then(result => initMonsters(result));


const monsterTemplate = 
`<span>#NAME</span>`

function initMonsters(monstersObj) {
    const array = monstersObj.results;
    monsterArray = array.map(o => Monster.fromDbObj(o))
    displayMonsters(monsterArray)
}

function displayMonsters(monsters) {

    const monsterSContainer = document.getElementById('monster-container');
    monsterSContainer.innerHTML = '';
    for (const monster of monsters) {
        
        const monsterCard = document.createElement('div');
        monsterCard.classList.add('monster-card');
        const cardHtml = monsterTemplate.replace('#NAME', monster.name);
        monsterCard.innerHTML = cardHtml;
        monsterSContainer.appendChild(monsterCard);
    }
}
