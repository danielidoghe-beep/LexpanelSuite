// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Get Started Buttons - Go to Login Page
const getStartedBtn = document.getElementById('getStartedBtn');
const readyBtn = document.getElementById('readyBtn');

if (getStartedBtn) {
  getStartedBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
}

if (readyBtn) {
  readyBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
}

// Simple search alert (you can improve later)
document.querySelector('.search-btn').addEventListener('click', () => {
  const input = document.querySelector('.search-input').value;
  if (input.trim() !== '') {
    alert('Searching for: ' + input + '\n(This will be connected later)');
  }
});
