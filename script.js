'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContain=document.querySelectorAll('.operations__content');
const nav= document.querySelector('.nav')
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (x/Y)', window.pageXOffset, pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  // window.scrollTo(s1coords.left,s1coords.right);

  section1.scrollIntoView({ behavior: 'smooth' });
});

//page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id=this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   });
// });

//1. add event Listener to a common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log("LINK")
    e.preventDefault();
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tabbed component

 
// tabs.forEach(t=>t.addEventListener('click',()=>{
//   console.log('TAB');
// }))

tabsContainer.addEventListener('click',function(e){
  const clicked=e.target.closest('.operations__tab');
  console.log(clicked);
//Guard Clause
  if(!clicked) return;

  tabs.forEach(t=>t.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active');
    tabsContain.forEach(c=>c.classList.remove('operations__content--active'))
  //activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})


//menu fade animation

const handHover=function(e,opacity){
  // console.log(this,e.currentTarget)
  if(e.target.classList.contains('nav__link')){
    const link=e.target;
    const sibling=link.closest('.nav').querySelectorAll('.nav__link');
    const logo=link.closest('.nav').querySelector('img');
  
  
    sibling.forEach(el=>{
      if(el!==link){
        el.style.opacity=this;
      }
      
    })
    logo.style.opacity=this;
  }
}

//passing 'argument' into handler
nav.addEventListener('mouseover',handHover.bind(0.5));
nav.addEventListener('mouseout',handHover.bind(1));


//sticky navigation
const initialCoords=section1.getBoundingClientRect();
console.log(initialCoords)

window.addEventListener('scroll',function(){
  console.log(window.scrollY);
   

  if(window.scrollY>initialCoords.top)nav.classList.add('sticky');
  else nav.classList.remove('sticky');

})




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

// const h1=document.querySelector('h1');
// const alertH1=function(e){
//   alert('addEventListener')

//   // h1.removeEventListener('mouseenter',alertH1);
//   }
//     // h1.addEventListener('mouseenter',alertH1);

//     // setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000);

//   // h1.onmouseenter=function(e){
//   //   alert('hey')
//   // }

// //rgb(255,255,255)
// const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);

// const randomColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
// console.log(randomColor(0,255))

// document.querySelector('.nav__link').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log('LINK',e.target,e.currentTarget)//e.currentTarget===this

//   //Stop propagation

// })
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log('Container',e.target,e.currentTarget)
// })

// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log('Nav',e.target,e.currentTarget)
// } )


// const h1= document.querySelector('h1');

// //Going downwards :child

// console.log(h1.querySelectorAll('.highlight' ));

// console.log(h1.childNodes)
// console.log(h1.children)

// h1.firstElementChild.style.color='white';
// h1.lastElementChild.style.color='red';

// //Going upwards:parents
// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('.header').style.background='var(--gradient-secondary)';
// h1.closest('h1').style.background='var(--gradient-primary)';

// //Going sideways :siblings

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el!==h1){
//     el.style.transform='scale(0.5)';
//   }
// })

