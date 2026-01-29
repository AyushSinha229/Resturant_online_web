// MOBILE NAV
toggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
});

// FAKE FORM FEEDBACK
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.querySelector(".form-status").textContent = "✔ Submitted successfully";
  });
});
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = form.querySelector(".form-status");
    status.textContent = "✓ Submitted successfully";
  });
});
