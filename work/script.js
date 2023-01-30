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
let showHtmlCard1 = true;
let showHtmlCard2 = false;

  //HTML
document.getElementById("htmlBtn").addEventListener("click", function() {
  if (showHtmlCard1) {
    document.getElementById("htmlcard1").style.display = "none";
    document.getElementById("htmlcard2").style.display = "block";
    showHtmlCard1 = false;
    showHtmlCard2 = true;
  } else {
    document.getElementById("htmlcard2").style.display = "none";
    document.getElementById("htmlcard1").style.display = "block";
    showHtmlCard2 = false;
    showHtmlCard1 = true;
  }
});

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
      showHtmlCard1 = true;
    }
  });