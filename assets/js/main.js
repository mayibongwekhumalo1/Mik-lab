// counter


let valueDisplays = document.querySelectorAll('.count');
let interval = 2000;


valueDisplays.forEach((valueDisplay )=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute(("data-value")))
    
    let duration = Math.floor(interval/endValue);

    let counter = setInterval(function(){
        startValue += 1;

        valueDisplay.textContent = startValue;

        if(startValue== endValue){
            clearInterval(counter);
        }
    },duration)

});


const openBtn = document.querySelector('#open-modal');
const dialog = document.querySelector('#dialog');


openBtn.addEventListener("click", () =>dialog.showModal());



const  reveal = document.querySelectorAll('.reveal');

const windowHeight = window.innerHeight;
const revealHeight = reveal[0].getBoundingClientRect().top;
const revealPoint = 150;
const revealPoint2 = 150;
const revealPoint3 = 150;
const revealPoint4 = 150;
const revealPoint5 = 150;
const revealPoint6 = 150;
const revealPoint7 = 150;
const revealPoint8 = 150;


window.addEventListener('scroll', () => {
    for (let i = 0; i < reveal.length; i++) {
        const revealTop = reveal[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            reveal[i].classList.add('active');
        } else {
            reveal[i].classList.remove('active');
        }
    }
});

