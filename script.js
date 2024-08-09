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
//  const header=document.querySelector('.header');
// // const allSection=document.querySelectorAll('.section');
// // console.log(allSection)


// // document.getElementById('section--1');
// // const buttons=document.getElementsByTagName('button');
// // console.log(buttons)
// // console.log(document.getElementsByClassName('btn'));

// //creating and inserting elements

// const message=document.createElement('div')
// message.classList.add('cookie-message');
// message.textContent='we use cookie for improve functionality and analytics';
// message.innerHTML=
// `we use cookie for improve functionality and analytics<button class="btn btn--close--cookie">Got it!</button>`;
// //console.log(message)
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true))
// // header.before(message)
// // header.after(message);

// //delete element
// document.querySelector('.btn--close--cookie').addEventListener('click',function(){
//   message.remove();
//   // message.parentElement.removeChild(message)
// })

// //styles;
// message.style.backgroundColor='#37383d';
// message.style.width='120%';

// console.log(message.style.backgroundColor)
// console.log(getComputedStyle(message).height)

// // message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+40+'px';


// document.documentElement.style.setProperty('--color-primary','red')
// //attributes
// const logo=document.querySelector('.nav__logo');
// console.log(logo.alt)
// console.log(logo.className)
// console.log(logo.designer)
// logo.alt='beautiful logo'
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company','Bankist');

// console.log(logo.getAttribute('src'));

// const link=document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));
// //data attribute
//   console.log(logo.dataset.versionNumber);

//   //classes
//   logo.classList.add('c','b')
//   logo.classList.remove('c','d');
//   logo.classList.toggle('c');
//   logo.classList.contains('c');

  //logo.className='bishal'//override all existing classes

  const btnScrollTo=document.querySelector('.btn--scroll-to');
  const section1=document.querySelector('#section--1');


  btnScrollTo.addEventListener('click',function(e){
    const s1coords=section1.getBoundingClientRect();
    console.log(s1coords)

  console.log(  e.target.getBoundingClientRect());


  console.log('Current scroll (x/Y)',window.pageXOffset,pageYOffset);
  console.log('height/width viewport',document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  // window.scrollTo(s1coords.left,s1coords.right); 

  section1.scrollIntoView({behavior:'smooth'})
  })
  
const h1=document.querySelector('h1');
const alertH1=function(e){
  alert('addEventListener')

  // h1.removeEventListener('mouseenter',alertH1);
  }
    // h1.addEventListener('mouseenter',alertH1);

    // setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000);

  // h1.onmouseenter=function(e){
  //   alert('hey')
  // }


//rgb(255,255,255)
const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);

const randomColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
console.log(randomColor(0,255))


document.querySelector('.nav__link').addEventListener('click',function(e){
  this.style.backgroundColor=randomColor();
  console.log('LINK',e.target,e.currentTarget)//e.currentTarget===this

  //Stop propagation
  
})
document.querySelector('.nav__links').addEventListener('click',function(e){
  this.style.backgroundColor=randomColor();
  console.log('Container',e.target,e.currentTarget)
})

document.querySelector('.nav').addEventListener('click',function(e){
  this.style.backgroundColor=randomColor();
  console.log('Nav',e.target,e.currentTarget)
})
