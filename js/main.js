const arrowTop = document.querySelector(".arrow-up");
const allSections = Array.from(document.getElementsByTagName("section"));
const allLinks = Array.from(document.querySelectorAll(".nav-link"));
let allSlides = Array.from(document.querySelectorAll(".portfolio-card img "));
let lightboxContainer = document.querySelector(".lightbox");
let lightboxItem = document.querySelector(".lightbox-item");
let navbar = document.querySelector(".navbar")
let exit = document.querySelector(".exit");
let prev = document.querySelector(".left");
let next = document.querySelector(".right");
const bars = document.querySelectorAll(".progress-bar");
const navBar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const burgerIcon = document.querySelector(".burger-icon");
let currentSec = "";
console.log(allSlides);
arrowTop.addEventListener("click", scrollToTop);
window.addEventListener("scroll", () => {
  activeLink();
  changeNavbarColor();
  displayArrowBtn();
  increaseprogressBar();
});
window.onload = typingEffect;




let currentIndex = 0;

for (let i = 0; i < allSlides.length; i++) {
  allSlides[i].addEventListener("click", (event) => {
    console.log(event.target);
    displaySlide(event);

  });
}


function displaySlide(event) {
  currentIndex = allSlides.indexOf(event.target);
  let currentSrc = event.target.src;
  lightboxItem.style.backgroundImage = `url(${currentSrc})`;
  lightboxContainer.classList.replace("d-none", "d-flex")
}




function closeSlider() {

  lightboxContainer.classList.replace("d-flex", "d-none");
}
next.onclick = nextSlide;
prev.onclick = prevSlide;
exit.onclick = closeSlider

function nextSlide() {
  if (currentIndex == allSlides.length - 1) {
    return false;
  } else {
    currentIndex++;
    let currentSrc = allSlides[currentIndex].src;
    lightboxItem.style.backgroundImage = `url(${currentSrc})`;
  }
}

function prevSlide() {
  if (currentIndex == 0) {
    return false;
  } else {
    currentIndex--;
    let currentSrc = allSlides[currentIndex].src;
    lightboxItem.style.backgroundImage = `url(${currentSrc})`;
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      nextSlide();
      break;
    case "ArrowLeft":
      prevSlide();
      break;
    case "Escape":
      closeSlider();
  }
});



function changeNavbarColor() {
  if (document.documentElement.scrollTop >= allSections[1].offsetTop) {
    logo.classList.add("text-black");
    burgerIcon.classList.remove("text-white");
    navBar.classList.add("bg-white", "shadow");
    allLinks.forEach((link) => {
      link.classList.add("text-black");
    });
  } else {
    burgerIcon.classList.add("text-white");
    logo.classList.remove("text-black");
    navBar.classList.remove("bg-white", "shadow");
    allLinks.forEach((link) => {
      link.classList.remove("text-black");
    });
  }
}

function checkCurrentSec() {
  allSections.forEach((sec) => {
    if (document.documentElement.scrollTop >= sec.offsetTop - 200) {
      currentSec = sec.getAttribute("id");
      return currentSec;
    }
  });
}

function increaseprogressBar() {
  checkCurrentSec();
  if (currentSec == "about") {
    bars.forEach((bar) => {
      bar.style.width = `${bar.dataset.percantage}%`;
    });
  }
}

function activeLink() {
  checkCurrentSec();
  allLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(currentSec)) {
      link.classList.add("active");
    }
  });
}

function displayArrowBtn() {
  if (
    document.documentElement.scrollTop > 250 ||
    document.body.scrollTop > 250
  ) {
    arrowTop.style.display = "flex";
  } else {
    arrowTop.style.display = "none";
  }
}
function scrollToTop() {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function typingEffect() {
  let jobTittle = document.querySelector(".header-content .job-tittle");
  let text = "eveloper";
  let i = 0;
  let handler = setInterval(() => {
    jobTittle.append(text[i]);
    i++;
    if (i == text.length) {
      clearInterval(handler);
    }
  }, 100);
}
