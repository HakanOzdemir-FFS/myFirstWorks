const apress = document.querySelector(".js-keydown-clap");
const spress = document.querySelector(".js-keydown-hihat");
const dpress = document.querySelector(".js-keydown-kick");
const fpress = document.querySelector(".js-keydown-openhat");
const gpress = document.querySelector(".js-keydown-boom");
const hpress = document.querySelector(".js-keydown-ride");
const jpress = document.querySelector(".js-keydown-snare");
const kpress = document.querySelector(".js-keydown-tom");
const lpress = document.querySelector(".js-keydown-tink");

const body = document.querySelector("body");


//pressable first letter work 
const pressable = [
  "apress",
  "spress",
  "dpress",
  "fpress",
  "gpress",
  "hpress",
  "jpress",
  "kpress",
  "lpress",
];

apress.addEventListener("click", () => {
  playSound(pressable[0].charAt(0));
  addClass(apress);
  removeClass(apress);
});
spress.addEventListener("click", () => {
  playSound(pressable[1].charAt(0));
  addClass(spress);
  removeClass(spress);
});
dpress.addEventListener("click", () => {
  playSound(pressable[2].charAt(0));
  addClass(dpress);
  removeClass(dpress);
});
fpress.addEventListener("click", () => {
  playSound(pressable[3].charAt(0));
  addClass(fpress);
  removeClass(fpress);
});
gpress.addEventListener("click", () => {
  playSound(pressable[4].charAt(0));
  addClass(gpress);
  removeClass(gpress);
});
hpress.addEventListener("click", () => {
  playSound(pressable[5].charAt(0));
  addClass(hpress);
  removeClass(hpress);
});
jpress.addEventListener("click", () => {
  playSound(pressable[6].charAt(0));
  addClass(jpress);
  removeClass(jpress);
});
kpress.addEventListener("click", () => {
  playSound(pressable[7].charAt(0));
  addClass(kpress);
  removeClass(kpress);
});
lpress.addEventListener("click", () => {
  playSound(pressable[8].charAt(0));
  addClass(lpress);
  removeClass(lpress);
});

body.addEventListener("keypress", (i) => {
  if (i.key === pressable[0].charAt(0)) {
    playSound(i.key);
    addClass(apress);
  } else if (i.key === pressable[1].charAt(0)) {
    playSound(i.key);
    addClass(spress);
  } else if (i.key === pressable[2].charAt(0)) {
    playSound(i.key);
    addClass(dpress);
  } else if (i.key === pressable[3].charAt(0)) {
    playSound(i.key);
    addClass(fpress);
  } else if (i.key === pressable[4].charAt(0)) {
    playSound(i.key);
    addClass(gpress);
  } else if (i.key === pressable[5].charAt(0)) {
    playSound(i.key);
    addClass(hpress);
  } else if (i.key === pressable[6].charAt(0)) {
    playSound(i.key);
    addClass(jpress);
  } else if (i.key === pressable[7].charAt(0)) {
    playSound(i.key);
    addClass(kpress);
  } else if (i.key === pressable[8].charAt(0)) {
    playSound(i.key);
    addClass(lpress);
  }

  setTimeout(() => {
    removeClass(apress);
    removeClass(spress);
    removeClass(dpress);
    removeClass(fpress);
    removeClass(gpress);
    removeClass(hpress);
    removeClass(jpress);
    removeClass(kpress);
    removeClass(lpress);
  }, 200);
});

function removeClass(remove) {
  remove.classList.remove("active");
}
function addClass(add) {
  add.classList.add("active");
}

function playSound(event) {
  if (event === pressable[0].charAt(0)) {
    new Audio("sound/clap.wav").play();
  } else if (event === pressable[1].charAt(0)) {
    new Audio("sound/hihat.wav").play();
  } else if (event === pressable[2].charAt(0)) {
    new Audio("sound/kick.wav").play();
  } else if (event === pressable[3].charAt(0)) {
    new Audio("sound/openhat.wav").play();
  } else if (event === pressable[4].charAt(0)) {
    new Audio("sound/boom.wav").play();
  } else if (event === pressable[5].charAt(0)) {
    new Audio("sound/ride.wav").play();
  } else if (event === pressable[6].charAt(0)) {
    new Audio("sound/snare.wav").play();
  } else if (event === pressable[7].charAt(0)) {
    new Audio("sound/tom.wav").play();
  } else if (event === pressable[8].charAt(0)) {
    new Audio("sound/tink.wav").play();
  }
}
