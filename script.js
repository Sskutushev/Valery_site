/*
// --- Код для анимации головы робота (не используется) ---
*/

// --- Утилиты ---
function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) { return ''; }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// --- ФУНКЦИЯ АНИМАЦИИ СЧЕТЧИКА С ПРОСТЫМ УВЕЛИЧЕНИЕМ ---
function animateSimpleCounter(element) {
    const startVal = parseFloat(element.dataset.start) || 0;
    const targetVal = parseFloat(element.dataset.target) || 0;
    const duration = element.dataset.fast ? 1000 : 2000; // 1 секунда если указано data-fast
    const suffix = element.dataset.suffix || '';

    let startTime = null;

    function updateValue(timestamp) {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Используем easing функцию для плавности
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);

        const currentValue = startVal + (targetVal - startVal) * easeOutCubic;

        if (progress < 1) {
            element.textContent = formatNumber(Math.floor(currentValue)) + suffix;
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = formatNumber(targetVal) + suffix;
        }
    }

    element.textContent = formatNumber(startVal) + suffix;
    requestAnimationFrame(updateValue);
}

// --- ФУНКЦИЯ АНИМАЦИИ СЧЕТЧИКА С ОДНОКРАТНЫМ ИЗМЕНЕНИЕМ ДО КОНЕЧНОГО ЗНАЧЕНИЯ ---
function animateToFinalCounter(element) {
    const startVal = parseFloat(element.dataset.start) || 0;
    const maxVal = parseFloat(element.dataset.end) || startVal; // Максимальное значение для анимации
    const targetVal = parseFloat(element.dataset.target) || maxVal; // Конечное значение для отображения
    const duration = element.dataset.fast ? 1000 : 2000; // 1 секунда если указано data-fast

    let startTime = null;

    function updateValue(timestamp) {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Используем easing функцию для плавности
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);

        const currentValue = startVal + (maxVal - startVal) * easeOutCubic;

        if (progress < 1) {
            element.textContent = formatNumber(Math.floor(currentValue));
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = formatNumber(targetVal); // Устанавливаем целевое значение
        }
    }

    element.textContent = formatNumber(startVal);
    requestAnimationFrame(updateValue);
}

// --- ГЛАВНЫЙ ЗАПУСК ---
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.animated-counter');
    let delay = 0;

    counters.forEach(counter => {
        if (counter.dataset.animationStarted === 'true') return;

        setTimeout(() => {
            counter.dataset.animationStarted = 'true';
            animateSimpleCounter(counter);
        }, delay);

        delay += 250; // Задержка между стартом каждого счетчика
    });
});