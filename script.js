'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal)
);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//select create and delete elements
// console.log(document.documentElement);
// console.log(document.head)
// console.log(document.body)
 const header=document.querySelector('.header');
// const allSection=document.querySelectorAll('.section');
// console.log(allSection)


// document.getElementById('section--1');
// const buttons=document.getElementsByTagName('button');
// console.log(buttons)
// console.log(document.getElementsByClassName('btn'));

//creating and inserting elements

const message=document.createElement('div')
message.classList.add('cookie-message');
message.textContent='we use cookie for improve functionality and analytics';
message.innerHTML=
`we use cookie for improve functionality and analytics<button class="btn btn--close--cookie">Got it!</button>`;
//console.log(message)
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true))
// header.before(message)
// header.after(message);

//delete element
document.querySelector('.btn--close--cookie').addEventListener('click',function(){
  message.remove();
  // message.parentElement.removeChild(message)
})

//styles;
message.style.backgroundColor='#37383d';
message.style.width='120%';

console.log(message.style.backgroundColor)
console.log(getComputedStyle(message).height)

// message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+40+'px';


document.documentElement.style.setProperty('--color-primary','red')
//attributes
const logo=document.querySelector('.nav__logo');
console.log(logo.alt)
console.log(logo.className)
console.log(logo.designer)
logo.alt='beautiful logo'
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist');

console.log(logo.getAttribute('src'));

const link=document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
//data attribute
  console.log(logo.dataset.versionNumber);

  //classes
  logo.classList.add('c','b')
  logo.classList.remove('c','d');
  logo.classList.toggle('c');
  logo.classList.contains('c');

  //logo.className='bishal'//override all existing classes