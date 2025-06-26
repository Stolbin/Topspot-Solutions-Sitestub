const img = document.getElementById("main-bg");
const isMobile = window.innerWidth <= 1020;

img.src = isMobile
  ? "./images/main_img_320_1.webp"
  : "./images/main_img_1200_1.webp";
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
  btn.classList.add("stopped");
});
