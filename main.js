  
        // Loading Animation
        window.addEventListener('load', () => {
            const loader = document.getElementById('loading');
            loader.style.display = 'none';
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Back to Top Button
        const backToTopButton = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Lightbox
        const menuImages = document.querySelectorAll('.card-menu img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        menuImages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });

        document.querySelector('.lightbox .close').addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Testimonial Carousel
        const testimonials = document.querySelectorAll('.testimonial');
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonials.forEach(t => t.style.display = 'none');
            testimonials[index].style.display = 'block';
        }

        document.querySelector('.testimonial-nav.prev').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });

        document.querySelector('.testimonial-nav.next').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });

        // Form Validation and Submission
        function handleSubmit(event) {
            event.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;

            // Reset error messages
            document.querySelectorAll('.error-message').forEach(err => err.textContent = '');

            // Validate name
            if (name.value.length < 2) {
                document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
                isValid = false;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }

            // Validate message
            if (message.value.length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission
                const submitButton = event.target.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = 'SENDING...';

                setTimeout(() => {
                    alert('Thank you for your message! We will get back to you soon.');
                    event.target.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'SEND';
                }, 1500);
            }

            return false;
        }

        // Existing scripts
        window.addEventListener("scroll", function () {
            const header = document.getElementById("header");
            header.classList.toggle("header-scroll", window.scrollY > 0);
        });

        function menuToggle() {
            const menu = document.querySelector(".menu-toggle");
            const navMobile = document.querySelector(".navbar-mobile");
            menu.classList.toggle("active");
            navMobile.classList.toggle("active");
        }
   