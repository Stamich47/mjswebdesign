// MJS Web Design - JavaScript
console.log("🚀 MJS Web Design JavaScript loaded successfully!");

// Add structured data (JSON-LD) for SEO
function addStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MJS Web Design",
    description:
      "Professional website design and development services for small businesses and individuals",
    url: "https://mjswebdesign.com",
    telephone: "(424) 225-1294",
    email: "michael@mjswebdesign.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0522,
      longitude: -118.2437,
    },
    founder: {
      "@type": "Person",
      name: "Michael Stamich",
    },
    serviceType: "Web Design and Development",
    areaServed: {
      "@type": "State",
      name: "California",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Page Design",
            description:
              "Single page website design with contact form and mobile responsive design",
          },
          price: "150",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-page Website",
            description:
              "Custom multi-page website with up to 5 pages, SEO optimization, and social media integration",
          },
          price: "350",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hosting & Maintenance",
            description:
              "Website hosting with Cloudflare, SSL certificate, and ongoing maintenance",
          },
          price: "25",
          priceCurrency: "USD",
          billingIncrement: "Monthly",
        },
      ],
    },
  };

  // Create and append the script tag
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("📄 DOM Content Loaded - Initializing features...");

  // Add structured data
  addStructuredData();

  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileNavigation = document.querySelector(".mobile-navigation");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuToggle && mobileNavigation) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileNavigation.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");

      // Toggle hamburger animation
      const hamburgerLines =
        mobileMenuToggle.querySelectorAll(".hamburger-line");
      hamburgerLines.forEach((line, index) => {
        if (mobileMenuToggle.classList.contains("active")) {
          if (index === 0)
            line.style.transform = "rotate(45deg) translate(5px, 5px)";
          if (index === 1) line.style.opacity = "0";
          if (index === 2)
            line.style.transform = "rotate(-45deg) translate(7px, -6px)";
        } else {
          line.style.transform = "";
          line.style.opacity = "";
        }
      });
    });

    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileNavigation.classList.remove("active");
        mobileMenuToggle.classList.remove("active");

        const hamburgerLines =
          mobileMenuToggle.querySelectorAll(".hamburger-line");
        hamburgerLines.forEach((line) => {
          line.style.transform = "";
          line.style.opacity = "";
        });
      });
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight =
          document.querySelector(".site-header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight + 30;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Header scroll effect with dynamic background and logo
  const header = document.querySelector(".site-header");
  const heroSection = document.querySelector(".hero-section");
  const logo = document.querySelector(".site-branding .logo");
  let lastScrollTop = 0;
  let currentLogoSrc = "./assets/logo_white.png"; // Track current logo

  console.log("🎯 Header scroll handler initialized", {
    header,
    heroSection,
    logo,
  });

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = heroSection ? heroSection.offsetHeight : 800;

    // Calculate scroll progress through hero section (0 to 1)
    const heroScrollProgress = Math.min(scrollTop / (heroHeight - 100), 1);

    // Add/remove scrolled class
    if (scrollTop > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Set CSS custom property for background opacity transition
    header.style.setProperty("--scroll-progress", heroScrollProgress);

    // Dynamic logo switching based on scroll progress
    if (logo) {
      let newLogoSrc;

      if (heroScrollProgress < 0.5) {
        // Use white logo when navbar is dark (top of hero section)
        newLogoSrc = "./assets/logo_white.png";
      } else {
        // Use regular logo when navbar is light (scrolled past hero)
        newLogoSrc = "./assets/logo.png";
      }

      // Only change logo if it's different from current one
      if (newLogoSrc !== currentLogoSrc) {
        // Brief fade out, change logo, fade back in
        logo.style.opacity = "0.7";
        setTimeout(() => {
          logo.src = newLogoSrc;
          currentLogoSrc = newLogoSrc;
          logo.style.opacity = "1";
        }, 100);
      }
    }

    lastScrollTop = scrollTop;
  });

  // Form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      // Basic validation
      if (!data.name || !data.email || !data.message) {
        showNotification("Please fill in all required fields.", "error");
        return;
      }

      if (!isValidEmail(data.email)) {
        showNotification("Please enter a valid email address.", "error");
        return;
      }

      // Show loading state
      const submitButton = contactForm.querySelector(".btn-submit");
      const originalText = submitButton.textContent;
      submitButton.textContent = "SENDING...";
      submitButton.disabled = true;

      // Submit form data
      fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            showNotification(
              "Thank you for your message! I'll get back to you soon.",
              "success"
            );
            contactForm.reset();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          showNotification(
            "Sorry, there was an error sending your message. Please try again or contact me directly at michael@mjswebdesign.com",
            "error"
          );
        })
        .finally(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        });
    });
  }

  // Email validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Notification system
  function showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification");
    existingNotifications.forEach((notification) => notification.remove());

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" aria-label="Close notification">&times;</button>
            </div>
        `;

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            ${
              type === "success"
                ? "background-color: #10b981; color: white;"
                : ""
            }
            ${
              type === "error" ? "background-color: #ef4444; color: white;" : ""
            }
            ${type === "info" ? "background-color: #3b82f6; color: white;" : ""}
        `;

    const content = notification.querySelector(".notification-content");
    content.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        `;

    const closeButton = notification.querySelector(".notification-close");
    closeButton.style.cssText = `
            background: none;
            border: none;
            color: inherit;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Auto remove after 5 seconds
    const autoRemoveTimeout = setTimeout(() => {
      removeNotification(notification);
    }, 5000);

    // Close button functionality
    closeButton.addEventListener("click", () => {
      clearTimeout(autoRemoveTimeout);
      removeNotification(notification);
    });

    function removeNotification(element) {
      element.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 300);
    }
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".service-card, .service-detail-item, .about-content, .pricing-card"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });

  // Add animation CSS
  const animationCSS = `
        .service-card,
        .service-detail-item,
        .about-content,
        .pricing-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .service-card.animate-in,
        .service-detail-item.animate-in,
        .about-content.animate-in,
        .pricing-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-card {
            transition-delay: 0.1s;
        }
        
        .service-card:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .service-card:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .site-header.scrolled {
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
    `;

  // Add animation styles to head
  const style = document.createElement("style");
  style.textContent = animationCSS;
  document.head.appendChild(style);

  // Phone number formatting
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      // Remove all non-digit characters
      let value = e.target.value.replace(/\D/g, "");

      // Format as (XXX) XXX-XXXX
      if (value.length >= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(
          6,
          10
        )}`;
      } else if (value.length >= 3) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      }

      e.target.value = value;
    });
  }

  // Add loading states to buttons with links
  const linkButtons = document.querySelectorAll("a.btn");
  linkButtons.forEach((button) => {
    if (
      (button.href && button.href.startsWith("tel:")) ||
      button.href.startsWith("sms:")
    ) {
      button.addEventListener("click", function () {
        const originalText = this.textContent;
        this.textContent = "Opening...";
        setTimeout(() => {
          this.textContent = originalText;
        }, 1000);
      });
    }
  });

  // Keyboard navigation support
  document.addEventListener("keydown", function (e) {
    // Close mobile menu with Escape key
    if (
      e.key === "Escape" &&
      mobileNavigation &&
      mobileNavigation.classList.contains("active")
    ) {
      mobileNavigation.classList.remove("active");
      mobileMenuToggle.classList.remove("active");

      const hamburgerLines =
        mobileMenuToggle.querySelectorAll(".hamburger-line");
      hamburgerLines.forEach((line) => {
        line.style.transform = "";
        line.style.opacity = "";
      });
    }
  });

  // Add focus trap for mobile menu
  if (mobileNavigation) {
    const focusableElements = mobileNavigation.querySelectorAll(
      "a, button, input, textarea, select"
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    mobileNavigation.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }

  // Active navigation state
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

    let current = "";
    const headerHeight = document.querySelector(".site-header").offsetHeight;
    const scrollPos = window.scrollY + headerHeight + 30; // Match smooth scroll offset

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // Update active nav on scroll
  window.addEventListener("scroll", updateActiveNavLink);
  // Set initial active state
  updateActiveNavLink();

  // Console welcome message
  console.log(
    "%cMJS Web Design",
    "color: #0274be; font-size: 20px; font-weight: bold;"
  );
  console.log(
    "%cThanks for checking out the code! If you need a website, feel free to contact me.",
    "color: #4b4f58; font-size: 14px;"
  );
  console.log("%c📞 (424) 225-1294", "color: #0274be; font-size: 14px;");
});
