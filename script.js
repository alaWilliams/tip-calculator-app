const billInput = document.querySelector('.bill-amount');
const numOfPeople = document.querySelector('.people-amount');
const five = document.querySelector('#five');
const ten = document.querySelector('#ten');
const fifteen = document.querySelector('#fifteen');
const twentyFive = document.querySelector('#twenty-five');
const fifty = document.querySelector('#fifty');
const customBtn = document.querySelector('#custom');
const buttons = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset');
const tipAmount = document.querySelector('.tip-amount');
const total = document.querySelector('.total');
const errorBill = document.querySelector('.error-bill');
const errorPeople = document.querySelector('.error-people');

const split = {
	total: '',
	tip: '',
	people: '',
};

billInput.addEventListener('change', () => {
	if (Number(billInput.value) <= 0) {
		billInput.style.border = '2px solid hsl(20, 65%, 74%)';
		errorBill.innerText = 'Must be more than 0';
		split.total = Number(billInput.value).toFixed(2) / 1;
		calculateTip();
		totalPerPerson();
	} else {
		billInput.style.border = 'none';
		split.total = Number(billInput.value).toFixed(2) / 1;
		billInput.value = split.total;
		errorBill.innerText = '';
		calculateTip();
		totalPerPerson();
	}
});

numOfPeople.addEventListener('change', () => {
	if (Number(numOfPeople.value) <= 0) {
		numOfPeople.style.border = '2px solid hsl(20, 65%, 74%)';
		errorPeople.innerText = `Must be more than 0`;
		split.people = Number(numOfPeople.value).toFixed(0) / 1;
		calculateTip();
		totalPerPerson();
	} else {
		numOfPeople.style.border = 'none';
		errorPeople.innerText = '';
		split.people = Number(numOfPeople.value).toFixed(0) / 1;
		numOfPeople.value = split.people;
		calculateTip();
		totalPerPerson();
	}
});

const buttonReset = () => {
	buttons.forEach((button) => {
		button.style.backgroundColor = 'hsl(183, 100%, 15%)';
		button.style.color = 'hsl(0, 0%, 100%)';
	});
	custom.type = 'button';
	custom.value = 'Custom';
	custom.style.border = 'none';
};

const handleClick = (btn) => {
	buttonReset();
	split.tip = Number(btn.value);
	btn.style.backgroundColor = 'hsl(172, 67%, 45%)';
	btn.style.color = 'hsl(183, 100%, 15%)';
	calculateTip();
	totalPerPerson();
};

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		handleClick(btn);
	});
});

custom.addEventListener('click', () => {
	buttonReset();
	custom.type = 'number';
});

custom.addEventListener('change', () => {
	if (Number(custom.value) > 0) {
    custom.style.border = 'none'
		split.tip = Number(custom.value).toFixed(0) / 100;
		calculateTip();
		totalPerPerson();
		custom.value = split.tip * 100;
	}
	if (Number(custom.value) === 0) {
		split.tip = 0;
		calculateTip();
		totalPerPerson();
   } if (Number(custom.value) < 0) {
    custom.style.border = '2px solid hsl(20, 65%, 74%)';
		split.tip = Number(custom.value).toFixed(0) / 100;
		tipAmount.innerText = '$0';
		total.innerText = '$0';
		custom.value = split.tip * 100;
		calculateTip();
		totalPerPerson();
	}
});

const calculateTip = () => {
	if (split.people <= 0 || split.total <= 0) {
		tipAmount.innerText = '$0';
	}
	if (split.tip === 0 && split.total > 0 && split.people > 0) {
		const tipPerPerson = 0;
		tipAmount.innerText = `$${tipPerPerson}`;
	}
	if (split.total > 0 && split.people > 0 && split.tip > 0) {
		const tipPerPerson = ((split.total * split.tip) / split.people).toFixed(2);
		tipAmount.innerText = `$${tipPerPerson}`;
	}
};

const totalPerPerson = () => {
	if (split.total <= 0 || split.people <= 0) {
		total.innerText = '$0';
	}
	if (split.tip === 0 && split.total > 0 && split.people > 0) {
		const totalPerPerson = (split.total / split.people).toFixed(2);
		total.innerText = `$${totalPerPerson}`;
	}
	if (split.total > 0 && split.tip > 0 && split.people > 0) {
		const totalPerPerson = (
			split.total / split.people +
			(split.total * split.tip) / split.people
		).toFixed(2);
		total.innerText = `$${totalPerPerson}`;
	}
};

resetBtn.addEventListener('click', () => {
	total.value = 0;
	buttonReset();
	numOfPeople.value = 0;
	billInput.value = 0;
	split.people = 0;
	split.tip = 0;
	split.total = 0;
	calculateTip();
	totalPerPerson();
});

calculateTip();
totalPerPerson();
