$(document).ready(function(){
	$("#tel").mask("+7 (000) 000-00-00", {
		placeholder: "+7(___)___-__-__"
	});

	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i; //name-_09@mail09-.ru
	var mail = $('#email');
	let form_filled = 0;

	let mail_status = false;
	let tel_status = false;
	let name_status = false;
	let surname_status = false;
	let agree1_status = false;
	let agree2_status = false;
	let form_status;

	function check_form(){
		form_status = mail_status && tel_status && name_status && surname_status && agree1_status && agree2_status;
		console.log('Form_status = ' + form_status);
		if(form_status){
			$('.send').removeAttr('disabled');
		}
	}
	
	mail.blur(function(){
		if(mail.val() != ''){
			if(mail.val().search(pattern) == 0){
				mail.parent().next('.valid').text('');
				mail.removeClass('error');
				mail.parent().addClass('ok');
				mail_status = true;
				console.log(mail_status);
				check_form();
			}else{
				mail.parents().next('.valid').text('Не верный формат данных');
				mail.addClass('error');
				mail.parent().removeClass('ok');
				mail_status = false;
				$('.send').attr('disabled', '');
			}
		}
	});

	$("#tel").change(function(){
		let tel_num = $(this).val();
		tel_num = parseInt(tel_num.replace(/\D+/g,""))
		tel_num = String(tel_num);//получаем количество цифр в введенном номере

		if(tel_num.length == 11){
			$(this).parent().addClass('ok');
			$(this).removeClass('error');
			tel_status = true;
			check_form();
		}else{
			$(this).parent().removeClass('ok');
			$(this).addClass('error');
			tel_status = false;
			$('.send').attr('disabled', '');
		}
	});

	$("#name").change(function(){
		let name = $(this).val();
		if(name.length > 0){
			$(this).parent().addClass('ok');
			$(this).removeClass('error');
			name_status = true;
			check_form();
		}else{
			$(this).parent().removeClass('ok');
			$(this).addClass('error');
			name_status = false;
			$('.send').attr('disabled', '');
		}
	});

	$("#surname").change(function(){
		let name = $(this).val();
		if(name.length > 0){
			$(this).parent().addClass('ok');
			$(this).removeClass('error');
			surname_status = true;
			check_form();
		}else{
			$(this).parent().removeClass('ok');
			$(this).addClass('error');
			surname_status = false;
			$('.send').attr('disabled', '');
		}
	});

	$('#agree-1').change(function(){
		agree1_status = $('#agree-1').prop('checked');
		if(!agree1_status)
			$('.send').attr('disabled', '');
		check_form();
	});

	$('#agree-2').change(function(){
		agree2_status = $('#agree-2').prop('checked');
		if(!agree2_status)
			$('.send').attr('disabled', '');
		check_form();
	});
	$('a.signup').click(function(e){
		e.preventDefault();
		$('.modal').addClass('active');
	});
	$('p.signup a').click(function(e){
		e.preventDefault();
		$('.modal').addClass('active');
	});
	$('.cancel').click(function(e){
		e.preventDefault();
		$('.modal').removeClass('active');
	});

	$('select').styler();
	$('.jq-selectbox ul').scrollbar();
});