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
  setInterval(() => {
    imgsArray.forEach((img) => {
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
    });
  }, 3000);
};
carouselInfinite();

//////////////////
//cookies
const cookies = document.querySelector(".cookies");
const btnCookies = document.querySelector(".cookies-btn");
const closeCookies = function () {
  cookies.style.display = "none";
};

btnCookies.addEventListener("click", closeCookies);
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
    document.querySelector(".bubble--black").classList.remove("bubble-hidden");
  },
  red() {
    document.querySelector(".bubble--red").classList.remove("bubble-hidden");
  },
  purple() {
    document.querySelector(".bubble--purple").classList.remove("bubble-hidden");
  },
  yellow() {
    document.querySelector(".bubble--yellow").classList.remove("bubble-hidden");
  },
  orange() {
    document.querySelector(".bubble--orange").classList.remove("bubble-hidden");
  },
  green() {
    document.querySelector(".bubble--green").classList.remove("bubble-hidden");
  },
  blue() {
    document.querySelector(".bubble--blue").classList.remove("bubble-hidden");
  },
  white() {
    document.querySelector(".bubble--white").classList.remove("bubble-hidden");
  },
  removeComment() {
    document.querySelector(".bubble--black").classList.add("bubble-hidden");
    document.querySelector(".bubble--red").classList.add("bubble-hidden");
    document.querySelector(".bubble--purple").classList.add("bubble-hidden");
    document.querySelector(".bubble--yellow").classList.add("bubble-hidden");
    document.querySelector(".bubble--orange").classList.add("bubble-hidden");
    document.querySelector(".bubble--green").classList.add("bubble-hidden");
    document.querySelector(".bubble--blue").classList.add("bubble-hidden");
    document.querySelector(".bubble--white").classList.add("bubble-hidden");
  },
};

black.addEventListener("mouseenter", bubbleColorComment.black);
black.addEventListener("mouseleave", bubbleColorComment.removeComment);
red.addEventListener("mouseenter", bubbleColorComment.red);
red.addEventListener("mouseleave", bubbleColorComment.removeComment);
purple.addEventListener("mouseenter", bubbleColorComment.purple);
purple.addEventListener("mouseleave", bubbleColorComment.removeComment);
yellow.addEventListener("mouseenter", bubbleColorComment.yellow);
yellow.addEventListener("mouseleave", bubbleColorComment.removeComment);
orange.addEventListener("mouseenter", bubbleColorComment.orange);
orange.addEventListener("mouseleave", bubbleColorComment.removeComment);
green.addEventListener("mouseenter", bubbleColorComment.green);
green.addEventListener("mouseleave", bubbleColorComment.removeComment);
blue.addEventListener("mouseenter", bubbleColorComment.blue);
blue.addEventListener("mouseleave", bubbleColorComment.removeComment);
white.addEventListener("mouseenter", bubbleColorComment.white);
white.addEventListener("mouseleave", bubbleColorComment.removeComment);

//////////////////////////////
// MAP
class Map {
  #pin;
  constructor() {
    // Get user's position
    this._getPosition();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Could not get your position");
          document.querySelector(".try-map").classList.add("map-fail-info");
          document.querySelector(".try-map").textContent =
            "🌎 🌍 🌏 Allow locations to try out the map!";
        }
      );
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];
    console.log(coords);
    const map = L.map("map").setView(coords, 11);

    const tiles = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(map);

    // const marker = L.marker(coords)
    //   .addTo(map)
    //   .bindPopup("<b>Hello world!</b><br />I am a popup.")
    //   .openPopup();

    const circle = L.circle(coords, {
      color: "#069ee5",
      fillColor: "none",
      // fillOpacity: 0.2,
      radius: 5000,
    })
      .addTo(map)
      .bindPopup("That's the radius of your localization");

    const popup = L.popup()
      .setLatLng(coords)
      .setContent("Choose place where would you like to mark your wonder!")
      .openOn(map);

    const title = document.querySelector(".form-title");
    const description = document.querySelector(".form-descr");
    const submit = document.querySelector(".form-btn-div");

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent(`Add your wonder at ${e.latlng.toString()}`)
        .openOn(map);
      document.getElementById("form-title").focus();

      submit.addEventListener("click", function (e) {
        newFunction(e);
        const marker = L.marker(coords).addTo(map);
        e.forEach(
          marker
            .bindPopup(`${title.value}:<br>${description.value}`)
            .openPopup()
        );
        title.value = description.value = "";
      });

      function newFunction(e) {
        e.preventDefault();
      }
    }

    map.on("click", onMapClick);
  }
  _setLocalStorage() {
    localStorage.setItem("pin", JSON.stringify(this.#pin));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("pin"));

    if (!data) return;

    this.#pin = data;

    this.#pin.forEach((pin) => {
      this.markPin(pin);
    });
  }

  reset() {
    localStorage.removeItem("pin");
    location.reload();
  }
}

const map = new Map();

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
