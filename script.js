const billInput = document.querySelector('.bill-amount');
const numOfPeople = document.querySelector('.people-amount');
const five = document.querySelector('#five');
const ten = document.querySelector('#ten');
const fifteen = document.querySelector('#fifteen');
const twentyFive = document.querySelector('#twenty-five');
const fifty = document.querySelector('#fifty');
const customBtn = document.querySelector('#custom');
const buttons = document.querySelectorAll('.btn')


const split = {
	total: 0,
	tip: 0,
	people: 0,
};

billInput.addEventListener('change', () => {
	split.total = Number(billInput.value);
  calculateTip();
  totalPerPerson();
  console.log(split);
});

numOfPeople.addEventListener('change', () => {
  split.people = Number(numOfPeople.value);
  calculateTip()
  totalPerPerson();
  console.log(split)
})

const handleClick = (btn) => {
  split.tip = Number(btn.value);
  calculateTip();
  totalPerPerson();
  console.log(split)
}


buttons.forEach(btn => {
  btn.addEventListener('click', () => {handleClick(btn)
  })
});


custom.addEventListener('click', () => {
  custom.type = 'number';
})

custom.addEventListener('change', () =>{
  split.tip = Number(custom.value) / 100;
  calculateTip();
  totalPerPerson();
  console.log(split);
} )


const calculateTip = () => {
  const tipPerPerson = (split.total * split.tip) / split.people;
  //console.log(tipPerPerson);
  
}

const totalPerPerson = () => {
  const total = (split.total / split.people) + (split.total * split.tip) / split.people;
  console.log(total);
}

calculateTip();

totalPerPerson();