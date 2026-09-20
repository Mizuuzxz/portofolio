const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const header = document.querySelector('header');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 80) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const typingText = document.getElementById('typingText');

if (typingText) {
    const texts = [
        'Front End Developer',
        'Student & Learner',
        'Creative Developer',
        'Technology Enthusiast'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];

        if (!isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 90);
    }

    typeEffect();
}

const contactBtn = document.getElementById('contactBtn');

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        alert('Terima kasih sudah tertarik! Saat ini fitur kontak masih dalam pengembangan.');
    });
}
