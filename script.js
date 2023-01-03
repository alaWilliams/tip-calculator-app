const billInput = document.querySelector('.bill-amount');
const numOfPeople = document.querySelector('.people-amount');
const five = document.querySelector('#five');
const ten = document.querySelector('#ten');
const fifteen = document.querySelector('#fifteen');
const twentyFive = document.querySelector('#twenty-five');
const fifty = document.querySelector('#fifty');
const customBtn = document.querySelector('#custom');
const buttons = document.querySelectorAll('.btn');
const tipAmount = document.querySelector('.tip-amount');
const total = document.querySelector('.total');
const errorBill = document.querySelector('.error-bill');
const errorPeople = document.querySelector('.error-people');


const split = {
	total: 0,
	tip: 0,
	people: 0,
};

billInput.addEventListener('change', () => {
  if (Number(billInput.value) <= 0) {
   billInput.style.border = '2px solid hsl(20, 65%, 74%)'
   errorBill.innerText = 'Must be more than 0'
   } 
   else {
     split.total = Number(billInput.value);
     calculateTip();
     totalPerPerson();
  }
	
}
);

numOfPeople.addEventListener('change', () => {
  if (Number(numOfPeople.value) === 0 ) {
    billInput.style.border = '2px solid hsl(20, 65%, 74%)'
    errorPeople.innerText = `Can't be 0`
    } 
 if (Number(numOfPeople.value) < 0 ) {
  billInput.style.border = '2px solid hsl(20, 65%, 74%)'
  errorPeople.innerText = `Must be more than 0`
 }
 else {
      split.people = Number(numOfPeople.value);
      calculateTip()
      totalPerPerson();
   }
  
})

const handleClick = (btn) => {
  split.tip = Number(btn.value);
  calculateTip();
  totalPerPerson();
}


buttons.forEach(btn => {
  btn.addEventListener('click', () => {handleClick(btn)
  })
});


custom.addEventListener('click', () => {
  custom.type = 'number';
})

custom.addEventListener('change', () => {
  if (Number(custom.value) > 0) {
    split.tip = Number(custom.value) / 100;
    calculateTip();
    totalPerPerson();
  } else {
    custom.style.border = '2px solid hsl(20, 65%, 74%)';
  }
 console.log(split);
} )


const calculateTip = () => {
  if (split.total > 0 && split.tip > 0 && split.people) {
    const tipPerPerson = (split.total * split.tip) / split.people;
    tipAmount.innerText = `$${tipPerPerson}`
  }
  ;
  
}

const totalPerPerson = () => {
  if (split.total > 0 && split.tip > 0 && split.people) {
    const totalPerPerson = (split.total / split.people) + (split.total * split.tip) / split.people;
    total.innerText = `$${totalPerPerson}`;
  }
  
}

calculateTip();

totalPerPerson();