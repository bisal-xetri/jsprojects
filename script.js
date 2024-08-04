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

const displayMovements=function(movements){
containerMovements.innerHTML='';//textContent

  movements.forEach(function(mov,i){
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

displayMovements(account1.movements);

const calcPrintbalance=function(movements){
  const balance=movements.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent = `${balance}EUR`
}
calcPrintbalance(account1.movements); 


const calDisplaySummary=function(movements){
  const incomes=movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent = `${incomes}€`;
  const outgoings=movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+Math.abs(mov),0);
  labelSumOut.textContent = `${outgoings}€`;
  const interest=movements.filter(mov=>mov>0).map(mov=>mov*1.2/100).reduce((acc,mov)=>acc+mov,0);
  labelSumInterest.textContent = `${interest}€`;
}
calDisplaySummary(account1.movements);


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
// createUsername(accounts);
// console.log(accounts);




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

const eurToUsd=1.1;

//PIPELINE 
const totalDepositUSD=movements.filter(mov=>mov>0).map(mov=>mov*eurToUsd).reduce((acc,mov)=>acc+mov,0)
console.log(totalDepositUSD)