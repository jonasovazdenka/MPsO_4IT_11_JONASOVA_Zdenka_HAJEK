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

  /*HTML
  const cards = document.querySelectorAll('.content');
  const prevButton = document.querySelector('#prev-button');
  const nextButton = document.querySelector('#next-button');
  let currentIndex = 0;
  
  function goToCard(index) {
    cards[currentIndex].classList.remove('active');
    currentIndex = index;
    cards[currentIndex].classList.add('active');
  }
  
  nextButton.addEventListener('click', () => {
    goToCard((currentIndex + 1) % cards.length);
  });
  
  prevButton.addEventListener('click', () => {
    goToCard((currentIndex - 1 + cards.length) % cards.length);
  });
  
  cards.forEach((card, index) => {
    if (index === currentIndex) {
      card.classList.add('active');
    }
  });*/const cards = document.querySelectorAll('.content');
console.log(cards);
const prevButton = document.querySelector('#prev-button');
console.log(prevButton);
const nextButton = document.querySelector('#next-button');
console.log(nextButton);

  
  

  //CSS
  let showCssCard1 = true;
  let showCssCard2 = false;

  document.getElementById("cssBtn").addEventListener("click", function() {
    if (showCssCard1) {
      document.getElementById("csscard1").style.display = "none";
      document.getElementById("csscard2").style.display = "block";
      showCssCard1 = false;
      showCssCard2 = true;
    } else {
      document.getElementById("csscard2").style.display = "none";
      document.getElementById("csscard1").style.display = "block";
      showCssCard2 = false;
      showCssCard1 = true;
    }
  });