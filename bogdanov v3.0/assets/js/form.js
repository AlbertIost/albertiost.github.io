$(document).ready(function(){
	$("#tel").mask("+7(000)000-00-00", {
		placeholder: "+7(___)___-__-__",
		clearIfNotMatch: true
	});

	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i; //name-_09@mail09-.ru
	var mail = $('#email');
	
	mail.blur(function(){
		if(mail.val() != ''){
			if(mail.val().search(pattern) == 0){
				$('.valid').text('Подходит');
				$('#submit').attr('disabled', false);
				mail.removeClass('error').addClass('ok');
			}else{
				$('.valid').text('Не верный формат данных');
				$('#submit').attr('disabled', true);
				mail.addClass('error');
			}
		}else{
			$('#valid').text('Поле e-mail не должно быть пустым!');
			mail.addClass('error');
			$('#submit').attr('disabled', true);
		}
	});
	$("#tel").change(function(){
		let tel = $(this).val();
		let tel_num = parseInt(tel.replace(/\D+/g,""))
		tel_num = String(tel_num);//получаем количество цифр в введенном номере
	});
});