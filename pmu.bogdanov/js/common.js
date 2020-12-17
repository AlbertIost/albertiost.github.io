$(function() {

	/* BUTTONS */
	$(".btn-pulse").on("click", function(){
		var $this = $(this);

		$this.removeClass("circle-pulse");
		setTimeout(function(){
			$this.addClass("circle-pulse")
		}, 1);
		$this.closest("li").siblings("li").find(".btn-pulse").removeClass("circle-pulse");

	});

	$(".contacts-wrap").liteAccordion({
		containerWidth : 367,
		containerHeight : 30,
		firstSlide : 2,
		theme : "",
		onTriggerSlide : function(){
				var $this = $(this),
						accordItem = $this.parent().siblings("li").children(".contact-text");


				if( $this.is(":visible") ){
					
					if( !$this.siblings("h2").hasClass("selected") ){
						$this.stop(false, true).fadeOut(0);

					}
					if( accordItem.is(":hidden") && !$this.closest("li").hasClass("firts-accord") ){
						$this.stop(false, true).fadeOut(0);
					}

				}else{
					accordItem.stop(false, true).fadeOut(0);
				}
		},
	
		onSlideAnimComplete: function(){
			var $this = $(this),
					accordItem = $this.parent().siblings("li").children(".contact-text");
				
				if( $this.is(":hidden") ){
					$this.stop(false, true).fadeIn(300);
				}

		}
	}).find(".contact-text:first").hide(0);

	$(".checkbox-toggle-arrow").on("click", function(){
		var self = $(this);
			
		self.parent().siblings().find(".checkbox-description").stop(true, false).slideUp();
		self.siblings(".checkbox-description").stop(true, false).slideToggle();
	});
	/* BUTTONS END */


	/* RESPONSIVE */
	$(".mnu").on("click", function(){
			$(this).stop(false, true).toggleClass("opened");
			$(".mobile-mnu-list").stop(false, true).slideToggle(600);
	});


	$(".nav-mobile").find("a").on("click", function(){
		$(".mobile-mnu-list").stop(false, true).slideUp(600);
		$(".mnu").removeClass("opened");
	});


	$(".nav-mobile").children("li").children("a").hover(function(){
		$(this).parent("li").addClass("hover");

	},function(){

		$(this).parent("li").removeClass("hover");
	});

	/* VALIDATE */
	jQuery.extend(jQuery.validator.messages, {
		required: "Поле обязательное для заполнения",
		myText: "Поле должно содержать только русские буквы",
		myNumber: "Введите корректный телефон",
		email: "Введите корректный E-mail",
		sex: "Необходимо выбрать один из вариантов",
		minlength: jQuery.validator.format("Длина поля должно быть не менее {0}-х символов")
	});

	$.validator.addMethod("myText", function( value, element ) {
		return this.optional( element ) || /[а-яё]+$/i.test( value );
	});
	$.validator.addMethod("myNumber", function( value, element ) {
		return this.optional( element ) || /^([+]?[0-9\s-\(\)]{5,25})*$/i.test( value );
	});

	$(".form").validate({
		rules: {
			EMAIL: {
				required: true,
				email: true
			},
			FNAME: {
				required: true,
				myText: true,
				minlength: 3
			},
			LNAME: {
				required: true,
				myText: true
			},
			TELEPH: {
				
				myNumber: true
			},
			Sex: {
				required: true,
				sex: true
			}
		},
		errorClass: "invalid-label",
		focusCleanup: true,
		submitHandler: function(form) {
			$(form).ajaxSubmit();
		}
	});

	$("body").on("click","label.invalid-label", function(){
		$(this).remove();
	});
});