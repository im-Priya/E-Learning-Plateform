// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});

// Modal functionality
function openSignInModal() {
    const modal = document.getElementById('signInModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSignInModal() {
    const modal = document.getElementById('signInModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openCourseModal(courseType) {
    const modal = document.getElementById('courseModal');
    const content = document.getElementById('courseModalContent');
    
    const courseData = getCourseData(courseType);
    content.innerHTML = generateCourseModalHTML(courseData);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
    const modal = document.getElementById('courseModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const signInModal = document.getElementById('signInModal');
    const courseModal = document.getElementById('courseModal');
    
    if (event.target === signInModal) {
        closeSignInModal();
    }
    if (event.target === courseModal) {
        closeCourseModal();
    }
});

// Course data
function getCourseData(courseType) {
    const courses = {
        python: {
            title: 'Python Full Stack Development',
            icon: 'fab fa-python',
            duration: '6 months',
            students: '2.5K',
            price: '$499',
            originalPrice: '$799',
            description: 'Master Python programming and full-stack web development with Django, React, and modern database technologies.',
            syllabus: {
                'Phase 1: Python Fundamentals': [
                    'Python Basics and OOP',
                    'Data Structures and Algorithms',
                    'File Handling and Exception Handling',
                    'Modules and Packages'
                ],
                'Phase 2: Web Development': [
                    'HTML, CSS, and JavaScript',
                    'Django Framework',
                    'RESTful APIs',
                    'Database Design (SQLite/PostgreSQL)'
                ],
                'Phase 3: Frontend Development': [
                    'React.js Fundamentals',
                    'State Management (Redux)',
                    'Component Architecture',
                    'Responsive Design'
                ],
                'Phase 4: Advanced Topics': [
                    'Authentication and Authorization',
                    'Deployment and DevOps',
                    'Testing and Debugging',
                    'Performance Optimization'
                ]
            },
            features: [
                'Live coding sessions',
                'Real-world projects',
                'Industry expert mentorship',
                'Job placement assistance',
                'Lifetime access to course materials'
            ]
        },
        java: {
            title: 'Java Full Stack Development',
            icon: 'fab fa-java',
            duration: '7 months',
            students: '1.8K',
            price: '$599',
            originalPrice: '$899',
            description: 'Learn enterprise-level Java development with Spring Boot, Angular, and microservices architecture.',
            syllabus: {
                'Phase 1: Java Core': [
                    'Java Fundamentals and OOP',
                    'Collections Framework',
                    'Exception Handling',
                    'Multithreading and Concurrency'
                ],
                'Phase 2: Spring Framework': [
                    'Spring Core and IoC',
                    'Spring Boot Framework',
                    'Spring Security',
                    'Spring Data JPA'
                ],
                'Phase 3: Frontend Development': [
                    'HTML, CSS, and JavaScript',
                    'Angular Framework',
                    'TypeScript Programming',
                    'Component Development'
                ],
                'Phase 4: Enterprise Development': [
                    'Microservices Architecture',
                    'RESTful APIs and SOAP',
                    'Database Design and Optimization',
                    'Deployment and CI/CD'
                ]
            },
            features: [
                'Enterprise-grade projects',
                'Spring Boot certification',
                'Code review sessions',
                'Interview preparation',
                'Resume building workshops'
            ]
        },
        mern: {
            title: 'MERN/MEAN Stack Development',
            icon: 'fab fa-node-js',
            duration: '5 months',
            students: '3.2K',
            price: '$449',
            originalPrice: '$699',
            description: 'Build modern web applications using MongoDB, Express.js, React.js, and Node.js.',
            syllabus: {
                'Phase 1: JavaScript Fundamentals': [
                    'ES6+ Features',
                    'Asynchronous Programming',
                    'DOM Manipulation',
                    'Modern JavaScript Patterns'
                ],
                'Phase 2: Backend Development': [
                    'Node.js and Express.js',
                    'MongoDB Database',
                    'RESTful API Development',
                    'Authentication and Authorization'
                ],
                'Phase 3: Frontend Development': [
                    'React.js Fundamentals',
                    'Hooks and Context API',
                    'State Management',
                    'Component Libraries'
                ],
                'Phase 4: Full Stack Integration': [
                    'API Integration',
                    'Real-time Features (Socket.io)',
                    'Deployment Strategies',
                    'Performance Optimization'
                ]
            },
            features: [
                'Full-stack projects',
                'Real-time application development',
                'MongoDB certification',
                'Git workflow training',
                'Deployment guidance'
            ]
        },
        cybersecurity: {
            title: 'Cybersecurity & Ethical Hacking',
            icon: 'fas fa-shield-alt',
            duration: '8 months',
            students: '1.5K',
            price: '$699',
            originalPrice: '$999',
            description: 'Learn to protect systems and networks from cyber threats through ethical hacking and security practices.',
            syllabus: {
                'Phase 1: Security Fundamentals': [
                    'Network Security Basics',
                    'Cryptography Principles',
                    'Security Protocols',
                    'Threat Modeling'
                ],
                'Phase 2: Ethical Hacking': [
                    'Penetration Testing',
                    'Vulnerability Assessment',
                    'Social Engineering',
                    'Web Application Security'
                ],
                'Phase 3: Defensive Security': [
                    'Security Monitoring',
                    'Incident Response',
                    'Forensic Analysis',
                    'Security Tools and Technologies'
                ],
                'Phase 4: Advanced Topics': [
                    'Cloud Security',
                    'IoT Security',
                    'Compliance and Regulations',
                    'Security Architecture'
                ]
            },
            features: [
                'Hands-on lab environments',
                'Certified Ethical Hacker (CEH) prep',
                'Real-world security scenarios',
                'Industry expert guidance',
                'Security certification path'
            ]
        },
        devops: {
            title: 'DevOps & Cloud Engineering',
            icon: 'fas fa-infinity',
            duration: '6 months',
            students: '2.1K',
            price: '$549',
            originalPrice: '$799',
            description: 'Master CI/CD pipelines, containerization, and cloud platforms for modern software delivery.',
            syllabus: {
                'Phase 1: DevOps Fundamentals': [
                    'DevOps Culture and Practices',
                    'Version Control with Git',
                    'Linux Administration',
                    'Shell Scripting'
                ],
                'Phase 2: Containerization': [
                    'Docker Fundamentals',
                    'Container Orchestration',
                    'Kubernetes Basics',
                    'Microservices Architecture'
                ],
                'Phase 3: CI/CD Pipelines': [
                    'Jenkins Automation',
                    'GitLab CI/CD',
                    'Infrastructure as Code',
                    'Configuration Management'
                ],
                'Phase 4: Cloud Platforms': [
                    'AWS/Azure Services',
                    'Cloud Security',
                    'Monitoring and Logging',
                    'Disaster Recovery'
                ]
            },
            features: [
                'Cloud platform access',
                'Real infrastructure projects',
                'DevOps certification prep',
                'Industry best practices',
                'Career transition support'
            ]
        }
    };
    
    return courses[courseType] || courses.python;
}

function generateCourseModalHTML(courseData) {
    return `
        <div class="course-modal-content">
            <div class="course-header">
                <div class="course-icon">
                    <i class="${courseData.icon}"></i>
                </div>
                <div class="course-info">
                    <h2>${courseData.title}</h2>
                    <p>${courseData.description}</p>
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> ${courseData.duration}</span>
                        <span><i class="fas fa-users"></i> ${courseData.students} students</span>
                        <span><i class="fas fa-star"></i> 4.8/5 rating</span>
                    </div>
                </div>
            </div>
            
            <div class="course-pricing">
                <div class="price-info">
                    <span class="current-price">${courseData.price}</span>
                    <span class="original-price">${courseData.originalPrice}</span>
                    <span class="discount">Save ${getDiscount(courseData.price, courseData.originalPrice)}</span>
                </div>
                <button class="btn btn-primary enroll-btn">
                    <i class="fas fa-graduation-cap"></i> Enroll Now
                </button>
            </div>
            
            <div class="course-syllabus">
                <h3>Course Syllabus</h3>
                ${Object.entries(courseData.syllabus).map(([phase, topics]) => `
                    <div class="syllabus-item">
                        <h4>${phase}</h4>
                        <ul>
                            ${topics.map(topic => `<li>${topic}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            
            <div class="course-features">
                <h3>What You'll Get</h3>
                <div class="features-grid">
                    ${courseData.features.map(feature => `
                        <div class="feature-item">
                            <i class="fas fa-check"></i>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function getDiscount(currentPrice, originalPrice) {
    const current = parseInt(currentPrice.replace('$', ''));
    const original = parseInt(originalPrice.replace('$', ''));
    const discount = original - current;
    return `$${discount}`;
}

// Form handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showMessage('Thank you! Your message has been sent successfully.', 'success');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

document.getElementById('signInForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span class="loading"></span> Signing In...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showMessage('Welcome back! You have been successfully signed in.', 'success');
        closeSignInModal();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Newsletter form
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        showMessage('Thank you for subscribing to our newsletter!', 'success');
        this.reset();
    }
});

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function switchToSignUp() {
    // Implementation for switching to sign up form
    showMessage('Sign up functionality coming soon!', 'success');
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.course-card, .feature, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Course card hover effects
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect disabled to avoid section overlap
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallax = document.querySelector('.hero');
//     if (parallax) {
//         const speed = scrolled * 0.5;
//         parallax.style.transform = `translateY(${speed}px)`;
//     }
// });

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / speed;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('K') ? 'K+' : (counter.textContent.includes('%') ? '%' : '+'));
                setTimeout(updateCounter, 1);
            } else {
                counter.textContent = counter.textContent.replace(/[^\d]/g, '') + (counter.textContent.includes('K') ? 'K+' : (counter.textContent.includes('%') ? '%' : '+'));
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
}); 