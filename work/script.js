//Scroll Loading
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#014F86 ${scrollValue}%, #61A5C2 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//SLIDING
const cardContainer = document.querySelector(".html");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  cardContainer.style.transform = `translateX(-${currentIndex * 310}px)`;
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < 2 ? currentIndex + 1 : 2;
  cardContainer.style.transform = `translateX(-${currentIndex * 310}px)`;
});
