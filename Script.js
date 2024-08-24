navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    if (event.target.classList.contains('home-link')) {
      window.location.href = 'https://kareck1.github.io/Dellyck/'; // Corrected URL for Home
      return; // Allow default behavior for the Home link
    }

    event.preventDefault(); // Prevent default link behavior
    const message = link.getAttribute('data-message');
    messageContainer.textContent = message;
    messagePanel.classList.add('active');
    nav.style.transform = 'translateX(100%)'; // Close the hamburger menu
    hamburger.style.display = 'none'; // Hide hamburger icon
  });
});
