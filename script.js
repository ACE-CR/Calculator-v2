let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculation = '';
let result = '';

buttons.forEach(button => {
	button.addEventListener('click', () => {
		switch (button.id) {
			case 'clear':
				calculation = '';
				result = '';
				display.textContent = '0';
				break;
			case 'equals':
				result = eval(calculation);
				display.textContent = result;
				calculation = result.toString();
				break;
			default:
				calculation += button.textContent;
				display.textContent = calculation;
		}
	});
});