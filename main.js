const tamagotchi = {
    name: 'Lilo',
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 1,
};

// Set age interval

const ageInterval = setInterval(() => {
    tamagotchi.age += 1;

    ageBox = document.getElementById('age');
    ageBox.textContent = tamagotchi.age;
}, 30000);

// Custom setInterval function to call hunger, boredom, etc.

function customInterval(type, int) {
    const button = document.getElementById(`${type}-btn`);
    const text = document.getElementById(`${type}-text`);

    button.addEventListener('click', () => {
        if (tamagotchi[type] >= 0) {
            tamagotchi[type] -= 1;
            text.textContent = tamagotchi[type] >= 0 ? tamagotchi[type] : 0;
        }
        const img = document.querySelector('.pet-image img');
        img.src = `images/${type}.png`;
    });

    const interval = setInterval(() =>{
        if (tamagotchi[type] >= 9) {  
            const body = document.querySelector('body');
            console.log(body);
            body.style.backgroundColor = '#000000';
            const img = document.querySelector('.pet-image img');
            img.src = 'images/sad.png';
            const buttons = document.querySelector('.buttons');
            buttons.style.display = 'none';
            const message = document.getElementById('message');
            message.style.visibility = 'visible';
            message.textContent = 'GAME OVER!'
            const scores = document.querySelector('.game-scores');
            scores.style.display = 'none';
            clearInterval(interval);
        }

        tamagotchi[type] += 1;
        text.textContent = tamagotchi[type];
    }, int);
}

// Call customInterval for each button we have, set time

customInterval('hunger', 4000);
customInterval('sleepiness', 5000);
customInterval('boredom', 2000);