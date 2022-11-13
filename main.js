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
}, 3000);

// DOM insert name
const input = document.getElementById('pet-input');
const petNames = document.querySelectorAll('#pet-name');
input.addEventListener('input', () => {
    if (input.value) {
        petNames.forEach((e) => {
        tamagotchi.name = input.value;
        e.textContent = tamagotchi.name;
        });
    }
});


// Custom setInterval function to call hunger, boredom, etc.
let intervals = {};
function customInterval(type, int, id) {
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
    
    intervals[id] = setInterval(() =>{
        // Game scores cannot go above 10 otherwise game is over
        if (tamagotchi[type] >= 9) {  
            // Game over changes to the DOM, stop interval
            const body = document.querySelector('body');
            if (body.style.backgroundColor !== '#000000') {
                body.style.backgroundColor = '#000000';
                const img = document.querySelector('.pet-image img');
                img.src = 'images/sad.png';
                const scores = document.querySelector('.game-scores');
                scores.style.display = 'none';
                const buttons = document.querySelector('.buttons');
                buttons.style.display = 'none';
                const message = document.getElementById('message');
                message.style.visibility = 'visible';
                message.innerHTML = `GAME OVER!<br />${tamagotchi.name} died of ${type}`;
                if (!document.querySelector('.try-again')) {
                    const gameArea = document.querySelector('.game-area');
                    const newDiv = document.createElement('div');
                    newDiv.textContent = 'Try Again';
                    newDiv.className = 'try-again';
                    gameArea.appendChild(newDiv);
                    newDiv.addEventListener('click', () => {window.location.reload()});
                }
            }
            
            for (i = 1; i <= Object.keys(intervals).length; i++) {
                clearInterval(intervals[i]);
            }
        }

        tamagotchi[type] += 1;
        text.textContent = tamagotchi[type];
    }, int);
}

// Call customInterval for each button we have, set time

customInterval('hunger', 4000, 1);
customInterval('sleepiness', 5000, 2);
customInterval('boredom', 2000, 3);