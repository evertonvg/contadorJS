let end = new Date("10/07/2020 00:00 AM");
let comeco = new Date("10/07/2019 00:00 AM");
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let timer;
// let clock = document.querySelector('#clock');
// let aviso document.querySelector('#aviso');
let dias = document.querySelector('.dias');
let horas = document.querySelector('.horas');
let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');
let countdown = document.querySelector('.countdown');

function showRemaining() {
    let now = new Date();
    let distance = end - now;

    if (distance < 0) {
        clearInterval(timer);
        clock.innerHTML = "EXPIRED!";
        return;
    }

    let days = Math.floor(distance / day);
    let hours = Math.floor((distance % day) / hour);
    let minutes = Math.floor((distance % hour) / minute);
    let seconds = Math.floor((distance % minute) / second);

    dias.innerHTML = days ;
    horas.innerHTML = hours ;
    minutos.innerHTML = minutes ;
    segundos.innerHTML = seconds ;

    if(now<comeco){
        // countdown.style.display = 'none';

    }else{
        countdown.style.display = 'flex';
    }
    
}

timer = setInterval(showRemaining, 1000);