"use strict";
const btnJoin = document.querySelector(".join");
const btnJoinLink = document.querySelector(".join-link");
const signUpForm = document.querySelector(".sign-up");
const containerBlur = document.querySelector(".container");
const closeSignUpForm = document.querySelector(".icon-close");
const heroContainer = document.querySelector(".hero-container");
const infoContainer = document.querySelector(".info-container");
const tryContainer = document.querySelector(".try-container");
const testimonialContainer = document.querySelector(".testimonial-container");
///////////////////////////
//updating year of copyrights
const yearEl = document.querySelector(".copyrights-update");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = `${currentYear} Klaudia Rębalska`;

// //shining sign-up button

let interval = () => {
  for (let i = 0; i < 361; i += 0.01) {
    setInterval(() => {
      btnJoin.style.background = `linear-gradient(${i}deg, #fff, #74d3ffa7)`;
    }, 3000);
  }
};
window.addEventListener("DOMContentLoaded", interval);

// ///stop btn shine//
// const stopBtnColor = function () {
//   clearInterval(interval);
//   interval = null;
//   btnJoin.style.background = "##74d3ff";
// };

// btnJoin.addEventListener("click", stopBtnColor);
// btnJoinLink.addEventListener("click", stopBtnColor);

//////////////////////////////////////////////////////////////////////////////
//display sign-up form
const displaySignUpForm = function () {
  signUpForm.style.visibility = "visible";
  containerBlur.classList.add("blur");
};

const hideSignUpForm = function () {
  signUpForm.style.visibility = "hidden";
  containerBlur.classList.remove("blur");
};

btnJoin.addEventListener("click", displaySignUpForm);
btnJoinLink.addEventListener("click", displaySignUpForm);
closeSignUpForm.addEventListener("click", hideSignUpForm);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!signUpForm.classList.contains("hidden")) {
      signUpForm.style.visibility = "hidden";
      containerBlur.classList.remove("blur");
    }
  }
});

///////////bubble comments
const black = document.querySelector(".black");
const red = document.querySelector(".red");
const purple = document.querySelector(".purple");
const yellow = document.querySelector(".yellow");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const white = document.querySelector(".white");
const bubble = document.querySelector(".bubble");

const bubbleColorComment = {
  black() {
    const html = `<div class="bubble-black">
        <div class="info-comment left" contenteditable="false">
        Use <b>black pin</b> to mark your dream destinations
        </div>
        </div> `;
    bubble.insertAdjacentHTML("afterbegin", html);
  },
  red() {
    const html = `<div class="bubble-red">
  <div class="info-comment left" contenteditable="false">
  Use <b>red pin</b> to mark your romantic memories
  </div>
  </div> `;
    bubble.insertAdjacentHTML("afterbegin", html);
  },
  purple() {
    const html = `<div class="bubble-purple">
    <div class="info-comment left" contenteditable="false">
    Use <b>purple pin</b> to mark your destinations that you will be soon
    </div>
    </div> `;
    bubble.insertAdjacentHTML("afterbegin", html);
  },
  yellow() {
    const html = `<div class="bubble-yellow">
  <div class="info-comment left" contenteditable="false">
  Use <b>yellow pin</b> to mark your family memories
  </div>
  </div>`;
    bubble.insertAdjacentHTML("afterbegin", html);
  },
  orange() {
    const html = `<div class="bubble-orange">
  <div class="info-comment left" contenteditable="false">
  Use <b>orange pin</b> to mark your memories with your friends
  </div>
  </div> `;
    bubble.insertAdjacentHTML("afterbegin", html);
  },
  green() {
    const html = `<div class="bubble-green">
  <div class="info-comment left" contenteditable="false">
  Use <b>green pin</b> to mark your long trips
  </div>
  </div> `;
    bubble.insertAdjacentHTML("afterbegin", html);
  },
  blue() {
    const html = `<div class="bubble-blue">
  <div class="info-comment left" contenteditable="false">
  Use <b>blue pin</b> to mark your best adventures
  </div>
  </div> `;
    bubble.insertAdjacentHTML("afterbegin", html);
  },
  white() {
    const html = `<div class="bubble-white">
  <div class="info-comment left" contenteditable="false">
  Use <b>white pin</b> to mark your other adventures
  </div>
  </div>`;
    bubble.insertAdjacentHTML("afterbegin", html);
  },

  // addBubleColor(color = this.colors) {
  //   const html = color;
  //   console.log(html);
  //   infoContainer.insertAdjacentHTML("afterbegin", html);
  // },
};

const removeComment = function () {
  if (bubble) {
    bubble.innerHTML = "";
    infoContainer.parentNode.removeChild(bubble);
  }
};

black.addEventListener("mouseenter", bubbleColorComment.black);
black.addEventListener("mouseleave", removeComment);
red.addEventListener("mouseenter", bubbleColorComment.red);
red.addEventListener("mouseleave", removeComment);
purple.addEventListener("mouseenter", bubbleColorComment.purple);
purple.addEventListener("mouseleave", removeComment);
yellow.addEventListener("mouseenter", bubbleColorComment.yellow);
yellow.addEventListener("mouseleave", removeComment);
orange.addEventListener("mouseenter", bubbleColorComment.orange);
orange.addEventListener("mouseleave", removeComment);
green.addEventListener("mouseenter", bubbleColorComment.green);
green.addEventListener("mouseleave", removeComment);
blue.addEventListener("mouseenter", bubbleColorComment.blue);
blue.addEventListener("mouseleave", removeComment);
white.addEventListener("mouseenter", bubbleColorComment.white);
white.addEventListener("mouseleave", removeComment);
