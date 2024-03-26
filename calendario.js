var selected;

function start(){
    selected=document.getElementById('xxvii');
    selected.style.outline="2px solid #cad2c5";
    selected.style.backgroundColor="#52796f";
    selected.style.color= "#cad2c5"; 
    selected.style.cursor = "pointer";
}

function remove_selection(oldsel){
    oldsel.style.outline="";
    oldsel.style.backgroundColor="";
    oldsel.style.color= ""; 
    oldsel.style.cursor = "";
}

function change(element){
    remove_selection(selected);
    selected=document.getElementById(element);
    selected.style.outline="2px solid #cad2c5";
    selected.style.backgroundColor="#52796f";
    selected.style.color= "#cad2c5"; 
    selected.style.cursor = "pointer";
    const num = selected.innerText;
    document.getElementById('numero-gs').innerHTML = num;

    switch(num%7){
        case 0:
            document.getElementById('nome-gs').innerHTML = 'Giovedì';
        break;
        case 1:
            document.getElementById('nome-gs').innerHTML = 'Venerdì';
        break;
        case 2:
            document.getElementById('nome-gs').innerHTML = 'Sabato';
        break;
        case 3:
            document.getElementById('nome-gs').innerHTML = 'Domenica';
        break;
        case 4:
            document.getElementById('nome-gs').innerHTML = 'Lunedì';
        break;
        case 5:
            document.getElementById('nome-gs').innerHTML = 'Martedì';
        break;
        case 6:
            document.getElementById('nome-gs').innerHTML = 'Mercoledì';
        break;
    }
}