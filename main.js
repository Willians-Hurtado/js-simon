/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */




//Visualizzare in pagina 5 numeri casuali
document.getElementById("numb1").innerText = randomNub(1, 5);
document.getElementById("numb2").innerText = randomNub(1, 5);
document.getElementById("numb3").innerText = randomNub(1, 5);
document.getElementById("numb4").innerText = randomNub(1, 5);
document.getElementById("numb5").innerText = randomNub(1, 5);

function randomNub(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    
}



// far partire un timer di 30 secondi
const timerEL = document.getElementById('timer')
console.log(timerEL);

const startEl = document.getElementById('start')
console.log(startEl);

const myInterval = setTimeout(startEl, 3000);

startEl.addEventListener('click', function(){

    let seconds = 0;
    setInterval(function(){
        timerEL.innerText = ++seconds;
    },1000)
    
    
})


//Dopo 30 secondi i numeri scompaiono

//appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.






