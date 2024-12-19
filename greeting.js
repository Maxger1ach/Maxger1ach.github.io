// Function to display greeting based on the time of day
function getGreeting() {
    const hour = new Date().getHours();
    let greetingMessage;

    if (hour >= 5 && hour < 12) {
        greetingMessage = "Good Morning!";
    } else if (hour >= 12 && hour < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    return greetingMessage;
}

// Function to animate typing effect
function typeGreeting(message, element) {
    let i = 0;
    let speed = 100; // typing speed in milliseconds

    function type() {
        if (i < message.length) {
            element.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Set the greeting message in the DOM with typing effect
document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById('greeting-message');
    const greetingMessage = getGreeting();
    
    typeGreeting(greetingMessage, greetingElement);
});

// Adding interactive hover effect
document.getElementById('greeting-message').addEventListener('mouseover', function() {
    this.style.color = '#ff0099';
    this.style.textShadow = '0 0 20px #ff0099, 0 0 30px #ff0099';
    this.style.transform = 'scale(1.1)';
});

document.getElementById('greeting-message').addEventListener('mouseout', function() {
    this.style.color = '';
    this.style.textShadow = '';
    this.style.transform = '';
});
