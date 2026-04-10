document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SMART NAVBAR SCROLL EFFECT
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // User is scrolling DOWN - hide navbar
            navbar.style.transform = "translate(-50%, -150%)";
        } else {
            // User is scrolling UP - show navbar
            navbar.style.transform = "translate(-50%, 0)";
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });

    // 2. PAGE NAVIGATION LOGIC
    // data-target to the links routing to pages (Logo, Nav, Footer)
    const navLinks = document.querySelectorAll("[data-target]");
    const pages = document.querySelectorAll(".page-section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute("data-target");

            // Update main nav active states
            document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
            
            // Re-apply active class to nav link if it wasn't the logo that was clicked
            const correspondingNavLink = document.querySelector(`.nav-links a[data-target="${targetId}"]`);
            if (correspondingNavLink) {
                correspondingNavLink.classList.add("active");
            }

            // Hide all pages & reset animations
            pages.forEach(page => {
                page.classList.remove("active");
                page.style.animation = 'none';
                page.offsetHeight; 
                page.style.animation = null; 
            });

            // Show the target page
            const targetPage = document.getElementById(targetId);
            if(targetPage) {
                targetPage.classList.add("active");
            }

            // Scroll back to top smoothly
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // --- 3. ARCHIVE CAROUSEL LOGIC ---
    const track = document.getElementById("graphic-carousel");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    const totalSlides = dots.length;

    if (track && dots.length > 0) {
        // Function to move the slide
        const moveCarousel = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(d => d.classList.remove("active"));
            dots[index].classList.add("active");
            currentIndex = index;
        };

        // Auto-swipe every 4 seconds
        let autoSlide = setInterval(() => {
            let nextIndex = (currentIndex + 1) % totalSlides;
            moveCarousel(nextIndex);
        }, 4000);

        // Allow user to click dots to jump to a specific image
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                clearInterval(autoSlide); // Pause auto-swipe if they click manually
                moveCarousel(index);
                // Restart auto-swipe after a delay
                autoSlide = setInterval(() => {
                    let nextIndex = (currentIndex + 1) % totalSlides;
                    moveCarousel(nextIndex);
                }, 4000);
            });
        });
    }

    // --- 4. SCROLL REVEAL ANIMATIONS ---
    // This watches elements as you scroll down the page
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Grab all elements with the 'reveal-on-scroll' class and observe them
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => scrollObserver.observe(el));
    
    });

    // --- 5. ABOUT ME CAMERA CAROUSEL LOGIC ---
    const cameraTrack = document.getElementById('camera-track');
    const btnLeft = document.getElementById('cam-left');
    const btnRight = document.getElementById('cam-right');

    if (cameraTrack && btnLeft && btnRight) {
        const photos = document.querySelectorAll('.camera-photo');
        let currentCamIndex = 0;
        const totalCamPhotos = photos.length;

        // Function to slide the track
        const updateCameraScreen = () => {
            cameraTrack.style.transform = `translateX(-${currentCamIndex * 100}%)`;
        };

        // Click Right
        btnRight.addEventListener('click', () => {
            currentCamIndex = (currentCamIndex + 1) % totalCamPhotos; // Loops back to start
            updateCameraScreen();
        });

        // Click Left
        btnLeft.addEventListener('click', () => {
            currentCamIndex = (currentCamIndex - 1 + totalCamPhotos) % totalCamPhotos; // Loops to end
            updateCameraScreen();
        });
    }

});