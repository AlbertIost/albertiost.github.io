
$("#ul_pasaporte input").click(function (e) {
	var lbl = $("#lblPasaporte");
	switch (e.currentTarget.value) {
		case "N.I.E.": {
			lbl.text("N.I.E.");
			break;
		}
		case "D.N.I.": {
			lbl.text("D.N.I.");
			break;
		}
		case "Pasaporte": {
			lbl.text("Pasaporte");
			break;
		}
	}
});

$("#ul_telefono input").click(function (e) {
	var lbl = $("#lblTelefono");
	switch (e.currentTarget.value) {
		case "Teléfono": {
			lbl.text("Teléfono/WhatsApp");
			break;
		}
		case "e-Mail": {
			lbl.text("e-Mail");
			break;
		}
	}
});
$("label.required").next(".mf-input__m").addClass("notCompleted");
$("select.mf-input__m").addClass("notCompleted");

$("select.mf-input__m").change(function(){
	if($(this).children("option:selected").val() != 0){
		$(this).removeClass("notCompleted");
	}else{
		$(this).addClass("notCompleted");
	}
});
$("label.required").next(".mf-input__m").focus(function(){
	$(this).removeClass("notCompleted");
});
$("label.required").next(".mf-input__m").blur(function(){
	if($(this).val() != ""){
		$(this).removeClass("notCompleted");
	}else{
		$(this).addClass("notCompleted");
	}	
});
$("#rdbTipoConTel").click(function(){
	$("#intTelefono").attr("placeholder", "000-00-00-00");
});
$("#rdbTipoConMail").click(function(){
	$("#intTelefono").attr("placeholder", "name@domen.com");
});

$('input#intFecha').on('keyup', function(){
  var v = $(this).val();
  if (v.match(/^\d{2}$/) !== null) {
    $(this).val(v + '/');
  } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
    $(this).val(v + '/');
  }  
});
$('input#intTelefono').on('keyup', function(){
  var v = $(this).val();
  if($("#rdbTipoConTel").prop("checked")){
  	if (v.match(/^\d{3}$/) !== null) {
	    $(this).val(v + '-');
	} else if (v.match(/^\d{3}\-\d{2}$/) !== null) {
	    $(this).val(v + '-');
	} else if (v.match(/^\d{3}\-\d{2}\-\d{2}$/) !== null) {
	    $(this).val(v + '-');
	} 
  }
});
$('input[name="rdbTipoCon"]').change(function(){
	$('#intTelefono').val("");
});
$('input[name="rdbTipoDoc"]').change(function(){
	$('#intPasaporte').val("");
});