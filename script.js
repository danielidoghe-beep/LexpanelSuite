// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Get Started Buttons
document.getElementById('getStartedBtn').addEventListener('click', () => {
  window.location.href = 'login.html';
});

document.getElementById('readyBtn').addEventListener('click', () => {
  window.location.href = 'login.html';
});
