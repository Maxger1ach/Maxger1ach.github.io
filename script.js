// Add a greeting effect
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my stunning website!');
  });
  
  // Add a cool feature: dynamic greetings
  const greetings = ['Hello!', 'Welcome!', 'Hi there!', 'Enjoy your visit!'];
  const heroText = document.querySelector('.hero p');
  
  let i = 0;
  setInterval(() => {
    heroText.textContent = greetings[i];
    i = (i + 1) % greetings.length;
  }, 3000);
  
  // Placeholder for adding dynamic interaction logic if needed.
console.log("Welcome to my tech-savvy website!");
