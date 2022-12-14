const billInput = document.querySelector('.bill-amount');
const numOfPeople = document.querySelector('.people-amount');

const split = {
	total: 0,
	tip: 0,
	people: 0,
};

billInput.addEventListener('change', () => {
	split.total = Number(billInput.value);
});

numOfPeople.addEventListener('change', () => {
  split.people = Number(numOfPeople.value);
})

const five = document.querySelector('.btn');
five.addEventListener('click', () => {
  split.tip = Number(five.value);
  console.log(split);
})

const handleClick = (btn) => {
  split.tip = Number(btn.value);
}