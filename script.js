"use strict";
const btnJoin = document.querySelector(".join");
const btnJoinLink = document.querySelector(".join-link");
const signUpForm = document.querySelector(".sign-up");
const header = document.querySelector("header");
const containerBlur = document.querySelector(".container");
const closeSignUpForm = document.querySelector(".icon-close");
const heroContainer = document.querySelector(".hero-container");
const infoContainer = document.querySelector(".info-container");
const tryContainer = document.querySelector(".try-container");
const testimonialContainer = document.querySelector(".testimonial-container");
const nav = document.querySelector(".nav-list");
const logo = document.querySelector(".img-logo");
const logoName = document.querySelector(".img-name");

/////////////////////////
//scrolling
document.querySelector(".nav-list").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-word")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///sticky nav

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

heroObserver.observe(heroContainer);
///////////////////////////
//updating year of copyrights
const yearEl = document.querySelector(".copyrights-update");
const currentYear = new Date().getFullYear();
yearEl.textContent = `${currentYear} Klaudia Rębalska`;

///reveal container
const allContainer = document.querySelectorAll(".containers");

const revealContainer = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("container-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealContainer, {
  root: null,
  threshold: 0.15,
});

allContainer.forEach(function (container) {
  sectionObserver.observe(container);
  container.classList.add("container-hidden");
});

// //shining sign-up button

let interval = () => {
  for (let i = 0; i < 361; i += 0.01) {
    setInterval(() => {
      btnJoin.style.background = `linear-gradient(${i}deg, #fff, #74d3ffa7)`;
    }, 3000);
  }
};
window.addEventListener("DOMContentLoaded", interval);

///////////
const imgs = document.querySelectorAll(".hero-photo");
const imgsArray = Array.from(imgs);
console.log(imgsArray);

//////////////scrolling img on rightarrow
// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowRight") {
//     if (img.dataset.pos == -1) {
//       //prev ->hide  1->5
//       img.dataset.pos = 3;
//     } else if (img.dataset.pos == 3) {
//       //hide -> nextN 5->4
//       img.dataset.pos = 2;
//     } else if (img.dataset.pos == 2) {
//       //nextN -> next 4->3
//       img.dataset.pos = 1;
//     } else if (img.dataset.pos == 1) {
//       // next -> act 3->2
//       img.dataset.pos = 0;
//     } else if (img.dataset.pos == 0) {
//       //act-> prev 2->1
//       img.dataset.pos = -1;
//     }
//   }
// });

const carouselInfinite = function () {
  imgsArray.forEach((img) => {
    setInterval(() => {
      // const prev = imgsArray.find((elem) => elem.dataset.pos === -1);
      // const act = imgsArray.find((elem) => elem.dataset.pos === 0);
      // const next = imgsArray.find((elem) => elem.dataset.pos === 1);
      // const nextNext = imgsArray.find((elem) => elem.dataset.pos === 2);
      // const hide = imgsArray.find((elem) => elem.dataset.pos === 3);
      // const addedEl = document.createElement("img");
      if (img.dataset.pos == -1) {
        //prev ->hide  1->5
        img.dataset.pos = "3";
      } else if (img.dataset.pos == 3) {
        //hide -> nextN 5->4
        img.dataset.pos = "2";
      } else if (img.dataset.pos == 2) {
        //nextN -> next 4->3
        img.dataset.pos = "1";
      } else if (img.dataset.pos == 1) {
        // next -> act 3->2
        img.dataset.pos = "0";
      } else if (img.dataset.pos == 0) {
        //act-> prev 2->1
        img.dataset.pos = "-1";
      }
    }, 3000);
    console.log(img);
    console.log(imgsArray);
  });
};
carouselInfinite();

////////
//carousel photos
const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

// const carousel = () => {
//   const addedEl = document.createElement("img");
//   const selector = (selector) => {
//     return document.querySelector(selector);
//   };

//   function next() {
//     if (selector(".hide")) {
//       selector(".hide").remove();
//     }

