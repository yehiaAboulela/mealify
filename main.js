// active nav

const navElement = document.querySelector(".header-nav");
const navBtns = document.querySelectorAll(".nav-link");
navElement.addEventListener("click", function (e) {
  if (e.target.classList[0] === "nav-link") {
    navBtns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  }
});

// dark mode

const darkMood = document.querySelector(".dark-mode-btn");
const lightMode = document.querySelector(".light-mode-btn");
const nav = document.querySelector(".display-none");
const svg = document.querySelectorAll("svg");

darkMood.addEventListener("click", function () {
  document.querySelector("body").classList.add("dark-mode");
  darkMood.classList.remove("active-btn");
  lightMode.classList.add("active-btn");
  svg.forEach((cur) => console.log(cur.classList.add("dark-svg")));
});
lightMode.addEventListener("click", function () {
  document.querySelector("body").classList.remove("dark-mode");
  lightMode.classList.remove("active-btn");
  darkMood.classList.add("active-btn");
  svg.forEach((cur) => console.log(cur.classList.remove("dark-svg")));
});

// burger minu

const burgerMinuBtn = document.querySelector(".burger-minu");
const burgerMinuExit = document.querySelector(".nav-exit");
const sideNav = document.querySelector(".side-bar-nav");
const overlay = document.querySelector(".side-bar-overlay");

burgerMinuBtn.addEventListener("click", function () {
  sideNav.classList.add("active");
  overlay.classList.add("active");
});

const removeNav = function () {
  sideNav.classList.remove("active");
  overlay.classList.remove("active");
};

burgerMinuExit.addEventListener("click", removeNav);

overlay.addEventListener("click", removeNav);

sideNav.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) removeNav;
});
