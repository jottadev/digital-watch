const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sgs = dateToday.getSeconds();

    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = sgs; 

    if(sgs < 10){
        segundos.textContent = '0' + sgs;
    }

    if(min < 10){
        minutos.textContent = '0' + min;
    }

    if(hrs < 10){
        horas.textContent = '0' + hrs;
    }

})