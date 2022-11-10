const tamagotchi = {
    name: 'Lilo',
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 1,
};


const ageInterval = setInterval(() => {
    tamagotchi.age += 1;

    ageBox = document.getElementById('age');
    ageBox.textContent = tamagotchi.age;
}, 6000);

// Custom setInterval function to call hunger, boredom, etc.

function customInterval(type, int) {
    const button = document.getElementById(`${type}-btn`);
    const text = document.getElementById(`${type}-text`);

    button.addEventListener('click', () => {
        tamagotchi[type] -= 1;
        text.textContent = tamagotchi[type];
    });

    const interval = setInterval(() =>{
        if (tamagotchi[type] >= 9) {
            clearInterval(interval);

        }

        tamagotchi[type] += 1;
        text.textContent = tamagotchi[type];
        //console.log(tamagotchi)
    }, int);
}

// Call customInterval for each button we have, set time

customInterval('hunger', 1000);
customInterval('sleepiness', 2000);
customInterval('boredom', 3000);