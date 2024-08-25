let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["red", "green", "pink", "blue"];
let h2 = document.querySelector("h2");
let allbtns = document.querySelectorAll(".btn");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 350);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 350);
}

function checkvalue() {
  for (let i = 0; i < userseq.length; i++) {
    if (gameseq[i] !== userseq[i]) {
      h2.innerHTML = `game over your score is <b> ${level}<b> <br> press any key to start`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
      }, 500);
      reset();
      return;
    }
  }
  if (userseq.length === gameseq.length) {
    setTimeout(levelup, 1000);
    userseq = [];
  }
}

function levelup() {
  level++;
  h2.innerText = `level ${level}`;
  let randindex = Math.floor(Math.random() * 4);
  let randColor = btns[randindex];
  let randbtn = document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  console.log(gameseq);
  playSequence();
}

function playSequence() {
  let delay
}
