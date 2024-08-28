homeLink.addEventListener('click', (event) => {
  window.location.href = 'https://kareck1.github.io/Dellyck/';
});
document.addEventListener('DOMContentLoaded', () => {
  const tabBoxes = document.querySelectorAll('.tab-box');
  const animatedPanel = document.getElementById('animated-panel');
  
  tabBoxes.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tab boxes and hide all panels
      tabBoxes.forEach(t => t.classList.remove('active'));
      animatedPanel.style.display = 'none';

      // Add active class to the clicked tab
      tab.classList.add('active');
      
      // Show the animated panel
      animatedPanel.style.display = 'block';
    });
  });
});
