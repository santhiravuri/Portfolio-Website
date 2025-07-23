// ========== Smooth Scroll for Nav Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========== Typing Effect ==========
const roles = ["Aspiring Software Engineer", "Frontend Developer", "AI/ML Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const typedText = document.getElementById("typed-text");
  if (!typedText) return;

  const current = roles[i];
  const displayed = current.substring(0, j);
  typedText.textContent = displayed;

  if (!isDeleting) {
    j++;
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(type, isDeleting ? 60 : 100);
}
document.addEventListener("DOMContentLoaded", type);

// ========== Dark Mode Toggle ==========
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Optional: store preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// ========== Load Theme on Startup ==========
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};
