// Header scroll effect
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLightTheme = body.classList.contains('light-theme');

    // Save preference to localStorage
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
});

// Language toggle functionality
const langToggle = document.getElementById('lang-toggle');
let isRussian = true;

langToggle.addEventListener('click', () => {
    isRussian = !isRussian;
    langToggle.textContent = isRussian ? 'РУ' : 'EN';

    // Update all text content based on language
    updateLanguage();
});

// Function to update text content based on selected language
function updateLanguage() {
    if (!isRussian) {
        // English translations
        document.querySelector('.main-heading').innerHTML = 'Management and Sales<br>with AI';
        document.querySelector('.desc-part1').textContent = 'Unified AI assistant for social media management, customer relations and sales';
        document.querySelector('.desc-part2').textContent = '— smart, fast and always online.';
        document.querySelector('.cta-button').textContent = 'CONNECT';
        document.querySelector('.stat-label:nth-child(2)').textContent = 'Full Access';
        document.querySelector('.stat-label:nth-child(4)').textContent = 'Days FREE';
        document.querySelector('.stat-label:nth-child(6)').textContent = 'Support';
        document.querySelector('.card-heading:nth-child(1)').textContent = 'Manages Social Media';
        document.querySelector('.card-subtext:nth-child(2)').textContent = 'Auto-posting to your channels. AI creates texts and images in seconds.';
        document.querySelector('.card-heading:nth-child(3)').textContent = 'Answers Customers';
        document.querySelector('.card-subtext:nth-child(4)').textContent = 'AI bot knows your business and products 24/7. You sleep - it sells.';
        document.querySelector('.card-heading:nth-child(5)').textContent = 'Helps with Products';
        document.querySelector('.card-subtext:nth-child(6)').textContent = 'Catalog, crawler and services with AI descriptions. Import site in a few clicks.';
        document.querySelector('.pricing-title').textContent = 'Plans';
        document.querySelector('.badge-label:nth-child(2)').textContent = 'Trial';
        document.querySelector('.badge-label:nth-child(4)').textContent = 'Basic';
        document.querySelector('.badge-label:nth-child(6)').textContent = 'Advanced';
        document.querySelector('.service-subtitle').textContent = 'Turnkey connection';
        document.querySelector('.service-description').textContent = 'Business analysis, bot setup, product upload, training + SMM tariff for the first month';
        document.querySelector('.details-btn').textContent = 'MORE ABOUT SERVICES';
        document.querySelector('.nav-link:nth-child(1)').textContent = 'HOME';
        document.querySelector('.nav-link:nth-child(2)').textContent = 'FOR PARTNERS';
        document.querySelector('.nav-link:nth-child(3)').textContent = 'FOR INVESTORS';
        document.querySelector('.nav-link:nth-child(4)').textContent = 'HELP';
        document.querySelector('.start-btn').textContent = 'START';
    } else {
        // Russian text (original)
        document.querySelector('.main-heading').innerHTML = 'Управление и продажи<br>с помощью АИ';
        document.querySelector('.desc-part1').textContent = 'Единый ИИ-помощник для управления социальными сетями, клиентами и продажами';
        document.querySelector('.desc-part2').textContent = '— умный, быстрый и всегда онлайн.';
        document.querySelector('.cta-button').textContent = 'ПОДКЛЮЧИТЬ';
        document.querySelector('.stat-label:nth-child(2)').textContent = 'Полный доступ';
        document.querySelector('.stat-label:nth-child(4)').textContent = 'Дня БЕСПЛАТНО';
        document.querySelector('.stat-label:nth-child(6)').textContent = 'Поддержка';
        document.querySelector('.card-heading:nth-child(1)').textContent = 'Ведёт соцсети';
        document.querySelector('.card-subtext:nth-child(2)').textContent = 'Автопостинг в ваши каналы. AI создаёт тексты и картинки за секунды.';
        document.querySelector('.card-heading:nth-child(3)').textContent = 'Отвечает клиентам';
        document.querySelector('.card-subtext:nth-child(4)').textContent = 'ИИ бот 24/7 знает ваш бизнес и товары. Вы спите - он продаёт.';
        document.querySelector('.card-heading:nth-child(5)').textContent = 'Помогает с товарами';
        document.querySelector('.card-subtext:nth-child(6)').textContent = 'Каталог, кравлер и услуги с AI описаниями. Импорте сайта за пару кликов.';
        document.querySelector('.pricing-title').textContent = 'Тарифы';
        document.querySelector('.badge-label:nth-child(2)').textContent = 'Пробный';
        document.querySelector('.badge-label:nth-child(4)').textContent = 'Базовый';
        document.querySelector('.badge-label:nth-child(6)').textContent = 'Расширенный';
        document.querySelector('.service-subtitle').textContent = 'Подключение под ключ';
        document.querySelector('.service-description').textContent = 'Анализ бизнеса, настройка бота, загрузка товаров, обучение + тариф SMM на первый месяц';
        document.querySelector('.details-btn').textContent = 'ПОДРОБНЕЕ ОБ УСЛУГАХ';
        document.querySelector('.nav-link:nth-child(1)').textContent = 'ГЛАВНАЯ';
        document.querySelector('.nav-link:nth-child(2)').textContent = 'ПАРТНЕРАМ';
        document.querySelector('.nav-link:nth-child(3)').textContent = 'ИНВЕСТОРАМ';
        document.querySelector('.nav-link:nth-child(4)').textContent = 'СПРАВКА';
        document.querySelector('.start-btn').textContent = 'НАЧАТЬ';
    }
}

