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

      
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
        
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
        
        
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
       
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled-nav');
            } else {
                nav.classList.remove('scrolled-nav');
            }
        });
        
      
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    if (mobileMenu.classList.contains('show')) {
                        mobileMenu.classList.remove('show');
                        document.body.style.overflow = '';
                    }
                }
            });
        });
        
        
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your enquiry! We will contact you shortly.');
                this.reset();
            });
        }
        
        
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-down, .animate-slide-left, .animate-slide-right');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translate(0, 0)';
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);