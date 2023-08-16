const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const countHour = document.querySelector('.hour-container');
const countMinute = document.querySelector('.minute-container');
const countSecond = document.querySelector('.second-container');

function setDate() {
  const now = new Date();

  let second = now.getSeconds();
  let secondDegrees = (second / 60) * 360 + 180;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  countSecond.innerHTML = `${second}`; 

  let minute = now.getMinutes();
  let minuteDegrees = (minute / 60) * 360 + 180;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  countMinute.innerHTML = `${minute}`; 

  let hour = now.getHours();
  let hourDegrees = (hour / 12) * 360 + 180;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  countHour.innerHTML = `${hour}`; 
}


setInterval(setDate, 1000);
setDate();
