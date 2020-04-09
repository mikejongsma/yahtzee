let worp = 0;
let status = 0;

function werpDobbelstenen(){
    telWorp();
}

function telWorp(){
    maakRandomNr();
    worp = worp +1;
    if(worp == 1){
        console.log('Je hebt 1 x gegooid met de dobbelstenen.');
        document.getElementById('action2').style.display = 'block';
    }
    if(worp == 2){
        console.log('Je hebt 2 x gegooid met de dobbelstenen.');
    }
    if(worp == 3){
        console.log('Je hebt 3 x gegooid. Verdeel nu je punten');
        document.getElementById('action1').disabled = true;
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
    document.getElementById('debug').innerHTML = '';
    console.log('Volgende ronde: Werp de dobbelstenen.');
    if(document.getElementById('action1').disabled = true){
        document.getElementById('action1').disabled = false;
        document.getElementById('action2').style.display = 'none';
        worp = 0;
    }
}

function controleerSelectie(id){
    console.log(id);
}

function schakelStatus(id){
    console.log(id);
    if(document.getElementById(id).classList == 'steenElement'){
        console.log('Deze dobbelsteen houd ik vast.');
        document.getElementById(id).classList.add('onHold');
        document.getElementById(id).classList.remove('steenElement');
        console.log(id.slice(0,1));
    }else{
        if(document.getElementById(id).classList == 'onHold'){
            console.log('Deze dobbelsteen laat ik weer los.');
            document.getElementById(id).classList.add('steenElement');
            document.getElementById(id).classList.remove('onHold');
        }
    }    
}
