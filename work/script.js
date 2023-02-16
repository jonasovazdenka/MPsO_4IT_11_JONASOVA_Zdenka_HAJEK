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

// Objekt s názvy karet pro každou skupinu
const cardNames = {
  html: ["htmlcard1", "htmlcard2", "htmlcard3"],
  css: ["csscard1", "csscard2"],
  js: ["jscard1", "jscard2", "jscard3"],
};

// Funkce pro posunutí na další nebo předchozí kartu pro danou skupinu
function changeCard(groupName, step) {
  const cards = cardNames[groupName];
  const currentCard = cards.findIndex((card) => getComputedStyle(document.getElementById(card)).display !== "none");
  const nextCard = (currentCard + cards.length + step) % cards.length;
  cards.forEach((card) => document.getElementById(card).style.display = "none");
  document.getElementById(cards[nextCard]).style.display = "block";
}

// Přidání event listenerů pro tlačítka pro každou skupinu
document.getElementById("html-Nxt-Btn").addEventListener("click", () => changeCard("html", 1));
document.getElementById("html-Prev-Btn").addEventListener("click", () => changeCard("html", -1));

document.getElementById("css-Nxt-Btn").addEventListener("click", () => changeCard("css", 1));
document.getElementById("css-Prev-Btn").addEventListener("click", () => changeCard("css", -1));

document.getElementById("js-Nxt-Btn").addEventListener("click", () => changeCard("js", 1));
document.getElementById("js-Prev-Btn").addEventListener("click", () => changeCard("js", -1));

// DOTS

function updateDots(slideIndex, cardGroup) {
  const dots = document.querySelectorAll(`#${cardGroup} .dots .dot`);
  for (let i = 0; i < dots.length; i++) {
    if (i === slideIndex - 1) {
      dots[i].classList.add('active');
      dots[i].classList.remove('dot');
    } else {
      dots[i].classList.add('dot');
      dots[i].classList.remove('active');
    }
  }
}
