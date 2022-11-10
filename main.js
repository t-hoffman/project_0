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
    // Grab elements from the DOM: button/text area
    const button = document.getElementById(`${type}-btn`);
    const text = document.getElementById(`${type}-text`);

    // Add button click functionality
    button.addEventListener('click', () => {
        if (tamagotchi[type] >= 0) {
            tamagotchi[type] -= 1;
            text.textContent = tamagotchi[type] >= 0 ? tamagotchi[type] : 0;
        }
        const img = document.querySelector('.pet-image img');
        img.src = `images/${type}.png`;
    });

    // Setting a time interval for the type selected
    const interval = setInterval(() =>{
        // Game scores cannot go above 10 otherwise game is over
        if (tamagotchi[type] >= 9) {  
            // Game over changes to the DOM, stop interval
            const body = document.querySelector('body');
            console.log(body);
            body.style.backgroundColor = '#000000';
            const img = document.querySelector('.pet-image img');
            img.src = 'images/sad.png';
            const scores = document.querySelector('.game-scores');
            scores.style.display = 'none';
            const buttons = document.querySelector('.buttons');
            buttons.style.display = 'none';
            const message = document.getElementById('message');
            message.style.visibility = 'visible';
            message.innerHTML = `GAME OVER!<br />Lilo died of ${type}`;
        
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