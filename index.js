let isPartyTime = false;
let indexNumber = -1;
let wakeUpTime = 0;
let napTime = 0;
let lunchTime = 0;
let arrayCounter = -1;
const myCatArray = [
    ['dawn', '', './image/DawnCat.jpg','initial'],//0
    ['morning','\"Good morning!\"', './image/MorningCat.jpg', 'slateblue'],//1
    ['afternoon','\"It\'s afternoon time!\"', './image/AfternoonCat.jpg', 'white'],//2
    ['dusk', '', './image/DuskCat.jpg', 'initial'],//3
    ['evening', '\"Good evening!\"', './image/EveningCat.jpg', 'white'],//4
    ['night', '\"Still awake?\"', './image/NightCat.jpg', 'slateblue'],//5
    ['party', '\"Iz partee time!!\"', './image/PartyCat.gif', 'slateblue'],//6
    ['wake up','\"Rise n Shine!\"', './image/WakeUpCat.jpg','black'],//7
    ['lunch', '\"Itadakimasu!\"','./image/EatingCat.jpg', 'black'],//8
    ['nap', '\"It\'s nap time!\"', './image/SleepingCat.jpg','slateblue'],//9
    ['dio', '\"You were expecting a bug,<br> but it was me, DIO!\"', './image/KonoDioDa.jpg','white']//10
];

function updateClock() {
    const date = new Date();

    let hour = date.getHours();
    let am_pm = hour < 12 ? 'AM' : 'PM';
    hour = pad((hour > 12) ? hour - 12 : hour);
    let minute = pad(date.getMinutes());
    let second = pad(date.getSeconds());

    let time = [hour, minute, second].join(':');
    
    document.getElementById('clock').innerHTML = `${time} ${am_pm}!`;
}

function pad(x) {         // make 01, 02, 03...
    return (x < 10 ? '0' : '') + x;
}

setInterval(updateClock, 1000);

function modeSwitchBeta() {
    arrayCounter = (arrayCounter + 1) % myCatArray.length;
    switchImage(arrayCounter);
}

function setWakeUpTime() {
    wakeUpTime = document.getElementById('wake-up-time-selector').value;
    wakeUpTime = parseInt(wakeUpTime);
}

function setLunchTime() {
    lunchTime = document.getElementById('lunch-time-selector').value;
    lunchTime = parseInt(lunchTime);
}

function setNapTime() {
    napTime = document.getElementById('nap-time-selector').value;
    napTime = parseInt(napTime);
}

function modeSwitch() {
    const date = new Date();
    const hour = date.getHours();
    indexNumber = (hour <= 4) ? 5 :        // night
                        (hour <= 6) ? 0 :         // dawn
                        (hour <= 12) ? 1 :          // morning
                        (hour <= 17) ? 2 :            // afternoon
                        (hour <= 18) ? 3 :           // dusk
                        (hour <= 22) ? 4 :           // evening
                        (hour <= 24) ? 5 :          // night
                        10;                           // everything else
    if (isPartyTime) return;
    if (hour == wakeUpTime) switchImage(7)
    else if (hour == lunchTime) switchImage(8)
    else if (hour == napTime) switchImage(9)
    else switchImage(indexNumber);
}

function switchImage(x) {
    const imgMsg = myCatArray[x][1];
    const imgUrl = myCatArray[x][2];
    const textColor = myCatArray[x][3];
    document.getElementById('textInImg').innerHTML = imgMsg;
    document.getElementById('catImg').style.backgroundImage = `url(${imgUrl})`; 
    document.getElementById('textInImg').style.color = textColor;
}

setInterval(modeSwitch, 1000);

function letsParty () {
    isPartyTime = !isPartyTime;
    if (isPartyTime) switchImage(6);   // party == 8
}
