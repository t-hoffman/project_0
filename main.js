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
}, 6000);

// Custom setInterval function to call hunger, boredom, etc.

function customInterval(type, int) {
    const button = document.getElementById(`${type}-btn`);
    const text = document.getElementById(`${type}-text`);

    button.addEventListener('click', () => {
        tamagotchi[type] -= 1;
        text.textContent = tamagotchi[type];
        const img = document.querySelector('.pet-image img');
        img.src = `images/${type}.png`;
    });

    const interval = setInterval(() =>{
        if (tamagotchi[type] >= 9) {  
            clearInterval(interval);
            const body = document.querySelector('body');
            console.log(body);
            body.style.backgroundColor = '#000000';
            const img = document.querySelector('.pet-image img');
            img.src = 'images/sad.png';
        }

        tamagotchi[type] += 1;
        text.textContent = tamagotchi[type];
    }, int);
}

// Call customInterval for each button we have, set time

customInterval('hunger', 4000);
customInterval('sleepiness', 7000);
customInterval('boredom', 100);