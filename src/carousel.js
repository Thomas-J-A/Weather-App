const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 1;

const showSlide = (n) => {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  dots.forEach((dot) => {
    dot.classList.remove('active_dot');
  });

  slides[n - 1].style.display = 'flex';
  dots[n - 1].classList.add('active_dot');
};

const showPrevSlide = () => {
  if (currentSlide === 1) return;
  currentSlide -= 1;
  showSlide(currentSlide);
};

const showNextSlide = () => {
  if (currentSlide === slides.length) return;
  currentSlide += 1;
  showSlide(currentSlide);
};

document.querySelector('#prevBtn').addEventListener('click', showPrevSlide);
document.querySelector('#nextBtn').addEventListener('click', showNextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index + 1;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);
