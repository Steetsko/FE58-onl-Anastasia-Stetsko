const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        showSlide(index);
    });
    dotsContainer.appendChild(dot);
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
            dotsContainer.children[i].classList.add('active');
        } else {
            slide.style.display = 'none';
            dotsContainer.children[i].classList.remove('active');
        }
    });
}