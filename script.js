const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click',(calcular)=> {
    const DATO = document.getElementById('peso').valueAsNumber
    if (DATO > 0){
        error.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        man.innerHTML = "Diario: "+ (flujo*24) + "cc";
        flu.innerHTML = 'Man: ' + flujo + ' cc/hr';
        //man.innerHTML = 'man: ' + mantenimiento + ' cc/hr';
        flu.style.display = 'block';
        man.style.display = 'block';
    } else {
        error.style.display = 'block';
        flu.style.display = 'none';
        man.style.display = 'none';
    }
})
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }else if (resto>30){
        aux=resto-20;
        FLU.innerHTML= 'SC * 1500: ' + ((aux*20)+1500)+ 'cc';
        MAN.innerHTML= 'SC * 1500: ' + (((aux*20)+1500)/24) + ' cc\hs.'
}

    flujo += resto*4;
    return flujo;
}