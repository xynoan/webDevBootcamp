const w = document.getElementById("w");
const a = document.getElementById("a");
const s = document.getElementById("s");
const d = document.getElementById("d");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");

const sounds = {
  w: "./sounds/tom-1.mp3",
  a: "./sounds/tom-2.mp3",
  s: "./sounds/tom-3.mp3",
  d: "./sounds/tom-4.mp3",
  j: "./sounds/snare.mp3",
  k: "./sounds/crash.mp3",
  l: "./sounds/kick-bass.mp3",
};

document.addEventListener("keydown", function (e) {
  const key = e.key;
  switch (key) {
    case "w":
      playAudio(key, w);
      break;
    case "a":
      playAudio(key, a);
      break;
    case "s":
      playAudio(key, s);
      break;
    case "d":
      playAudio(key, d);
      break;
    case "j":
      playAudio(key, j);
      break;
    case "k":
      playAudio(key, k);
      break;
    case "l":
      playAudio(key, l);
  }
});

document.addEventListener("keyup", function (e) {
  switch (e.key) {
    case "w":
      removeClass(w);
      break;
    case "a":
      removeClass(a);
      break;
    case "s":
      removeClass(s);
      break;
    case "d":
      removeClass(d);
      break;
    case "j":
      removeClass(j);
      break;
    case "k":
      removeClass(k);
      break;
    case "l":
      removeClass(l);
  }
});

w.addEventListener("mousedown", () => playAudio("w", w));
a.addEventListener("mousedown", () => playAudio("a", a));
s.addEventListener("mousedown", () => playAudio("s", s));
d.addEventListener("mousedown", () => playAudio("d", d));
j.addEventListener("mousedown", () => playAudio("j", j));
k.addEventListener("mousedown", () => playAudio("k", k));
l.addEventListener("mousedown", () => playAudio("l", l));

document.addEventListener("mouseup", function () {
  const drum = document.getElementsByClassName("drum");

  for (let i = 0; i < drum.length; i++) {
    if (drum[i].classList.contains("pressed")) {
      drum[i].classList.remove("pressed");
    }
  }
});

function playAudio(key, element) {
  const audio = new Audio(sounds[key]);
  element.classList.add("pressed");
  audio.play();
}

function removeClass(element) {
  element.classList.remove("pressed");
}
