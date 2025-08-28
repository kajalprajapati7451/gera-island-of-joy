 // Coming Soon Popup
    document.addEventListener('DOMContentLoaded', function() {
        const popup = document.getElementById('comingSoonPopup');
        const closeBtn = document.getElementById('closePopup');
        const closeBtnAlt = document.getElementById('closePopupBtn');
        
        setTimeout(() => {
            popup.classList.remove('hidden');
        }, 2000);
        
        
        closeBtn.addEventListener('click', () => {
            popup.classList.add('hidden');
        });
        
        closeBtnAlt.addEventListener('click', () => {
            popup.classList.add('hidden');
        });
        
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.add('hidden');
            }
        });
    });
// Function to open mobile menu
function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('block');
    document.body.style.overflow = 'hidden';
}

// Function to close mobile menu
function closeMobileMenuFunc() {
    mobileMenu.classList.remove('block');
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Event listeners
mobileMenuButton.addEventListener('click', openMobileMenu);
closeMobileMenu.addEventListener('click', closeMobileMenuFunc);

// Close menu when clicking on links
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenuFunc);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                closeMobileMenuFunc();
            }
            
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-pink-800');
        navbar.classList.remove('nav-gradient');
    } else {
        navbar.classList.remove('bg-pink-800');
        navbar.classList.add('nav-gradient');
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your enquiry! We will contact you shortly.');
    this.reset();
});

// Coming soon popup
const comingSoonPopup = document.getElementById('comingSoonPopup');
const closePopupBtn = document.getElementById('closePopupBtn');
const closePopup = document.getElementById('closePopup');

function showPopup() {
    comingSoonPopup.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hidePopup() {
    comingSoonPopup.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Show popup after 3 seconds
setTimeout(showPopup, 3000);

closePopupBtn.addEventListener('click', hidePopup);
closePopup.addEventListener('click', hidePopup);

// Close popup when clicking outside
comingSoonPopup.addEventListener('click', function(e) {
    if (e.target === comingSoonPopup) {
        hidePopup();
    }
});