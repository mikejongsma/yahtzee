let worp = 0;
let status = 0;
let ronde = 1;

let selected = 0;
let assigned = 0;

let subDice = 0;
let totalDice = 0;

function werpDobbelstenen(){
    telWorp();
}

function telWorp(){
    maakRandomNr();
    worp = worp +1;
    if(worp == 1){
        console.log('Je hebt 1 x gegooid met de dobbelstenen.');
        document.getElementById('action2').style.display = 'block';
        document.getElementById('beurt1').style.backgroundColor = 'green';
    }
    if(worp == 2){
        console.log('Je hebt 2 x gegooid met de dobbelstenen.');
        document.getElementById('beurt2').style.backgroundColor = 'green';
    }
    if(worp == 3){
        console.log('Je hebt 3 x gegooid. Verdeel nu je punten');
        document.getElementById('action1').disabled = true;
        document.getElementById('beurt3').style.backgroundColor = 'green';
    }
}

function maakRandomNr(){
    let steenAantal = 5;
    let plaats = 0;
    document.getElementById('debug').innerHTML = '';
    for(i=0;i<steenAantal;i++){
        let steenAantal = Math.floor(Math.random() * 6) + 1;
        plaats += 1;
        console.log('Nr:' + steenAantal + ' staat op plek: ' + plaats);
        document.getElementById('debug').innerHTML += "<div class=\"steenElement\" id="+ steenAantal +'_'+ plaats +"  onclick='schakelStatus(id)'><img src='img/steen" + steenAantal + ".png' width='50px'></div>";
    }
}

function speelDobbelstenen(){
    //test inbouwen, als er dobbelstenen zijn geselecteerd EN als er een bestemming voor de punten is geselecteerd > dan verder.
    
    if((selected == 0) || (assigned == 0)){
        console.log('selected and assigned are both false and nothing happens!')
    }
    else{
        document.getElementById('debug').innerHTML = '';
        console.log('Volgende ronde: ' + ronde + ': Werp de dobbelstenen.');
        if(document.getElementById('action1').disabled = true){
            document.getElementById('action1').disabled = false;
            document.getElementById('action2').style.display = 'none';
            document.getElementById('beurt1').style.backgroundColor = 'white';
            document.getElementById('beurt2').style.backgroundColor = 'white';
            document.getElementById('beurt3').style.backgroundColor = 'white';
            worp = 0;
            ronde += 1;
        }
    }
}

function controleerSelectie(id){
    console.log(id);
    if(id == 'p13'){
        assigned = 1;
        console.log('Wil je je punten toekennen aan Chance?: ' + subDice + ' punten toekennen.');
    }
}

function schakelStatus(id){
    console.log(id);
    if(document.getElementById(id).classList == 'steenElement'){
        console.log('Deze dobbelsteen houd ik vast.');
        document.getElementById(id).classList.add('onHold');
        document.getElementById(id).classList.remove('steenElement');
        n = parseInt(id.slice(0,1));
        console.log(n);
        selected += 1;
        // subDice.push(id.slice(0,1));
        subDice = subDice + n;
    }else{
        if(document.getElementById(id).classList == 'onHold'){
            console.log('Deze dobbelsteen laat ik weer los.');
            document.getElementById(id).classList.add('steenElement');
            document.getElementById(id).classList.remove('onHold');
            selected -= 1;
            n = parseInt(id.slice(0,1));
            subDice = subDice - n;
        }
    }    
}
