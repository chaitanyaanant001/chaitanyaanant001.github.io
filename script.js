document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const revealItems = document.querySelectorAll('.timeline-item, .skill-card, .project-card, .metric-card, .cert-card, .about-box, .contact-box');

    revealItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });

    console.log("Cybersecurity portfolio loaded successfully.");
});