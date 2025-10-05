// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact form function
const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;

  responseMsg.textContent = Salamat, 
  responseMsg.style.color = "#00bcd4";

  form.reset();
});
