$(document).ready ( function(){
	/*let n;
	$("#number").keyup( function() {
		$('.output').empty();
		let i = 0;
		n = $('#number').val();
		while(n > 1){
		 	if (n % 2 == 0) {
		 		n /= 2;
		 	}
		 	else{
		 		n = 3 * n + 1;
		 	}
		 	i++;
		 	$('.output').append('<p class="' + i + '">' + 'Операция номер '+ i+ ': ' + n + '</p>');
		 }
	});*/

	$('#go').click(function() {
		let left = $('.a').val();
		let right = $('.b').val();
		if(right >= left && right - left <= 500000 && left >= 1){
			let max = 1;
			let maxNumber;
			let m;
			for(let n = left; n <= right; n++){
				let i = 0;
				m = n;

				while(m > 1){
				 	if (m % 2 == 0) {
				 		m /= 2;
				 	}
				 	else{
				 		m = 3 * m + 1;
				 	}
				 	i++;
				}
				 if(max <= i){
				 	max = i;
					maxNumber = n;
				 }
			}
			$('.output').append('<p>Число с самым большим кол-вом операций: ' + maxNumber+ ';<br>Кол-во операций: ' + max + '</p>');
		}
		else{
			$('.output').append('<p>Долбоеб, левая граница меньше или равна правой, либо слишком большой диапазон</p>');
		}
	});

});