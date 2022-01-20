// 1-topshiriq

let shashkadoska = ""

for (i=0; i<8; i ++ ){
    for(j = 0; j < 8; j ++ ){
        if(i % 2 != j % 2 ){
            shashkadoska += '[ ]'
        }else{
            shashkadoska += '[o]'
        }
    }
    console.log(shashkadoska);
    shashkadoska = ''
}


// 2-topshiriq  QO`Y

let soni = +prompt("Qo`ylar sonini kiriting:");
while (isNaN(soni) || soni == 0){
    soni = +prompt("0 dan tashqari son kiritishingiz shart: ")
}

if(!isNaN(soni) && (soni != 0 )){
    console.log("1 qo'y");
    for (i = 2; i <= soni; i++ ){
        console.log(i + " ta qo'ylar ");    
    }
}


// 3-topshiriq

let odam_tezlik = 5;
let akula_tezlik = 15;
let odam_vaqt, akula_vaqt

let qirMasofa = +prompt("Qirg`oqqacha masofani kiriting:");
while (isNaN(qirMasofa)){
    qirMasofa = +prompt("Qirg`oqqacha masofani kiriting:");
}

let akula_odam_masofa = +prompt("Akula va odam o`rtasidagi masofani kiriting:");
while(isNaN(akula_odam_masofa)){
    akula_odam_masofa = +prompt("Akula va odam o`rtasidagi masofani qaytadan kiriting:");
}

let delfin = +prompt("Agar delfin bo`lsa 1 yoki bo`lmasa 0 kiriting:");
while(isNaN(delfin)){
    delfin = +prompt("Agar delfin bo`lsa 1 yoki bo`lmasa 0 kiriting:");

}



if(delfin == 1){
    odam_tezlik *= 2
    odam_vaqt = qirMasofa / odam_tezlik 

    akula_vaqt = (akula_odam_masofa + qirMasofa) / akula_tezlik

    if(odam_vaqt < akula_vaqt){
        alert("Odam ketti");
    }else{
        alert("Odam tirik")
    }

}else if(delfin == 0){
    odam_vaqt = qirMasofa / odam_tezlik 
    
    akula_vaqt = (akula_odam_masofa + qirMasofa) / akula_tezlik

    if(odam_vaqt < akula_vaqt){
        alert("Odam ketti");
    }else{
        alert("Odam tirik")
    }
}else{
    alert("Faqat 0 yoki 1 kirita olasiz")
}



// 4-topshiriq


let son = +prompt("Son kiriting: ");

let doska = "";
for(i=1; i<=son; i++){
    for(j=1; j<=son; j++){
        if(i == j || i == 1 || j == 1 || i == son || j == son ){
            doska += '[*]'
        }else{
            doska += '   '
        }
    }
    console.log(doska);
    doska = ''
}