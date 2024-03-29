let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let monsterHealth;
let fighting;
let inventory = ['stick'];
// Hero stats Selectors
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
// Button Selector
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
// Monster Stats
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');
// Lower Text
const text = document.querySelector('#text');
const locations = [
  {
    name: 'town square',
    'button text': ['Go to store', 'Go to cave', 'Fight dragon'],
    'button functions': [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says Store.',
  },
  {
    name: 'store',
    'button text': [
      'Buy 10 health (10 gold)',
      'Buy weapon (30 gold)',
      'Go to town square',
    ],
    'button functions': [buyHealth, buyWeapon, goTown],
    text: 'You enter the store.',
  },
  {
    name: 'cave',
    'button text': ['Fight slime', 'Fight fanged beast', 'Go to town square'],
    'button functions': [fightSlime, fightBeast, goTown],
    text: 'You enter the cave. You see some monsters.',
  },
];

// Initializing buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}
function goCave() {
  update(locations[2]);
}

function fightDragon() {
  return console.log('Fighting dragon.');
}

function update(location) {
  button1.innerText = location['button text'][0];
  button2.innerText = location['button text'][1];
  button3.innerText = location['button text'][2];
  button1.onclick = location['button functions'][0];
  button2.onclick = location['button functions'][1];
  button3.onclick = location['button functions'][2];
  text.innerText = location.text;
}
// goStore added functions
function buyHealth() {
  gold -= 10;
  health += 10;
  goldText.innerText = gold;
  healthText.innerText = health;
}
function buyWeapon() {}

function fightSlime() {}
function fightBeast() {}
