// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax Effect
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    document.querySelector('.full-screen-bg').style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});
