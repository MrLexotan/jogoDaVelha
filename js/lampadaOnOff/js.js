const cap = document.querySelector('.lamp');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');

let innerBtn2 = btn2.innerHTML;
let innerBtn = btn.innerHTML;


btn.addEventListener('click', function () {
    cap.setAttribute('src', 'lampada-on.jpg');
    btn.style.borderColor = 'yellow';
    if(innerBtn ==='Ligar') {
        btn.innerHTML = 'ligado'
        btn2.innerHTML = 'Desligar'
    }


});

btn2.addEventListener('click', function () {
    cap.setAttribute('src', 'lampada.jpg');
    btn2.innerHTML = 'Desligado';
    btn.innerHTML = 'Ligar'
    btn.style.borderColor = 'black';

});







