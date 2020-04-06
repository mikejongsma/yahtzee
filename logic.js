// variabelen

let turnCounter = 0;
let diceInitArray = [];
let freezeCounter = 0;
let diceNr = 5;
let diceRemove = 0;
let diceTotal = diceNr - diceRemove;
let removeArray = [];

console.log('Welkom bij het dobbelspel Yahtzee. klik op de knop om de dobbelstenen te gooien.');

// Functie voor het 'gooien' van de dobbelstenen.
function throwDice() {
    // tel het aantal elementen in de diceInitArray
    console.log("Aantal dobbelstenen in de opnieuw gooien bak: " + diceRemove);
    console.log("Aantal te gooien dobbelstenen: " + diceTotal);
    // wanneer lengte van de dobbelbak array gelijk is aan 5 vraag dan toestemming om alle dobbelstenen opnieuw te gooien.
    if(diceInitArray.length = 5){
        console.log("Er liggen 5 dobbelstenen in de dobbelbak, je hebt geen stenen aangewezen om opnieuw te gooien. Daarom gooi ik alle dobbelstenen opnieuw!");
        diceInitArray = [];
        diceBox.innerHTML = "";
    }
    if(diceInitArray.length < 5){
        console.log(diceNr);
    }
    
    for (i = 0; i < diceNr; i++) {
        let diceNr = Math.floor(Math.random() * 6) + 1;
        let cc = document.getElementById('diceBox');
        diceInitArray.push(diceNr);

        // switch voor de verschillende opties
        switch (diceNr) {
            case 1:
                let box1 = document.createElement('div');
                box1.innerHTML = "<div id=\"d1\" class=\"diceOne\" onclick=\"rmDie(id)\"><div class=\"dot\"></div></div>";
                cc.appendChild(box1);
                break;
            case 2:
                let box2 = document.createElement('div');
                box2.innerHTML = "<div id=\"d2\" class=\"diceTwo\" onclick=\"rmDie(id)\"><div class=\"dot\"></div><div class=\"dot\"></div></div>";
                cc.appendChild(box2);
                break;
            case 3:
                let box3 = document.createElement('div');
                box3.innerHTML = "<div id=\"d3\" class=\"diceThree\" onclick=\"rmDie(id)\"><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div></div>";
                cc.appendChild(box3);
                break;
            case 4:
                let box4 = document.createElement('div');
                box4.innerHTML = "<div id=\"d4\" class=\"diceFour\" onclick=\"rmDie(id)\"><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div></div><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div></div></div>";
                cc.appendChild(box4);
                break;
            case 5:
                let box5 = document.createElement('div');
                box5.innerHTML = "<div id=\"d5\" class=\"diceFive\" onclick=\"rmDie(id)\"><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div></div><div class=\"dot\"></div><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div></div></div>";
                cc.appendChild(box5);
                break;
            case 6:
                let box6 = document.createElement('div');
                box6.innerHTML = "<div id=\"d6\" class=\"diceSix\" onclick=\"rmDie(id)\"><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div></div><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div></div></div>";
                cc.appendChild(box6);
                break;
        }
    }
    turnCounter++;

    if (turnCounter === 3) {
        document.getElementById('btn_dice').disabled = true;
        console.log("Je hebt drie keer gegooid. Verdeel je punten nu op het scoreblok.");
    }
}

function rmDie(id){
    console.log(id);
    console.log('Deze dobbelsteen wil ik opnieuw gooien: ' + id);
    let reThrow = document.getElementById(id);
    reThrow.remove();
    removeArray.push(id);
    diceNr === diceNr --;
    console.log(removeArray);
    diceRemove ++;
    addToRethrow(id);
}

//test function update required.
function addToRethrow(id){
    console.log(id, diceNr);
    //test create element
    let rtd = document.getElementById('diceBox2');

    switch(id){
        case id: 
        let sd = document.createElement('div');
        rtd.innerHTML += id;
        rtd.appendChild(sd);
    }
    
}

// Laat score of spelregels zien

function score() {
    console.log('Laat het scoreblok zien en verberg de spelregels.');
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
}

function rules() {
    console.log('Laat de spelregels zien en verberg het scoreblok.');
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
}