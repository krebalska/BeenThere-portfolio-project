const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
];

const imagesLength = images.length;
const image = document.querySelector(".hero-photo");
const selector = (selector) => {
  return document.querySelector(selector);
};

(carouselInfinite = function () {
  const wait = (seconds) => {
    return new Promise((res) => {
      setTimeout(res, seconds * 1000);
    });
  };
  for (let i = 1; i < imagesLength; i++) {
    wait(2).then(() => {
      image.src = i;
      if (selector(".hide")) {
        selector(".hide").remove();
      }

      if (selector(".prev")) {
        selector(".prev").classList.add("hide");
        selector(".prev").classList.remove("prev");
      }

      selector(".act").classList.add("prev");
      selector(".act").classList.remove("act");

      selector(".next").classList.add("act");
      selector(".next").classList.remove("next");

      /* New Next */

      selector(".new-next").classList.remove("new-next");

      selector(".imagines-hero").appendChild(addedEl);
      addedEl.classList.add("next", "new-next");
      return wait(2);
    });
  }
})();

//////////////////////////
class carouselClass {
  #interval = 1500;
  #paddingRight = 50;
  #slidesWrapper;
  #slides;
  #Li_index;
  #onLoop;

  constructor(UL_Carousel) {
    this.#slidesWrapper = UL_Carousel;
    this.#slides = UL_Carousel.querySelectorAll(`li`);
    this.#Li_index = 0;
    this.#onLoop = false;
  }
  #delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  #movLeft(mov, indx) {
    return new Promise((resolve) => {
      this.#slidesWrapper.ontransitionend = () => {
        this.#slidesWrapper.ontransitionend = null;
        this.#slidesWrapper.style = "";
        this.#slidesWrapper.appendChild(this.#slides[this.#Li_index]); // mov slide to the end
        this.#Li_index = ++this.#Li_index % this.#slides.length; // next Li element index
        resolve();
      };
      this.#slidesWrapper.style.transition = "1s";
      this.#slidesWrapper.style.transform = `translateX(${mov}px)`;
    });
  }
  async run() {
    this.#onLoop = true;
    this.#slidesWrapper.style = "";

    while (this.#onLoop) {
      // infinite carrousel loop
      await this.#delay(carouselClass.#interval);
      await this.#movLeft(
        -(
          this.#slides[this.#Li_index].clientWidth + carouselClass.#paddingRight
        )
      );
    }
  }
  stop() {
    this.#onLoop = false;
  }
}

const carousels = [...document.querySelectorAll(".carousel")].map((cBox) => ({
  box: cBox,
  cls: new carouselClass(cBox.querySelector("ul")),
}));

carousels.index = -1;

carousels.animateNext = (_) => {
  carousels.index = ++carousels.index % carousels.length;
  carousels.forEach((crl, i) =>
    crl.box.classList.toggle("noDisplay", carousels.index !== i)
  );
  carousels[carousels.index].cls.run();
};
carousels.animateNext(); // first attempt...

bt_switch.onclick = (_) => {
  carousels[carousels.index].cls.stop(); // stop infinite loop on current carousel
  carousels.animateNext();
};
