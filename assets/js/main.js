document.addEventListener('DOMContentLoaded', () => {
    // Simple scroll interaction for header
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.add('bg-white/95');
                nav.classList.add('backdrop-blur-md');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.remove('bg-white/95');
                nav.classList.remove('backdrop-blur-md');
            }
        }
    });

    // Interactive hover sound effect simulation (visual only)
    const cards = document.querySelectorAll('.card-shadow');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(-5deg)';
            }
        });
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Mobile menu toggle logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }

    // Highlight active nav link in orange
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Exact match for the path, ignore homepage logo link
        if ((href === currentPath || href === currentPath.split('/').pop() || (currentPath === '/' && href === '/index.html')) && href !== '/' && href !== '/index.html') {
            // Apply orange color
            link.classList.remove('text-on-surface-variant', 'dark:text-surface-variant', 'text-primary');
            link.classList.add('text-accent-vibrant', 'dark:text-accent-vibrant');
            
            // If it's inside a dropdown, also highlight the parent button
            const dropdown = link.closest('.group');
            if (dropdown) {
                const btn = dropdown.querySelector('button');
                if (btn) {
                    btn.classList.remove('text-on-surface-variant', 'dark:text-surface-variant');
                    btn.classList.add('text-accent-vibrant', 'dark:text-accent-vibrant');
                }
            }
        }
    });
});
