// variabelen

let turnCounter = 0;
let diceInitArray = [];
let freezeCounter = 0;
let diceNr = 5;
let diceRemove = 0;
let removeArray = [];

console.log('Welkom bij het dobbelspel Yahtzee. klik op de knop om de dobbelstenen te gooien.');

// Functie voor het 'gooien' van de dobbelstenen.
function throwDice(){ 
    for(i=0;i<diceNr;i++){
        let diceNr = Math.floor(Math.random() * 6)+1;
        let cc = document.getElementById('diceBox');
        diceInitArray.push(diceNr);
        console.log(diceNr);
        // console.log(diceInitArray);
        
        // switch voor de verschillende opties
        switch(diceNr){
            case 1:
                let box1 = document.createElement('div');
                box1.innerHTML = "<div id=\"d1\" class=\"diceOne\" onclick=\"rm1()\"><div class=\"dot\"></div></div>";
                cc.appendChild(box1);
            break;
            case 2:
                let box2 = document.createElement('div');
                box2.innerHTML = "<div id=\"d2\" class=\"diceTwo\" onclick=\"rm2()\"><div class=\"dot\"></div><div class=\"dot\"></div></div>";
                cc.appendChild(box2);
            break;
            case 3:
                let box3 = document.createElement('div');
                box3.innerHTML = "<div id=\"d3\" class=\"diceThree\" onclick=\"rm3()\"><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div></div>";
                cc.appendChild(box3);
            break;
            case 4:
                let box4 = document.createElement('div');
                box4.innerHTML = "<div id=\"d4\" class=\"diceFour\" onclick=\"rm4()\"><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div></div><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div></div></div>";
                cc.appendChild(box4);
            break;
            case 5:
                let box5 = document.createElement('div');
                box5.innerHTML = "<div id=\"d5\" class=\"diceFive\" onclick=\"rm5()\"><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div></div><div class=\"dot\"></div><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div></div></div>";
                cc.appendChild(box5);
            break;
            case 6:
                let box6 = document.createElement('div');
                box6.innerHTML = "<div id=\"d6\" class=\"diceSix\" onclick=\"rm6()\"><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div></div><div class=\"column\"><div class=\"dot\"></div><div class=\"dot\"></div><div class=\"dot\"></div></div></div>";
                cc.appendChild(box6);
            break;
        }
    }
    turnCounter ++;
    
    if(turnCounter === 3){
        document.getElementById('btn_dice').disabled = true;
        console.log("Je hebt drie keer gegooid. Verdeel je punten nu op het scoreblok.");
    }
}

// Behoud van dobbelstenen (Hier 1 functie voor schrijven)
function rm1(){
    console.log('Deze dobbelsteen wil ik opnieuw gooien');
    let reThrow = document.getElementById('d1');
    reThrow.remove();
    removeArray.push(1);
    console.log(removeArray);
}

function rm2(){
    console.log('Deze dobbelsteen wil ik opnieuw gooien');
    let reThrow = document.getElementById('d2');
    reThrow.remove();
    removeArray.push(2);
    console.log(removeArray);
}

function rm3(){
    console.log('Deze dobbelsteen wil ik opnieuw gooien');
    let reThrow = document.getElementById('d3');
    reThrow.remove();
    removeArray.push(3);
    console.log(removeArray);
}

function rm4(){
    console.log('Deze dobbelsteen wil ik opnieuw gooien');
    let reThrow = document.getElementById('d4');
    reThrow.remove();
    removeArray.push(4);
    console.log(removeArray);
}

function rm5(){
    console.log('Deze dobbelsteen wil ik opnieuw gooien');
    let reThrow = document.getElementById('d5');
    reThrow.remove();
    removeArray.push(5);
    console.log(removeArray);
}

function rm6(){
    console.log('Deze dobbelsteen wil ik opnieuw gooien');
    let reThrow = document.getElementById('d6');
    reThrow.remove();
    removeArray.push(6);
    console.log(removeArray);
}



// Laat score of spelregels zien

function score(){
    console.log('Laat het scoreblok zien en verberg de spelregels.');
}
function rules(){
    console.log('Laat de spelregels zien en verberg het scoreblok.');
}