//     if (selector(".prev")) {
//       selector(".prev").classList.add("hide");
//       selector(".prev").classList.remove("prev");
//     }

//     selector(".act").classList.add("prev");
//     selector(".act").classList.remove("act");

//     selector(".next").classList.add("act");
//     selector(".next").classList.remove("next");

//     /* New Next */

//     selector(".new-next").classList.remove("new-next");

//     selector(".imagines-hero").appendChild(addedEl);
//     addedEl.classList.add("next", "new-next");
//   }

//   function prev() {
//     selector(".new-next").remove();

//     /* Step */

//     selector(".next").classList.add("new-next");

//     selector(".act").classList.add("next");
//     selector(".act").classList.remove("act");

//     selector(".prev").classList.add("act");
//     selector(".prev").classList.remove("prev");

//     /* New Prev */

//     selector(".hide").classList.add("prev");
//     selector(".hide").classList.remove("hide");

//     selector(".imagines-hero").insertBefore(
//       addedEl,
//       selector(".imagines-hero").firstChild
//     );
//     addedEl.classList.add("hide");
//   }
//   const slide = (element) => {
//     /* Next slide */

//     if (element.classList.contains("next")) {
//       next();

//       /* Previous slide */
//     } else if (element.classList.contains("prev")) {
//       prev();
//     }
//   };

//   const slider = selector(".imagines-hero"),
//     swipe = new Hammer(selector(".swipe"));

//   slider.onclick = (event) => {
//     slide(event.target);
//   };

//   swipe.on("swipeleft", (ev) => {
//     next();
//   });

//   swipe.on("swiperight", (ev) => {
//     prev();
//   });
// };
// carousel();

//////////////////
//cookies
const cookies = document.querySelector(".cookies");
const btnCookies = document.querySelector(".cookies-btn");
const closeCookies = function () {
  cookies.style.display = "none";
};

btnCookies.addEventListener("click", closeCookies);
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

////////////////////////
//testimonial container
const firstDot = document.querySelector(".dot-1");
const secondDot = document.querySelector(".dot-2");
const thirdDot = document.querySelector(".dot-3");
const testimonialFirst = document.querySelector(".testimonial-box-1");
const testimonialSecond = document.querySelector(".testimonial-box-2");
const testimonialThird = document.querySelector(".testimonial-box-3");
const testimonialDot = document.querySelector(".testimonial-dot");

firstDot.addEventListener("click", function () {
  console.log("FIRST");
  if (testimonialFirst.classList.contains("active")) return;
  else {
    testimonialFirst.style.opacity = "1";
    testimonialFirst.style.display = "grid";
    firstDot.classList.add("dot-active");
    thirdDot.classList.remove("dot-active");
    secondDot.classList.remove("dot-active");

    testimonialSecond.style.opacity = "0";
    testimonialSecond.style.display = "none";
    testimonialThird.style.opacity = "0";
    testimonialThird.style.display = "none";
  }
});
secondDot.addEventListener("click", function () {
  console.log("SECOND");
  if (testimonialSecond.classList.contains("active")) return;
  else {
    testimonialSecond.style.opacity = "1";
    testimonialSecond.style.display = "grid";
    secondDot.classList.add("dot-active");
    firstDot.classList.remove("dot-active");
    thirdDot.classList.remove("dot-active");

    testimonialFirst.style.opacity = "0";
    testimonialFirst.style.display = "none";
    testimonialThird.style.opacity = "0";
    testimonialThird.style.display = "none";
  }
});
thirdDot.addEventListener("click", function () {
  console.log("THIRD");
  if (testimonialThird.classList.contains("active")) return;
  else {
    testimonialThird.style.opacity = "1";
    testimonialThird.style.display = "grid";
    thirdDot.classList.add("dot-active");
    secondDot.classList.remove("dot-active");
    firstDot.classList.remove("dot-active");

    testimonialFirst.style.opacity = "0";
    testimonialFirst.style.display = "none";
    testimonialSecond.style.opacity = "0";
    testimonialSecond.style.display = "none";
  }
});
