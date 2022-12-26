const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice');
const diceBtn = document.getElementById('dice-btn');

let id = 0;
let advice = "";

function displayAdvice(){
    let dataFetch = fetch('https://api.adviceslip.com/advice', {cache: "no-store"})
        .then((response) => response.json())
        .then((data) => {
            id = data.slip.id;
            advice = data.slip.advice;
            adviceId.innerText = `Advice #${id}`;
            adviceText.innerText = `"${advice}"`;
        });
}
displayAdvice();

diceBtn.addEventListener('click', ()=> {
    displayAdvice();
})
