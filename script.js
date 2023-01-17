const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
]

const carouselElement = document.querySelector('.carousel');


for (let index = 0; index < images.length; index++) {
    console.log(images[index]);

    carouselElement.innerHTML +=  ` <div class="slide">
                                         <img src="${images[index]}" alt="">
                                    </div> ` 
    
}

const allSlides = document.querySelectorAll('.slide');
console.log('allSlide' , allSlides)
allSlides[0].classList.add('current');

let currentSlide = 0;

const nextArrow = document.querySelector('.next');

nextArrow.addEventListener('click',

      function () {
        allSlides[currentSlide].classList.remove('current');
        currentSlide = currentSlide + 1;
        allSlides[currentSlide].classList.add('current');
        if (currentSlide == allSlides.length -1) {
            nextArrow.classList.add('hidden');

        }
        prevArrow.classList.remove('hidden');
      }
 
);

const prevArrow = document.querySelector('.previous');

prevArrow.addEventListener('click',

      function () {
        allSlides[currentSlide].classList.remove('current');
        currentSlide = currentSlide - 1;
        allSlides[currentSlide].classList.add('current');
        if (currentSlide == 0) {
            prevArrow.classList.add('hidden');

        }
        nextArrow.classList.remove('hidden');
      }
 
);