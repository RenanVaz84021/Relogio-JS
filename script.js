let digitalElement = document.querySelector('.digital'); // Selecionando o elmento Digital
let sElement = document.querySelector('.p_s'); // Selecionando o elemnto segundos
let mElement = document.querySelector('.p_m'); // Selecionando o elemento minutos
let hElement = document.querySelector('.p_h'); // Selecionando o elemento hora

function updateClock() {
    let now = new Date(); // Pega a data e hora atual
    let hour = now.getHours(); // função que pega a hora atual 
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;
 
    sElement.style.transform = `rotate(${sDeg}deg)`; // Posicionamento ponteiro segundos
    mElement.style.transform = `rotate(${mDeg}deg)`; // Posicionamento ponteiro minutos
    hElement.style.transform = `rotate(${hDeg}deg)`; // Posicionamento ponteiro Horas
}

/* Corrige a falta do zero nos numeros de digito unico */
/*
function fixZero(Time) {
    return time < 10 ? `0${time}` : time
}
*/
function fixZero(time) {
    if(time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

setInterval(updateClock, 1000); // de 1 e 1 segundo executa a função updateClock
updateClock(); // acaba com o delay de atualização