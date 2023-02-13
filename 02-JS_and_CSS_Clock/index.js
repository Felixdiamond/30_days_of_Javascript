var audio = new Audio('./clock.mp3');
audio.muted = false;
audio.loop = true;
audio.play();

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')
const myTime = document.getElementById('tellTime');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const minutesDegrees = (((minutes / 60) * 360) + 90);
    const secondsDegrees = (((seconds / 60) * 360) + 90); 
    const hoursDegrees = (((hours / 12) * 360) + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    myTime.textContent = hours + ":" + minutes + ":" + seconds;
}


setInterval(setDate, 1000);