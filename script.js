/* MOBILE MENU */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

/* SLIDER */
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

/* PAYSTACK LINK */
document.getElementById("donateBtn").addEventListener("click", () => {
//   window.open("https://paystack.com/pay/YOUR-LINK", "_blank");
});

/* COUNTDOWN */
const eventDate = new Date("December 26, 2025 4:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  countdown.innerHTML = `${d} Days ${h} Hours ${m} Minutes`;
}, 1000);

/* SCROLL ANIMATION */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});
