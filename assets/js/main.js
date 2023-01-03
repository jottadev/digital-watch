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

    if(hrs < 10) hrs = '0' + hrs;
    if(min < 10) min = '0' + min;
    if(sgs < 10) sgs = '0' + sgs;
})