document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        distance: '50px',
        duration: 1000,
        reset: true,
        delay: 200
    });

    // Apply animations to sections
    sr.reveal('.content-text', {
        origin: 'left'
    });

    sr.reveal('.content-image', {
        origin: 'right'
    });

    // Initial animations for intro section
    const profileImage = document.querySelector('.profile-image');
    const profileText = document.querySelector('.profile-text');

    if (profileImage && profileText) {
        profileImage.style.opacity = '0';
        profileImage.style.transform = 'translateY(-100px)';
        profileText.style.opacity = '0';
        profileText.style.transform = 'translateY(100px)';

        setTimeout(() => {
            profileImage.style.transition = 'all 1s ease';
            profileText.style.transition = 'all 1s ease';
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'translateY(0)';
            profileText.style.opacity = '1';
            profileText.style.transform = 'translateY(0)';
        }, 500);
    }

    // Add smooth navigation for offcanvas menu
    const navLinks = document.querySelectorAll('.offcanvas .nav-link');
    const offcanvas = document.querySelector('.offcanvas');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            
            // Add hiding class for animation
            offcanvas.classList.add('hiding');
            
            // Wait for animation to complete before hiding and navigating
            setTimeout(() => {
                bsOffcanvas.hide();
                window.location.hash = target;
                // Remove the hiding class after the menu is closed
                setTimeout(() => {
                    offcanvas.classList.remove('hiding');
                }, 500);
            }, 300);
        });
    });
});
