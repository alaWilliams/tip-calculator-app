const billInput = document.querySelector('.bill-amount');
const numOfPeople = document.querySelector('.people-amount');
const five = document.querySelector('#five');
const ten = document.querySelector('#ten');
const fifteen = document.querySelector('#fifteen');
const twentyFive = document.querySelector('#twenty-five');
const fifty = document.querySelector('#fifty');
const customBtn = document.querySelector('#custom');

const split = {
	total: 0,
	tip: 0,
	people: 0,
};
const calculateTip = () => {
  let thing = (split.total * split.tip) / split.people;
  console.log(thing);
}

const totalPerPerson = () => {
  let total = (split.total / split.people) + (split.total * split.tip) / split.people;
  console.log(total);
}

billInput.addEventListener('change', () => {
	split.total = Number(billInput.value);
  calculateTip();
});

numOfPeople.addEventListener('change', () => {
  split.people = Number(numOfPeople.value);
  console.log(split)
})

const handleClick = (btn) => {
  split.tip = Number(btn.value);
  console.log(split)
}

five.addEventListener('click', () => {handleClick(five)})

ten.addEventListener('click', () => {handleClick(ten)})

fifteen.addEventListener('click', () => {handleClick(fifteen)})

twentyFive.addEventListener('click', () => {handleClick(twentyFive)})

fifty.addEventListener('click', () => {handleClick(fifty)})

custom.addEventListener('click', () => {
  custom.type = 'number';
})

custom.addEventListener('change', () =>{
  split.tip = Number(custom.value) / 100;
  console.log(split);
} )



calculateTip();

totalPerPerson();