// Toggle hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const messagePanel = document.getElementById('message-panel');
const messageContainer = document.getElementById('message-container');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('nav ul li a'); // Correct selector for links
const homeLink = document.querySelector('.home-link');

// Track if the hamburger menu is currently open
let isMenuOpen = false;

hamburger.addEventListener('click', () => {
  if (isMenuOpen) {
    nav.style.transform = 'translateX(-100%)'; // Close from left
    hamburger.style.opacity = '1';
    isMenuOpen = false;
  } else {
    nav.style.transform = 'translateX(0)';
    hamburger.style.opacity = '0';
    isMenuOpen = true;
  }
});

// Show message panel
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    if (event.target.classList.contains('home-link')) {
      window.location.href = 'https://kareck1.github.io/Dellyck/'; // Redirect to the specified home page
      return; // Allow default behavior for the Home link
    }

    event.preventDefault(); // Prevent default link behavior
    const message = link.getAttribute('data-message');
    messageContainer.textContent = message;
    messagePanel.classList.add('active');
    nav.style.transform = 'translateX(-100%)'; // Close the hamburger menu
    hamburger.style.opacity = '0'; // Hide hamburger icon with animation
    isMenuOpen = false; // Update menu state
  });
});

// Close message panel
closeBtn.addEventListener('click', () => {
  messagePanel.classList.remove('active');
  // Use setTimeout to delay reappearance of the hamburger icon for smooth animation
  setTimeout(() => {
    hamburger.style.opacity = '1'; // Show hamburger icon with animation
  }, 300); // Match the delay to the CSS transition time
  isMenuOpen = false; // Update menu state
});
