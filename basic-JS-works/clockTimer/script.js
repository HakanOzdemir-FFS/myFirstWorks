const button = document.querySelector(".js-pr");
const start = document.querySelector(".start-stop");
const reset = document.querySelector(".reset");
let intervalStart = false;

let time = [(hour = 0), (minute = 0), (second = 0), (milisecond = 0)];

start.addEventListener("click", () => {
  startİnterval();
});

function timerText() {
  button.innerHTML =
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (minute < 10 ? "0" + minute : minute) +
    ":" +
    (second < 10 ? "0" + second : second) +
    ":" +
    (milisecond < 10 ? "0" + milisecond : milisecond);
}

function startİnterval() {
  if (!intervalStart) {
    start.innerHTML = "Stop";
    intervalStart = true;
    this.Timer = setInterval(() => {
      milisecond += 1;
      if (milisecond === 100) {
        second++;
        milisecond = 0;
      } else if (second === 60) {
        minute++;
        second = 0;
      } else if (minute === 60) {
        hour++;
        minute = 0;
      }
      timerText();
    }, 10);
  } else {
    intervalStart = false;
    start.innerHTML = "Start";
    timerText();
    clearInterval(this.Timer);
  }
}

reset.addEventListener("click", () => {
  let time = [(hour = 0), (minute = 0), (second = 0), (milisecond = 0)];
  timerText();
});
