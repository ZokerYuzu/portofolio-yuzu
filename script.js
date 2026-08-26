document.addEventListener('DOMContentLoaded', () => {
    // 1. TYPING ANIMATION
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const phrases = ["Kode & Kreativitas", "Sistem Informasi", "Laravel & PHP", "Web Developer"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        
        type();
    }

    // 2. SCROLL OBSERVER (AOS)
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => scrollObserver.observe(el));

    // 3. COUNTER ANIMATION
    const counterElements = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.getAttribute('data-target'));
                const duration = 1600;
                const isDecimal = target % 1 !== 0;
                const start = 0;
                let startTime = null;

                function animateCounter(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const percentage = Math.min(progress / duration, 1);
                    const current = start + (target - start) * percentage;
                    
                    if (isDecimal) {
                        el.textContent = current.toFixed(2);
                    } else {
                        el.textContent = Math.floor(current);
                    }

                    if (progress < duration) {
                        requestAnimationFrame(animateCounter);
                    } else {
                        el.textContent = isDecimal ? target.toFixed(2) : target;
                    }
                }
                
                requestAnimationFrame(animateCounter);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    counterElements.forEach(el => counterObserver.observe(el));

    // 4. ACTIVE NAV HIGHLIGHT
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    
    const navObserverOptions = {
        rootMargin: "-40% 0px -55% 0px"
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === currentId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => navObserver.observe(section));

    // 5. 3D TILT CARDS
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease';
        });
    });

    // 6. RIPPLE BUTTON
    const rippleBtns = document.querySelectorAll('.ripple-btn');
    rippleBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-circle');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 7. HAMBURGER MOBILE MENU
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const icon = hamburgerBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.remove('open');
                if (hamburgerBtn) {
                    const icon = hamburgerBtn.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });

    // 8. NAV BAR HIDE/SHOW ON SCROLL + ENHANCED BACKDROP
    // 9. BACK TO TOP
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        // Hide/Show Navbar
        if (navbar) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
                navbar.style.transition = 'transform 0.3s ease';
            } else {
                navbar.style.transform = 'translateY(0)';
                navbar.style.transition = 'transform 0.3s ease';
            }
            
            // Enhanced backdrop
            if (currentScroll > 60) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
        
        // Back to top visibility
        if (backToTopBtn) {
            if (currentScroll > 350) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
        
        lastScroll = currentScroll;
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 10. PROJECT FILTER TABS
    const filterTabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.project-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            tab.classList.add('active');
            
            const filterValue = tab.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Reset styling for animation
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'none';
                
                // Show matching cards
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block'; 
                    
                    // Retrigger animation
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        });
                    });
                }
            });
        });
    });

    // 12. SHOW TOAST FUNCTION
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Double rAF for transition
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                toast.classList.add('show');
            });
        });
        
        setTimeout(() => {
            toast.classList.remove('show');
            // Wait for fade out transition to finish before removing from DOM
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }

    // 11. COPY EMAIL TO CLIPBOARD WITH TOAST
    const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
    const emailToCopy = "zokeryudha00@gmail.com";
    
    copyEmailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (navigator.clipboard && window.isSecureContext) {
                // Navigator clipboard api method
                navigator.clipboard.writeText(emailToCopy).then(() => {
                    showToast('Email copied to clipboard!');
                }).catch(err => {
                    fallbackCopyTextToClipboard(emailToCopy);
                });
            } else {
                // Fallback method
                fallbackCopyTextToClipboard(emailToCopy);
            }
        });
    });

    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showToast('Email copied to clipboard!');
            } else {
                showToast('Failed to copy email.');
            }
        } catch (err) {
            showToast('Failed to copy email.');
        }

        document.body.removeChild(textArea);
    }
    
    // ==========================================
    // NEW ENHANCEMENTS
    // ==========================================

    // 13. SCROLL PROGRESS BAR
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // 14. CANVAS PARTICLES IN HERO
    const canvas = document.getElementById('hero-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        
        function setCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }
            draw() {
                ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            const numberOfParticles = Math.min(Math.floor(canvas.width * canvas.height / 15000), 100);
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    }

    // 15. SPOTLIGHT CARD EFFECT
    const spotlightCards = document.querySelectorAll('.spotlight-card');
    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 16. PROJECT MODAL DATA & LOGIC
    const projectData = {
        'hola': {
            title: 'Website Edukasi "Hola!"',
            image: 'assets/webhola.png',
            meta: ['⭐ Featured', 'Laravel', 'Innovillage 2025'],
            description: 'Aplikasi pembelajaran interaktif berbasis web untuk anak tunagrahita. Sistem ini didesain khusus dengan pendekatan aksesibilitas kognitif, menyediakan media belajar yang menarik dan mudah dipahami.',
            features: [
                'Audio interaktif untuk panduan belajar',
                'Materi pengenalan huruf, angka, bentuk & warna',
                'Sistem flashcard / kartu edukatif',
                'Mini-games kognitif (tebak bentuk, susun kata, puzzle)'
            ],
            techs: ['Laravel', 'PHP', 'Tailwind CSS', 'JavaScript', 'MySQL', 'Figma'],
            links: [
                { url: 'https://github.com/ZokerYuzu', icon: 'fab fa-github', text: 'Source Code', type: 'secondary' }
            ]
        }
        // Tambahkan data project lain di sini
    };

    const projectModal = document.getElementById('project-modal');
    
    // Attach click event only to cards with data-project
    document.querySelectorAll('.project-card[data-project]').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent opening if clicking on action buttons inside the card
            if (e.target.closest('.project-action-btn')) return;
            
            const projectId = card.getAttribute('data-project');
            const data = projectData[projectId];
            
            if (data && projectModal) {
                // Populate Modal Data
                document.getElementById('modal-image').src = data.image;
                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-description').textContent = data.description;
                
                // Meta badges
                document.getElementById('modal-meta').innerHTML = data.meta.map(m => 
                    `<span class="modal-badge">${m}</span>`
                ).join('');
                
                // Features
                document.getElementById('modal-features').innerHTML = `
                    <h4>Fitur Utama</h4>
                    <ul>${data.features.map(f => `<li>${f}</li>`).join('')}</ul>
                `;
                
                // Tech Stack
                document.getElementById('modal-techs').innerHTML = data.techs.map(t => 
                    `<span class="modal-tech-tag">${t}</span>`
                ).join('');
                
                // Action Buttons
                document.getElementById('modal-actions').innerHTML = data.links.map(l => `
                    <a href="${l.url}" target="_blank" class="modal-action-btn ${l.type}">
                        <i class="${l.icon}"></i> ${l.text}
                    </a>
                `).join('');
                
                // Show Modal
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }
        });
    });

    // Close Modal Function
    window.closeProjectModal = function() {
        if (projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore background scroll
        }
    };

    // Close modal on outside click
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeProjectModal();
            }
        });
    }

});
