// ===== TOGGLE NAV ===== //
const menu = document.querySelector(".nav_menu");

const toggle_menu = document.querySelector("#nav_toggle");

toggle_menu.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// ===== GSAP ANIMATION ===== //

// ===== NAVBAR ===== //
gsap.from(".logo, .nav_toggle_btn", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 10,
});

gsap.from(".nav_menu_list_item", {
  opacity: 0,
  duration: 0.75,
  delay: 2.1,
  y: 5,
  stagger: 0.2,
});

// ===== HOME ===== //
gsap.from(".home__offer", {
  opacity: 0,
  duration: 1,
  delay: 1.6,
  y: 30,
});

gsap.from(".home__title", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
});
gsap.from(".home__desc", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 30,
});

gsap.from(".home__cta", {
  opacity: 0,
  duration: 1,
  delay: 2.3,
  y: 20,
});

gsap.from(".bulb_img, .saturn_img, .saturn_img_2", {
  opacity: 0,
  duration: 1,
  delay: 1.6,
  y: 30,
});

gsap.from(".hero_img", {
  opacity: 0,
  duration: 1,
  delay: 2.8,
  y: 10,
});

gsap.from(".bg_fade_1, .bg_fade_2", {
  opacity: 0,
  duration: 2,
  delay: 3,
});

// ===== FOOTER ===== //
gsap.from(".footer", {
  opacity: 0,
  duration: 0.88,
  delay: 3.2,
  y: 20,
});

// ===== STUDENT CARD ===== //
gsap.from(".student_card", {
  opacity: 0,
  duration: 1,
  delay: 3.5,
  y: 5,
  stagger: 0.2,
});
