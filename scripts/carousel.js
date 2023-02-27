const slides = document.getElementsByClassName('carousel__item');
const slidesTotal= slides.length;
console.log(slidesTotal);
/*nuppude klikkimisele reageerima panemine:*/
const nextButton = document.querySelector('#carousel__button--next')
const prevButton = document.querySelector('#carousel__button--prev')

/*esimese elemendi vaikimisi väärtus 0*/
let slidePosition = 0;

nextButton.addEventListener('click', () => {

    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slidePosition === slidesTotal -1) {
        slidePosition = 0;
    } else {
        slidePosition++;            /*+1*/
    }

    slides [slidePosition].classList.add('carousel__item--visible');
});

prevButton.addEventListener('click', () => {

    for(let slide of slides) {
        slide.classList.remove('carousel__item--visible');
    }

    if(slidePosition === 0) {
        slidePosition = slidesTotal -1;
    } else {
        slidePosition --;           /*-1*/
    }
    slides [slidePosition].classList.add('carousel__item--visible');
});