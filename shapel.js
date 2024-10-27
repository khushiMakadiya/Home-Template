let nav = document.querySelector('.nav');
let opBtn = document.querySelector('.open-btn');
let clBtn = document.querySelector('.close-btn');
let forwordBtn = document.querySelector('.forword')
let backwordBtn = document.querySelector('.backword')

let imageArray = [
  'images/g1.jpg',
  'images/g2.jpg',
  'images/g3.jpg',
  'images/g4.jpg',
  'images/s1.jpg',
  'images/slider-bg..jpg'
];

opBtn.addEventListener('click', () => {
  nav.classList.add('show');
  opBtn.style.opacity = 0;
});

clBtn.addEventListener('click', () => {
  nav.classList.remove('show');
  opBtn.style.opacity = 1;
});

let a = 1;

function forwordImage() {
  a++;
  nav.style.backgroundImage = `url(${imageArray[0]})`;
}
forwordBtn.addEventListener('click', forwordImage);

function backwordImage() {
  a--;
  nav.style.backgroundImage = `url(${imageArray[4]})`;
}
backwordBtn.addEventListener('click', backwordImage);

// NUMBER2.....

let backBtn = document.querySelector('.back-btn');
let packBtn = document.querySelector('.pack-btn');
let headBox = document.querySelectorAll('.head_box');

let m = 0;

packBtn.addEventListener('click', ()=> {

  m++;
  if(m > headBox.length - 1) {

    m= 0;
    headBox[0].classList.remove('hide');
    headBox[headBox.length - 1].classList.add('hide');
  } 

  headBox[m].classList.remove('hide');
  headBox[m - 1].classList.add('hide');
});


backBtn.addEventListener('click', ()=> {

  m--;
  if(m < 0) {
    m = headBox.length - 1;
    headBox[0].classList.add('hide');
  }

  headBox[m].classList.remove('hide');
  headBox[m + 1].classList.add('hide');
});



