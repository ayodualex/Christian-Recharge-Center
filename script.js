/* MOBILE MENU */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 956) {
      nav.style.display = "none";
    }
  });
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
const eventDate = new Date("December 31, 2025 21:00:00").getTime();
const countdown = document.getElementById("countdown");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "Started.......... Expecting you 😊.";
    clearInterval(timer);
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

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

// READ MORE / SHOW LESS
const readMoreBtn = document.querySelector(".read-more-btn");
const moreText = document.querySelector(".more-text");

readMoreBtn.addEventListener("click", () => {
  if (moreText.style.display === "block") {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  } else {
    moreText.style.display = "block";
    readMoreBtn.textContent = "Show Less";
  }
});
