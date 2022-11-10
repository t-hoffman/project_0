const tamagotchi = {
    name: '',
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 1,
};

let currentAge = tamagotchi.age;

const ageInterval = setInterval(() => {
    currentAge += 1;

    ageBox = document.getElementById('age');
    ageBox.textContent = currentAge;
}, 60000);

const hungerBtn = document.getElementById('hunger-btn');
const hungerTxt = document.getElementById('hunger-text');
let currentHunger = tamagotchi.hunger;

hungerBtn.addEventListener('click', (e) => {
    currentHunger -= 1;
    hungerTxt.textContent = currentHunger;
});