// Button ripple effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Add ripple effect to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Sequential animations on load
document.addEventListener('DOMContentLoaded', () => {
    // Start the sequential animation
    animateElementsSequentially();

    // Initialize counter animations for stats
    initializeCounters();
});

function animateElementsSequentially() {
    // Get all animated elements and sort them by their animation order
    const animatedElements = Array.from(document.querySelectorAll('[data-animation-order]'));
    animatedElements.sort((a, b) => parseInt(a.getAttribute('data-animation-order')) - parseInt(b.getAttribute('data-animation-order')));

    // Animate elements sequentially with delays
    animatedElements.forEach((element) => {
        // Get the animation order from the data attribute
        const order = parseInt(element.getAttribute('data-animation-order'));
        const delay = (order - 1) * 300; // 300ms between each animation, starting from 0

        // Apply the animation class with delay
        setTimeout(() => {
            // Add animation class based on element type
            if (element.classList.contains('main-heading') ||
                element.classList.contains('desc-part1') ||
                element.classList.contains('desc-part2')) {
                element.classList.add('animate-from-left');
            } else if (element.classList.contains('feature-card')) {
                element.classList.add('animate-from-right');
            } else if (element.classList.contains('cta-button')) {
                element.classList.add('animate-from-bottom');
            } else if (element.classList.contains('stat-item')) {
                element.classList.add('animate-from-bottom');
            } else if (element.classList.contains('pricing-card')) {
                element.classList.add('animate-from-bottom');
            } else {
                element.classList.add('animate-from-bottom');
            }
        }, delay);
    });
}

// Counter animation function
function animateCounter(element) {
    const countFrom = parseInt(element.getAttribute('data-count-from')) || 0;
    const countTo = parseInt(element.getAttribute('data-count-to')) || 0;
    const suffix = element.getAttribute('data-suffix') || '';

    // Check if this is the "3" counter that needs special animation (for "Дня БЕСПЛАТНО")
    const isSpecialThreeCounter = (countTo === 3 && element.nextElementSibling && element.nextElementSibling.textContent.includes('Дня БЕСПЛАТНО'));

    // Format numbers with commas, ensuring consistent width to prevent jumping
    function formatNumber(num) {
        if (suffix === '24/7') {
            return '24/7';
        }

        // Format the number with commas
        let formattedNum = num.toLocaleString();

        // For the price counter, ensure consistent width to prevent jumping
        if (suffix === '₽') {
            // Ensure consistent width by setting a minimum width
            element.style.display = 'inline-block';
            element.style.textAlign = 'right';
        }

        return formattedNum + suffix;
    }

    // Pre-format the final value to determine required width
    const finalValue = formatNumber(countTo);

    // Set the element to the final width initially to prevent layout shifts
    element.style.display = 'inline-block';
    element.style.width = 'auto';

    let current = countFrom;
    const totalSteps = 50; 
    const stepTime = 20; 
    const startTime = Date.now();
    const duration = 1000; 

    element.textContent = formatNumber(current);

    if (isSpecialThreeCounter) {
        const upDuration = duration * 0.6; 
        const downDuration = duration * 0.4; 
        const peakValue = 7; 

        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;

            if (elapsed < upDuration) {
                const upProgress = Math.min(elapsed / upDuration, 1);
                const easeUpProgress = 1 - Math.pow(1 - upProgress, 2); 
                current = Math.floor(countFrom + (peakValue - countFrom) * easeUpProgress);
            } else {
                const downElapsed = elapsed - upDuration;
                const downProgress = Math.min(downElapsed / downDuration, 1);
                const easeDownProgress = 1 - Math.pow(1 - downProgress, 2); 
                current = Math.floor(peakValue + (countTo - peakValue) * easeDownProgress);
            }

            element.textContent = formatNumber(current);

            if (elapsed >= duration) {
                element.textContent = finalValue;
                clearInterval(timer);
            }
        }, stepTime);
    } else {
        // Standard animation for other counters
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1); 

            // Use easing function for smooth animation
            const easeProgress = 1 - Math.pow(1 - progress, 2); 
            current = Math.floor(countFrom + (countTo - countFrom) * easeProgress);

            element.textContent = formatNumber(current);

            if (progress >= 1) {
                element.textContent = finalValue;
                clearInterval(timer);
            }
        }, stepTime);
    }
}

// Initialize counters when they come into view
function initializeCounters() {
    const counterElements = document.querySelectorAll('.stat-number[data-count-to]');

    // Create an Intersection Observer to trigger counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    // Observe all counter elements
    counterElements.forEach(counter => {
        observer.observe(counter);
    });
}

// Parallax effect on scroll (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.glow-circle');

    parallaxElements.forEach((element, index) => {
        const speed = index % 2 === 0 ? -0.5 : 0.5; 
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Keyboard navigation enhancement
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        const target = event.target;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
            target.click();
            event.preventDefault();
        }
    }
});