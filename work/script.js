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
  scrollProgress.style.background = `conic-gradient(#D4A276 ${scrollValue}%, #F3D5B5 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//SLIDING

// Objekt s názvy karet pro každou skupinu
const cardNames = {
  html: ["htmlcard1", "htmlcard2", "htmlcard3"],
  html2: ["html2card1", "html2card2"],
  css: ["csscard1", "csscard2", "csscard3"],
  js: ["jscard1", "jscard2", "jscard3"],
};

// Funkce pro posunutí na další nebo předchozí kartu pro danou skupinu
function changeCard(groupName, step) {
  const cards = cardNames[groupName];
  const currentCard = cards.findIndex((card) => getComputedStyle(document.getElementById(card)).display !== "none");
  const nextCard = (currentCard + cards.length + step) % cards.length;
  cards.forEach((card) => document.getElementById(card).style.display = "none");
  document.getElementById(cards[nextCard]).style.display = "block";
  setActiveDot(groupName, nextCard);
}

function setActiveDot(groupName, index) {
  const dots = document.querySelectorAll(`#${groupName} .dot`);
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Přidání event listenerů pro tlačítka pro každou skupinu
document.getElementById("html-Nxt-Btn").addEventListener("click", () => changeCard("html", 1));
document.getElementById("html-Prev-Btn").addEventListener("click", () => changeCard("html", -1));

document.getElementById("html2-Nxt-Btn").addEventListener("click", () => changeCard("html2", 1));
document.getElementById("html2-Prev-Btn").addEventListener("click", () => changeCard("html2", -1));

document.getElementById("css-Nxt-Btn").addEventListener("click", () => changeCard("css", 1));
document.getElementById("css-Prev-Btn").addEventListener("click", () => changeCard("css", -1));

document.getElementById("js-Nxt-Btn").addEventListener("click", () => changeCard("js", 1));
document.getElementById("js-Prev-Btn").addEventListener("click", () => changeCard("js", -1));
