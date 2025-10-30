document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("waForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
      alert("Harap isi nama dan pesan.");
      return;
    }

    const phone = "6289670323475"; // GANTI dengan nomor kamu
    const text = `Halo, saya ${name}. ${message}`;
    const encodedText = encodeURIComponent(text);
    const waLink = `https://wa.me/${phone}?text=${encodedText}`;

    alert("pesan berhasil dikirim")
    
    form.reset();
    name.value = "";
    message.value = "";

    // Buka di tab baru
    window.open(waLink, "_blank");
    
  });
});
// Enhanced Scroll Animations for Amor Flowers Website
document.addEventListener("DOMContentLoaded", function () {
  // WhatsApp Form functionality
  const form = document.getElementById("waForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
      alert("Harap isi nama dan pesan.");
      return;
    }

    const phone = "6289670323475"; // GANTI dengan nomor kamu
    const text = `Halo, saya ${name}. ${message}`;
    const encodedText = encodeURIComponent(text);
    const waLink = `https://wa.me/${phone}?text=${encodedText}`;

    alert("Pesan berhasil dikirim");
    
    form.reset();

    // Buka di tab baru
    window.open(waLink, "_blank");
  });

  // =================== SCROLL ANIMATIONS ===================

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
      navbar.classList.remove('scrolled');
      navbar.style.background = 'transparent';
    }
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Animation observer
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Add animation delay for staggered effects
        const delay = Math.random() * 300;
        setTimeout(() => {
          element.classList.add('animate');
        }, delay);
        
        // Stop observing once animated
        animationObserver.unobserve(element);
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  function addAnimationClasses() {
    // Hero section animations
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
      heroContent.classList.add('fade-in-left');
      animationObserver.observe(heroContent);
    }
    
    if (heroImage) {
      heroImage.classList.add('fade-in-right');
      animationObserver.observe(heroImage);
    }

    // About section animations
    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutImage) {
      aboutImage.classList.add('fade-in-left');
      animationObserver.observe(aboutImage);
    }
    
    if (aboutContent) {
      aboutContent.classList.add('fade-in-right');
      animationObserver.observe(aboutContent);
    }

    // Product cards animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
      card.classList.add('fade-in-up');
      card.style.animationDelay = `${index * 0.1}s`;
      animationObserver.observe(card);
    });

    // Superiority cards animations
    const superiorityCards = document.querySelectorAll('.superiority-card');
    superiorityCards.forEach((card, index) => {
      card.classList.add('fade-in-up');
      card.style.animationDelay = `${index * 0.15}s`;
      animationObserver.observe(card);
    });

    // Testimonial cards animations
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
      card.classList.add('fade-in-up');
      card.style.animationDelay = `${index * 0.2}s`;
      animationObserver.observe(card);
    });

    // Section titles animations
    const sectionTitles = document.querySelectorAll('.section-title, .products-title, .superiority-title, .testimonial-title, .order-title');
    sectionTitles.forEach(title => {
      title.classList.add('fade-in-down');
      animationObserver.observe(title);
    });

    // Order form animations
    const orderContent = document.querySelector('.order-content');
    if (orderContent) {
      orderContent.classList.add('fade-in-left');
      animationObserver.observe(orderContent);
    }

    // Footer animations
    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
      footerContent.classList.add('fade-in-up');
      animationObserver.observe(footerContent);
    }
  }

  // Initialize animations
  addAnimationClasses();

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link, .shop-btn').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href;
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          
          // Smooth scroll with easing
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Parallax effect for hero background
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::after, .hero-image');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      const yPos = -(scrolled * speed);
      if (element.style) {
        element.style.transform = `translateY(${yPos}px)`;
      }
    });
    
    ticking = false;
  }

  function requestParallax() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestParallax);

  // Counter animation for numbers (if you want to add counting effects)
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
  }

  // Hover effects for interactive elements
  function addHoverEffects() {
    // Product cards hover effect
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.03)';
        this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      });
    });

    // Superiority cards hover effect
    const superiorityCards = document.querySelectorAll('.superiority-card');
    superiorityCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotate(2deg)';
        this.style.boxShadow = '0 20px 40px rgba(245, 189, 213, 0.3)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
        this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
      });
    });

    // Button click effects
    const buttons = document.querySelectorAll('.shop-btn, .order-btn');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Initialize hover effects
  addHoverEffects();

  // Scroll progress indicator (optional)
  function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      
      progressBar.style.width = scrollPercent + '%';
    });
  }

  // Initialize scroll progress (uncomment if you want this feature)
  // createScrollProgress();

  // Image lazy loading effect
  function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.classList.add('lazy');
      imageObserver.observe(img);
    });
  }

  // Initialize lazy loading
  lazyLoadImages();

  // Text typing effect for hero title (optional)
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }

  // Initialize typing effect (uncomment if you want this feature)
  // const heroTitle = document.querySelector('.hero-title');
  // if (heroTitle) {
  //   const originalText = heroTitle.textContent;
  //   setTimeout(() => {
  //     typeWriter(heroTitle, originalText, 100);
  //   }, 1000);
  // }

  // Floating animation for elements
  function addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.hero-image, .superiority-card');
    
    floatingElements.forEach((element, index) => {
      let direction = 1;
      let position = 0;
      const speed = 0.02 + (index * 0.01);
      const amplitude = 10 + (index * 5);
      
      function animate() {
        position += speed * direction;
        
        if (position >= amplitude || position <= -amplitude) {
          direction *= -1;
        }
        
        element.style.transform += ` translateY(${position}px)`;
        requestAnimationFrame(animate);
      }
      
      // Start animation after a delay
      setTimeout(() => {
        animate();
      }, index * 200);
    });
  }

  // Initialize floating animation (uncomment if you want this feature)
  // addFloatingAnimation();

  console.log('🌸 Amor Flowers - Scroll animations initialized successfully!');
});
