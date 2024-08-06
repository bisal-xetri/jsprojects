'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

// const arr=[23,13,64];
// console.log(arr[0]);
// console.log(arr.at(0));
// //getting the last element from the array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1))
// console.log('bishal'.at(0))


//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const [i,movement] of movements.entries()) {
//   if(movement>0){
//     console.log(`Movement ${i+1}you deposit ${movement}`);
//   }else{
//     console.log(`you withdraw ${movement}`);
//   }
// }

// //forEach method
// console.log("FROM FOREACH FUNCTION")
// movements.forEach(function(mov,i,arr){
//   if(mov>0){
//     console.log(`Movements:${i+1} you deposit ${mov}`);
//   } else{
//     console.log(`Withdraw:${i+1} you withdraw $${Math.abs(mov)}`);
//   }
// });
//function(200)
//function(450)

const currencies=new Map([
  ['USD', 'United States Dollar'],
  ['EUR','Euro'],
  ['GBP','Pound sterling'],
]);

// currencies.forEach(function(value, key,map){
//   console.log(`${key}: ${value}`);
// })
// const currenciesUnique=new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, key, map){
// console.log(`${key}: ${value}`);
// })
//dom manupluation
//dom manupluation

const displayMovements=function(movements,sort=false){
containerMovements.innerHTML='';//textContent


 const movs=sort?movements.slice().sort((a,b)=>a-b):movements;
  movs.forEach(function(mov,i){
    const type=mov>0?'deposit':'withdrawal';
    const html=`
     <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin',html);
  });

}

//print total balance
  const calcPrintbalance=function(acc){
    acc.balance=acc.movements.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent = `${acc.balance}€`
}



const calDisplaySummary=function(acc){
  const incomes=acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent = `${incomes}€`;
  const outgoings=acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+Math.abs(mov),0);
  labelSumOut.textContent = `${outgoings}€`;
  const interest=acc.movements.filter(mov=>mov>0).map(deposit=>deposit*acc.interestRate/100)
  .filter((int,i,arr)=>{
    return int>=1;
  }).reduce((acc,mov)=>acc+mov,0);
  labelSumInterest.textContent = `${interest}€`;
}



const createUsername=function(accs){
accs.forEach(function(acc){
  acc.username=acc.owner
  .toLowerCase()
  .split(' ')
.map((name)=>
   name[0]).join('');

});

};
// const user='Steven Thomas Williams';
createUsername(accounts);
// console.log(accounts);

const updateUI=function(acc){
  displayMovements(acc.movements);
  calcPrintbalance(acc);
  calDisplaySummary(acc);
}

let currentAccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();// prevents from from submitting
// console.log('Login');

currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
console.log(currentAccount);
if(currentAccount?.pin===Number(inputLoginPin.value)){
  //display ui and welcome message
  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
  containerApp.style.opacity=100;

  //clear input fields
  inputLoginUsername.value=inputLoginPin.value='';
  inputLoginPin.blur();

  updateUI(currentAccount);

//   //display movements
// displayMovements(currentAccount.movements);
//   //display balance
//   calcPrintbalance(currentAccount);

//   //display summary
//   calDisplaySummary(currentAccount)
}
})
//transfer amount

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  
  // // Debugging logs
  // console.log('Transfer amount:', amount);
  // console.log('Receiver account:', receiverAcc);
  // console.log('Current account balance:', currentAccount.balance);
  // console.log('Current account username:', currentAccount.username);
  // console.log('Receiver account username:', receiverAcc?.username);
  inputTransferAmount.value=inputTransferTo.value='';
  if (amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username) {
    // console.log('Transfer conditions met');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  } else {
    console.log('Transfer conditions not met');
  }
});

//working on loan

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount=Number(inputLoanAmount.value);
  if(amount>0&& currentAccount.movements.some(mov=>mov>=amount*0.1)){
    //add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value='';
})
//find index method

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if(inputCloseUsername.value===currentAccount.username&&Number(inputClosePin.value)===currentAccount.pin){

const index=accounts.findIndex(acc=>acc.username===currentAccount.username);
    accounts.splice(index,1);
    // console.log(index);
    //hideui
    containerApp.style.opacity=0;
  }
  inputCloseUsername.value=inputClosePin.value='';
})

let sorted=false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted=!sorted;
})


// //console.log(containerMovements.innerHTML);
// //coding challenge 1

// const checkDogs=function(dogsJulia,dogsKate){
// const dogsJuliaCorrected=dogsJulia.slice();
// dogsJuliaCorrected.splice(0,1);
// dogsJuliaCorrected.splice(-2);
// //dogsJulia.slice(1,3);
// //console.log(dogsJuliaCorrected);
// const dogs=dogsJuliaCorrected.concat(dogsKate);
// console.log(dogs);
// dogs.forEach(function(dog,i){
//   if(dog>=3){
//     console.log(`Dog number:${i+1} is an adult, and is ${dog} years old.`);
//   }else{
//     console.log(`Dog number:${i+1} is a still Puppy 🐶 .`);
//   }
// });
// }
// checkDogs([3,5,2,12,7],[4,1,15,8,3]);


//Map=similar to for each and create new array by applying operation; Filter=used to filter the element condition true array only; Reduce=adding more operation all array elements and one value provide;
// const eurToUdd=1.1;
 
// const movementsUsd=movements.map(function(mov){
//   return mov*eurToUdd;
//   // return 23;
// })
// // console.log(movements);
// // console.log(movementsUsd);

// const movementUSDfor=[];
// for(const mov of movements){
// movementUSDfor.push(mov*eurToUdd);
// }
// console.log(movementUSDfor);
// //arrow function
// const movementsUsdArrow=movements.map(mov=>mov*eurToUdd);
// console.log(movementsUsdArrow);

const movementsDescription=movements.map((mov,i  )=>
`Movement ${i+1} you ${mov>0?'deposited':'withdraw'}
  ${Math.abs(mov)}`
  
);
// console.log(movementsDescription);

//filter
// const deposits=movements.filter(mov=>mov>0);
// console.log(deposits);
//  const deposit=movements.filter(function(mov){
//   return mov>0;
//  })
//  console.log(deposit);
//  const withdrawls=movements.filter(mov=>mov<0);
//  console.log(withdrawls);

//reduce method to boiled down all the element in single 

const balance=movements.reduce(function(acc,curr,i,arr){
  // console.log(`Iteration ${i}:${acc}`)
  return acc+curr;
},0)
// console.log(balance);
const balanced=movements.reduce((acc,curr)=>acc+curr);
// console.log(balanced);
// let balance2=0;
// for(const mov of movements){
//   balance2+=mov;

// }
// console.log(balance2);

//max value

const max=movements.reduce((acc,curr)=>{
  if(acc>curr){
    return acc;
  }else{
    return curr;
  }
},movements[0]);
// console.log(max);




//challenge 2

// const  calAverageHumanAge=function(ages){
//    const humanAges=ages.map(age=>age<=2?2*age:16+age*4);
//   //  console.log(humanAges);
//   const adults=humanAges.filter(age=>age>=18);
//    console.log(adults);
//    const average=adults.reduce((acc,curr,i,arr)=>acc+curr,0)/arr.length;
//    return average;
// }
// console.log(calAverageHumanAge([5,2,4,1,15,8,3]));
// console.log(calAverageHumanAge([16,6,10,5,]));

// const eurToUsd=1.1;

// //PIPELINE 
// const totalDepositUSD=movements.filter(mov=>mov>0).map(mov=>mov*eurToUsd).reduce((acc,mov)=>acc+mov,0)
// console.log(totalDepositUSD)

// //coding challenge 3
// const calAverageHumanAge=ages=>
//   ages.map(age=>(age<=2?2*age:16+age*4)).filter(age=>age>=18).reduce((acc,cur,i,arr)=>acc+cur/arr.length);

// console.log(calAverageHumanAge([16,6,10,5,6,1,4]));



//find method loops over a array returns first element from which conditions is true 
//find method examples
// const firstWithdrawls=movements.find(mov=>mov<0);
// console.log(firstWithdrawls);

// const account=accounts.find(acc=>acc.owner==='Jessica Davis');
// console.log(account);

// for(const acc of accounts){
//   if (acc.owner==='Jessica Davis')
//     console.log(acc);
// }


//

// console.log(movements);

// //check for equality
// console.log(movements.includes(-130));

// //Some method if any
// const anyDeposits=movements.some(mov=>mov>0);
// console.log(anyDeposits);

// //every method all condition must be true
// console.log(movements.every(mov=>mov>0));

// //Separate callback
// const deposit=mov=>mov<0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//flat method
const arr=[[1,2,3],[4,5,6],7,8];
// console.log(arr.flat());//flat method remove nestade array

const arrDeep=[[[1,2],3],[4,[5,6]],7,8];
// console.log(arrDeep.flat(2))//goes second level of nesting

// const countMovement=accounts.map(acc=>acc.movements);

// console.log(countMovement);
// const allMovements=countMovement.flat();
// console.log(allMovements);
// const overallBalance=allMovements.reduce((acc,mov)=>acc+mov,0);
// console.log(overallBalance);

// const overallBalance=accounts.map(acc=>acc.movements).flat().reduce((acc,mov)=>acc+mov,0);
// console.log(overallBalance);

// //FlatMap goes 1 level deep only
// const overallBalance1=accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0);
// console.log(overallBalance1);

//sort method
//  const owners=['Bishal','Bibek','Sita','Sijan'];
//  console.log(owners.sort());
//  console.log(owners);

//  console.log(movements);
// // console.log(movements.sort())

// //return <0,a,b(keep order)
// //return>0,b,a(switch order)
// movements.sort((a,b)=>a-b);
// console.log(movements)

// //descending
// //movements.sort((a,b)=>b-a);
// movements.sort((a,b)=>{
//   if(a>b){
//     return -1;
//   }if(b>a)
//     return 1;
//   })
//   // console.log(movements)

// const arr1=[1,2,3,4,5,6,7];
// console.log(new Array(1,2,3,4,5,6,7));
// const x=new Array(7);

// //fill method
// //x.fill(1);
// x.fill(1,3,5);
// console.log(x);
// arr1.fill(10,2,5)
// console.log(arr1);

//array.form

// const y=Array.from({length:7},()=>1);
// console.log(y);

// const z=Array.from({length:7},(cur,i)=>i+1);
// console.log(z);

const movementsUI=Array.from(document.querySelectorAll('.movements__value'))
  console.log(movementsUI);

  labelBalance.addEventListener('click',function(){
    const movementsUI=Array.from(document.querySelectorAll('.movements__value'),el=>Number(el.textContent.replace('€','')));

  console.log(movementsUI);

  // const movementsUI2=[...document.querySelectorAll('.movements.value')];
  
  })

  //which method use 
  // mutated originalArray .push  .unshift for add pop shift splice for remove  reverse sort fill 
   
  //a new array .map for loop filter .slice .concat .flat .flatMap

  //an array index based on Value .indexOf based on Condition .findIndex 
  //an array element .find

  // know if array include based on values .include based on test condition .some and .every
  //a new string .join based on separator
  
  //to transform to value ,reduce based on accumulator

  //to just loop the array based on coll back .forEach


//Array method practice

// const bankDepositSum=accounts.flatMap(acc=>acc.movements).filter(mov=>mov>0).reduce((acc,cur)=>acc+cur,0);
// console.log(bankDepositSum);

// //2
// const numDeposit1000=accounts.flatMap(acc=>acc.movements).filter(mov=>mov>=1000).length;
// console.log(numDeposit1000)

// const numDeposit10001=accounts.flatMap(acc=>acc.movements).reduce((count,cur)=>(cur>=1000?++count:count) , 0);
// console.log(numDeposit10001)

// //reference ++ operator
// let a=10;
// console.log(++a);
// console.log(a);

//3
// const sums=accounts.flatMap(acc=>acc.movements).reduce((sum,cur)=>{

// // cur>0?(sum.deposits+=cur):(sum.withdrawals+=cur);
// sum[cur>0?'deposits':'withdrawals']+=cur;
// return sum;

// },{deposits:0, withdrawals:0})
// console.log(sums);

// this is a nice title> This Is a Nice Title

const convertTitleCase=function(title){

  const capitalize=str=>str[0].toUpperCase()+str.slice(1);
const exceptions=['a','an','the','but','and','or','on','in','with'];

const titleCase=title.toLowerCase()
.split(' ')
.map(word=>exceptions.includes(word)?word:capitalize(word)).join(' ');
return capitalize(titleCase);

};
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));

//challenge 
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/

const dogs=[
  {weight:23,curFood:259, owners:['Alice','Bishal']},
  {weight:8, curFood:200, owners:['Sarah','John']},
  {weight:32, curFood:340, owners:['Michael']},
];

dogs.forEach(dog=>(dog.recFood=Math.trunc(dog.weight**0.75*28)));
console.log(dogs); 

//2
const dogSarah=dogs.find(dog=>dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's Dog is eating too ${dogSarah.curFood>dogSarah.recFood?'much':'Little'}`);

//3
const ownersEatTooMuch=dogs.filter(dog=>dog.curFood>dog.recFood).flatMap(dog=>dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLow=dogs.filter(dog=>dog.curFood<dog.recFood).flatMap(dog=>dog.owners);

console.log(ownersEatTooLow);
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`)
console.log(`${ownersEatTooLow.join(' and ')} dogs eat too low!`)

//5
console.log(dogs.some(dog=>dog.curFood===dog.recFood));

//6
const checkEatingOkey=dog=>dog.curFood>dog.recFood*0.9&&dog.curFood<dog.recFood*1.1;
console.log(dogs.some(checkEatingOkey));

//7
console.log(dogs.filter(checkEatingOkey));

const dogsCopy=dogs.slice().sort((a,b)=>a.recFood-b.recFood);
console.log(dogsCopy)