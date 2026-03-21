document.addEventListener("DOMContentLoaded", () => {



    // ==========================================
    // 2. TYPING ANIMATION
    // ==========================================
    const phrases = ["Kode & Kreativitas", "Sistem Informasi", "Laravel & PHP", "Web Developer"];
    let phraseIdx = 0, charIdx = 0, isDeleting = false;
    const typingEl = document.getElementById("typing-text");

    function typeLoop() {
        if (!typingEl) return;
        const current = phrases[phraseIdx];

        if (!isDeleting) {
            typingEl.textContent = current.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                isDeleting = true;
                setTimeout(typeLoop, 1800);
                return;
            }
        } else {
            typingEl.textContent = current.substring(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
            }
        }
        setTimeout(typeLoop, isDeleting ? 55 : 90);
    }
    typeLoop();

    // ==========================================
    // 3. SCROLL OBSERVER — AOS + PROGRESS BARS + COUNTERS + ACTIVE NAV
    // ==========================================
    const fadeEls = document.querySelectorAll(".fade-in-up, .width-animate");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link[data-section]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -80px 0px", threshold: 0.1 });

    fadeEls.forEach(el => observer.observe(el));

    // Counter elements — trigger when stats row is visible
    const counters = document.querySelectorAll(".counter");
    let countersDone = false;
    const counterObserver = new IntersectionObserver((entries) => {
        if (countersDone) return;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countersDone = true;
                counters.forEach(counter => animateCounter(counter));
            }
        });
    }, { threshold: 0.5 });
    if (counters.length) counterObserver.observe(counters[0].closest("div") || counters[0]);

    function animateCounter(el) {
        const target = parseFloat(el.dataset.target);
        const isDecimal = !Number.isInteger(target);
        const duration = 1600;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                el.textContent = isDecimal ? target.toFixed(2) : target;
                clearInterval(timer);
                return;
            }
            el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
        }, 16);
    }


    // Active nav highlight on scroll
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle("active", link.dataset.section === entry.target.id);
                });
            }
        });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    sections.forEach(sec => sectionObserver.observe(sec));

    // ==========================================
    // 4. 3D TILT CARDS
    // ==========================================
    document.querySelectorAll(".tilt-card").forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const relX = e.clientX - rect.left - rect.width / 2;
            const relY = e.clientY - rect.top  - rect.height / 2;
            const tX = (relY / (rect.height / 2)) * -5;
            const tY = (relX / (rect.width  / 2)) *  5;
            card.style.transition = "transform 0.08s ease-out";
            card.style.transform  = `rotateX(${tX}deg) rotateY(${tY}deg) scale3d(1.02,1.02,1.02)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transition = "transform 0.5s ease-out";
            card.style.transform  = "rotateX(0) rotateY(0) scale3d(1,1,1)";
        });
    });

    // ==========================================
    // 5. RIPPLE BUTTON EFFECT
    // ==========================================
    document.querySelectorAll(".ripple-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const rect    = btn.getBoundingClientRect();
            const size    = Math.max(rect.width, rect.height);
            const ripple  = document.createElement("span");
            ripple.classList.add("ripple-circle");
            ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px;`;
            btn.appendChild(ripple);
            ripple.addEventListener("animationend", () => ripple.remove());
        });
    });

    // ==========================================
    // 6. HAMBURGER MOBILE MENU
    // ==========================================
    const hamburgerBtn  = document.getElementById("hamburger-btn");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const mobileMenu    = document.getElementById("mobile-menu");
    const mobileLinks   = document.querySelectorAll(".mobile-nav-link");

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("open");
            hamburgerIcon.className = isOpen
                ? "fas fa-times text-2xl pointer-events-none"
                : "fas fa-bars text-2xl pointer-events-none";
        });
        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
                hamburgerIcon.className = "fas fa-bars text-2xl pointer-events-none";
            });
        });
    }

    // ==========================================
    // 7. NAVBAR HIDE/SHOW ON SCROLL
    // ==========================================
    const navbar = document.getElementById("navbar");
    let lastY = 0;
    window.addEventListener("scroll", () => {
        const y = window.scrollY;

        // Back-to-top button
        const btn = document.getElementById("back-to-top");
        if (btn) btn.classList.toggle("visible", y > 350);

        // Navbar
        if (y > 80) {
            navbar.style.transform = y > lastY ? "translateY(-100%)" : "translateY(0)";
        } else {
            navbar.style.transform = "translateY(0)";
        }
        lastY = y;
    });

    // ==========================================
    // 8. BACK TO TOP
    // ==========================================
    const backBtn = document.getElementById("back-to-top");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

});
