$( document ).ready(function() {
	$('#submit').click(function(){
		let name = $('#name').val();
		let phone_number = $('#phone_number').val();
		let age = $('#age').val();
		let feedback = $('#call').prop('checked') || $('#message').prop('checked');

		if( name && phone_number && age && feedback ){
			$('input#submit-form').trigger('click');
		}else{
			//$('.form-main .button').before('<div class="attention-block"><p>Пожалуйста, заполните все обязательные поля</p></div>');
			if(!name){
				$('#name').addClass('attention');
				$('#name').parent().append('<p class="attention-text">Пожалуйста, заполните все обязательные поля</p>');
			}
			if(!phone_number){
				$('#phone_number').addClass('attention');
				$('#phone_number').parent().append('<p class="attention-text">Пожалуйста, заполните все обязательные поля</p>');
			}
			if(!age){
				$('#age').addClass('attention');
				$('#age').parent().append('<p class="attention-text">Пожалуйста, заполните все обязательные поля</p>');
			}
			if(!feedback){
				$('.input-group-radio .input').addClass('attention');
				$('.input-group-radio .wrapper').append('<p class="attention-text">Пожалуйста, заполните все обязательные поля</p>');
			}
		}
	});
});