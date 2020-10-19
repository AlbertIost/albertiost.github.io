const numeralsPattern = [
[1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],//0
[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],//1
[1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],//2
[1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],//3
[1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],//4
[1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],//5
[1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],//6
[1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],//7
[1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],//8
[1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1]//9
];
let numberPhone = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];

let checkboxes = document.querySelectorAll('input');
let numerals = document.querySelectorAll('.numeral')

checkboxes.forEach((el, index) => {
	el.onchange = () =>{
		setNumeral(Math.floor(index / 28), index % 28);
	};
});

function setNumeral(numeral, boxIndex){
	let boxes = numerals[numeral].querySelectorAll('input');
	let numeralPattern = [];

	boxes.forEach((el, i) => {
		numeralPattern[i] = +(el.checked);
	});
	let trueNum;
	for(let j = 0; j < 10; j++){
		let a = numeralsPattern[j].every((el, i) => {
			if (el == numeralPattern[i]) {
				return true;
			}
		});

		if(a)
			trueNum = j;
	}

	if(trueNum !== undefined){
		numberPhone[numeral] = trueNum;
		document.querySelector('.number').innerText = `+${numberPhone[0]} (${numberPhone[1]}${numberPhone[2]}${numberPhone[3]}) ${numberPhone[4]}${numberPhone[5]}${numberPhone[6]}-${numberPhone[7]}${numberPhone[8]}-${numberPhone[9]}${numberPhone[10]}`;
	}
}