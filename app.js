
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const formMessage = document.getElementById("formMessage");

  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        formMessage.innerHTML = `<br>Thanks for your message!`;
        formMessage.style.color = "green";
        form.reset();
      } else {
        formMessage.innerHTML = "Oops! Something went wrong.";
        formMessage.style.color = "red";
      }
    })
    .catch((error) => {
      formMessage.textContent = "There was an error submitting the form.";
      formMessage.style.color = "red";
    });
});
        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Custom cursor with image
        const cursor = document.querySelector('.cursor');
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        
        
        

        // Hero section animation
        document.addEventListener('DOMContentLoaded', function() {
            // Animate hero elements sequentially
            setTimeout(() => {
                document.getElementById('hero-title').style.animation = 'textAppear 1s forwards';
            }, 500);
            
            setTimeout(() => {
                document.getElementById('hero-description').style.animation = 'textAppear 1s forwards';
            }, 1000);
            
            setTimeout(() => {
                document.getElementById('hero-buttons').style.animation = 'textAppear 1s forwards';
            }, 1500);
        });

        // Navbar scroll effect
        
        
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Active link highlighting
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');
        
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 300) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });

        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (isElementInViewport(bar)) {
                    bar.style.width = width;
                }
            });
        }
        
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        window.addEventListener('scroll', animateSkillBars);
        // Initial check on page load
        animateSkillBars();

        