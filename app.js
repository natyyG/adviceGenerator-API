const advice = document.getElementById('adviceTxt');
const adviceId = document.getElementById('adviceId');
const dice = document.getElementById('diceBtn');
const diceImg = document.getElementById('diceImg');
const api = "https://api.adviceslip.com/advice";
fetch(api)
    .then(
        function(response){
            return response.json();
        }
    ).then((obj)=>{
        advice.innerHTML = '"'+ obj.slip.advice +'"';
        adviceId.innerHTML = "advice # "+ obj.slip.id;
    })
dice.addEventListener('click', ()=>{
    diceImg.style.transform = "rotate(360deg)";
    location.reload();
})