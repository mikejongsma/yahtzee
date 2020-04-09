let worp = 0;

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
    document.getElementById('debug').innerHTML = '';
    for(i=0;i<steenAantal;i++){
        let steenAantal = Math.floor(Math.random() * 6) + 1;
        console.log(steenAantal);
        document.getElementById('debug').innerHTML += "<div class=\"steenElement\" id="+ steenAantal +"  onclick='controleerSelectie(id)'><img src='img/steen" + steenAantal + ".png' width='50px'></div>";
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
