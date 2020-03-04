var obj = {
	provincia: "",
	service: ""
};

var s = [
	{ i: 0, n: "POLICIA- EXPEDICIÓN/RENOVACIÓN DE DOCUMENTOS DE SOLICITANTES DE ASILO" },
	{ i: 1, n: "POLICIA- SOLICITUD ASILO" },
	{ i: 2, n: "SOLICITUD DE AUTORIZACIONES" },
	{ i: 3, n: "AUT. DE RESIDENCIA TEMPORAL POR CIRCUNS. EXCEPCIONALES POR ARRAIGO" },
	{ i: 4, n: "POLICIA-CERTIFICADOS UE" },
	{ i: 5, n: "POLICIA-TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA) Y RENOVACIÓN DE TARJETA DE LARGA DURACIÓN" },
	{ i: 6, n: "ARRAIGO-EXCEPCIONALES" },
	{ i: 7, n: "AUTORIZACIÓN DE REGRESO" },
	{ i: 8, n: "AUTORIZACIÓN DE RESIDENCIA DE MENORES NACIDOS EN ESPAÑA, HIJOS DE RESIDENTES" },
	{ i: 9, n: "AUTORIZACIONES DE TRABAJO" },
	{ i: 10, n: "FAMILIARES DE RESIDENTES COMUNITARIOS" },
	{ i: 11, n: "INFORMACIÓN" },
	{ i: 12, n: "MODIFICACIÓN de las SITUACIONES (sujeto legitimado EXTRANJERO)" },
	{ i: 13, n: "POLICIA-ASIGNACIÓN DE NIE" },
	{ i: 14, n: "POLICIA-Certificado de residente o no residente" },
	{ i: 15, n: "POLICIA-CERTIFICADOS UE (EXCLUSIVAMENTE PARA REINO UNIDO)" },
	{ i: 16, n: "POLICIA-Expedición de Carta de Invitación" },
	{ i: 17, n: "REAGRUPACIÓN FAMILIAR" },
	{ i: 18, n: "Recuperación de la autorización de larga duración" },
	{ i: 19, n: "Resid. Menores NO nacidos en España" },
	{ i: 20, n: "AUTORIZACIÓN DE RESIDENCIA TEMPORAL Y TRABAJO INICIAL POR CUENTA AJENA" },
	{ i: 21, n: "RECOGIDA DE TARJETA DE IDENTIFICACIÓN DE EXTRANJERO (TIE)" },
	{ i: 22, n: "OTROS TRÁMITES COMISARIA" },
	{ i: 23, n: "POLICÍA-EXPEDICIÓN/RENOVACIÓN DE DOCUMENTOS DE SOLICITUD DE APATRIDIA" },
	{ i: 24, n: "POLICIA-INFORMACION DE TRÁMITES DE LA COMISARÍA DE POLICIA" },
	{ i: 25, n: "AUTORIZACIONES DE RESIDENCIA" },
	{ i: 26, n: "INCIDENCIAS TRÁMITES EXTRANJERÍA" },
	{ i: 27, n: "RENOVACIONES DE AUT. DE RESIDENCIA  y/o  AUT. DE RESIDENCIA Y TRABAJO" },
	{ i: 28, n: "ACCESO A 1ª AUT. DE RESIDENCIA DE LARGA DURACIÓN Y LARGA DURACIÓN UE" },
	{ i: 29, n: "AUTORIZACIÓN ESTANCIA INICIAL POR ESTUDIOS" },
	{ i: 30, n: "AUTORIZACIONES INICIALES DE TRABAJO" },
	{ i: 31, n: "POLICIA-ESTUDIANTES Y AUXILIARES DE CONVERSACIÓN EXTRACOMUNITARIOS" },
	{ i: 32, n: "PRORROGA DE ESTANCIA POR ESTUDIOS" },
	{ i: 33, n: "Recuperación de la autorización de larga duración UE" },
	{ i: 34, n: "RENOVACIÓN AUTORIZACIÓN RESIDENCIA POR REAGRUPACIÓN FAMILIAR" },
	{ i: 35, n: "RENOVACIONES DE AUTORIZACIÓN DE RESIDENCIA CON TRABAJO" },
	{ i: 36, n: "AUT. DE RESIDENCIA TEMPORAL POR CIRCUNS.EXCEPCIONALES ARRAIGO FAMILIAR" },
	{ i: 37, n: "AUT. RESIDENCIA POR OTRAS CIRCUNSTANCIAS EXCEPCIONALES" },
	{ i: 38, n: "AUTORIZACIONES DE TRABAJO POR ESTUDIOS" },
	{ i: 39, n: "RENOVACIÓN DE AUT.DE RESIDENCIA TEMPORAL NO LUCRATIVAS" },
	{ i: 40, n: "TRABAJO Y RESIDENCIA INICIAL POR CUENTA AJENA" },
	{ i: 41, n: "TRABAJO Y RESIDENCIA INICIAL POR CUENTA PROPIA" },
	{ i: 42, n: "Renovaciones, Prórrogas y Modificaciones" },
	{ i: 43, n: "INFORMACIÓN GENERAL - IBIZA" },
	{ i: 44, n: "SOLICITUD AUTORIZACIONES - IBIZA" },
	{ i: 45, n: "SOLICITUD AUTORIZACIONES - MALLORCA" },
	{ i: 46, n: "TRÁMITE PARA LA DOCUMENTACIÓN DE NACIONALES DEL REINO UNIDO" },
	{ i: 47, n: "POLICIA-AUTORIZACIONES DE REGRESO" },
	{ i: 48, n: "ASILO - OFICINA DE ASILO Y  REFUGIO. Entrevista Trabajador/a  Social. Calle Pradillo" },
	{ i: 49, n: "ASILO - OFICINA DE ASILO Y  REFUGIO. Expedición/Renovación de Documentos. Calle Pradillo" },
	{ i: 50, n: "AUT. RES. TEMPORAL POR CIRCUNSTANCIAS EXCEPCIONALES POR RAZONES HUMANITARIAS" },
	{ i: 51, n: "POLICIA-CERTIFICADOS (DE RESIDENCIA, DE NO RESIDENCIA Y DE CONCORDANCIA)" },
	{ i: 52, n: "POLICIA-DUPLICADO DE TARJETA DE IDENTIDAD DE EXTRANJERO" },
	{ i: 53, n: "POLICÍA-EXPEDICIÓN DE TARJETAS CUYA AUTORIZACIÓN RESUELVE LA DIRECCIÓN GENERAL DE MIGRACIONES" },
	{ i: 54, n: "POLICIA-CERTIFICADOS Y ASIGNACION NIE" },
	{ i: 55, n: "AUTORIZACIÓN DE RESIDENCIA DE MENORES" },
	{ i: 56, n: "AUTORIZACIÓN DE REGRESO - TENERIFE" },
	{ i: 57, n: "SOLICITUD DE AUTORIZACIONES - ISLA DE LA PALMA" },
	{ i: 58, n: "SOLICITUD DE AUTORIZACIONES - TENERIFE" },
	{ i: 59, n: "POLICIA - Certificados / Comunitarios" },
	{ i: 60, n: "Trámites para la documentación de nacionales de la Unión Europea" }
];

var ps = [
	{ n: "A Coruña", s: [s[0].i, s[1].i, s[2].i ] },
	{ n: "Albacete", s: [s[3].i, s[4].i, s[5].i, s[2].i ] },
	{ n: "Alicante", s: [s[6].i, s[7].i, s[8].i, s[9].i, s[10].i, s[11].i, s[12].i, s[13].i, s[14].i, s[4].i, s[15].i, s[16].i, s[5].i, s[17].i, s[18].i, s[19].i] },
	{ n: "Almeria", s: [s[3].i, s[8].i, s[20].i, s[10].i, s[0].i, s[1].i, s[13].i, s[14].i, s[4].i, s[15].i, s[16].i, s[5].i, s[17].i, s[21].i, s[19].i] },
	{ n: "Araba", s: [s[22].i, s[5].i, s[2].i ] },
	{ n: "Badajoz", s: [s[5].i, s[2].i] },
	{ n: "Barcelona", s: [s[1].i, s[2].i] },
	{ n: "Bizkaia", s: [s[11].i, s[0].i, s[1].i, s[16].i, s[23].i, s[24].i, s[2].i] },
	{ n: "Cáceres", s: [s[5].i, s[2].i] },
	{ n: "Cantabria", s: [s[3].i, s[10].i, s[4].i, s[5].i, s[17].i, s[2].i] },
	{ n: "Castellon", s: [s[3].i, s[25].i, s[9].i, s[10].i, s[26].i, s[4].i, s[5].i, s[17].i] },
	{ n: "Ceuta", s: [s[25].i, s[9].i, s[5].i ] },
	{ n: "Ciudad Real", s: [s[3].i, s[8].i, s[9].i, s[10].i, s[4].i, s[17].i, s[27].i] },
	{ n: "Cordoba", s: [s[4].i, s[5].i, s[2].i ] },
	{ n: "Cuenca", s: [s[28].i, s[3].i, s[7].i, s[8].i, s[29].i, s[30].i, s[10].i, s[26].i, s[11].i, s[13].i, s[14].i, s[4].i, s[31].i, s[5].i, s[32].i, s[17].i, s[33].i, s[34].i, s[35].i, s[19].i] },
	{ n: "Girona", s: [s[28].i, s[3].i, s[8].i, s[10].i, s[11].i, s[5].i, s[32].i, s[17].i, s[27].i] },
	{ n: "Granada", s: [s[28].i, s[36].i, s[37].i, s[8].i, s[9].i, s[38].i, s[10].i, s[4].i, s[15].i, s[5].i, s[32].i, s[17].i, s[39].i, s[35].i, s[19].i, s[2].i, s[40].i, s[41].i] },
	{ n: "Guadalajara", s: [s[2].i] },
	{ n: "Guipúzcoa", s: [s[2].i] },
	{ n: "Huelva", s: [s[9].i, s[4].i, s[35].i, s[2].i] },
	{ n: "Huesca", s: [s[3].i, s[29].i, s[32].i, s[17].i, s[42].i, s[2].i, s[40].i] },
	{ n: "Illes Balears", s: [s[43].i, s[13].i, s[4].i, s[15].i, s[5].i, s[44].i, s[45].i, s[46].i] },
	{ n: "Jaen", s: [s[5].i, s[2].i] },
	{ n: "Las Palmas", s: [s[2].i] },
	{ n: "León", s: [s[17].i, s[2].i] },
	{ n: "Lleida", s: [s[0].i, s[13].i, s[47].i, s[14].i, s[4].i, s[16].i, s[5].i, s[21].i] },
	{ n: "Logroño", s: [s[3].i, s[10].i, s[11].i] },
	{ n: "Madrid", s: [s[48].i, s[49].i, s[3].i, s[50].i, s[8].i, s[38].i, s[10].i, s[11].i, s[13].i, s[47].i, s[51].i, s[4].i, s[15].i, s[52].i, s[53].i, s[5].i, s[32].i, s[17].i, s[18].i, s[19].i, s[40].i, s[41].i] },
	{ n: "Malaga", s: [s[28].i, s[3].i, s[8].i, s[20].i, s[10].i, s[11].i, s[47].i, s[14].i, s[4].i, s[15].i, s[54].i, s[16].i, s[24].i, s[5].i, s[17].i, s[42].i, s[19].i] },
	{ n: "Melilla", s: [s[11].i, s[5].i, s[21].i, s[2].i] },
	{ n: "Murcia", s: [s[3].i, s[8].i, s[10].i, s[11].i, s[0].i, s[13].i, s[47].i, s[51].i, s[4].i, s[15].i, s[31].i, s[16].i, s[5].i, s[17].i, s[19].i, s[40].i,] },
	{ n: "Navarra", s: [s[6].i, s[55].i, s[9].i, s[10].i, s[16].i, s[5].i, s[17].i] },
	{ n: "Orense", s: [s[2].i] },
	{ n: "S.Cruz Tenerife", s: [s[56].i, s[4].i, s[15].i, s[5].i, s[57].i, s[58].i] },
	{ n: "Salamanca", s: [s[2].i] },
	{ n: "Tarragona", s: [s[3].i, s[8].i, s[10].i, s[13].i, s[47].i, s[14].i, s[4].i, s[15].i, s[16].i, s[5].i, s[17].i] },
	{ n: "Teruel", s: [s[24].i, s[2].i] },
	{ n: "Toledo", s: [s[0].i, s[13].i, s[51].i, s[4].i, s[5].i, s[2].i] },
	{ n: "Valencia", s: [s[3].i, s[37].i, s[8].i, s[9].i, s[38].i, s[10].i, s[11].i, s[59].i, s[0].i, s[47].i, s[15].i, s[54].i, s[24].i, s[5].i, s[32].i, s[17].i, s[19].i] },
	{ n: "Zamora", s: [s[5].i, s[2].i] },
	{ n: "Zaragoza", s: [s[11].i, s[0].i, s[1].i, s[13].i, s[14].i, s[4].i, s[16].i, s[5].i, s[2].i, s[60].i] }
];

//init
var provinciasStr = "";
$.each(ps, function (i, v) {
	provinciasStr += "<option value=" + v.n + ">" + v.n + "</option>";
});
$("#slc_provincia").append(provinciasStr);


$("#block_provincias input[value='Aceptar']").click(function () {
	if (!$("#slc_provincia option:selected").val()) {
		$('#block_provincias .error_list').show();
		return;
	}

	$('#block_provincias .error_list').hide();
	$("#block_provincias").hide();
	var provinciaSelected = $("#dv_provincia_selected");
	provinciaSelected.show();
	var selected = $("#slc_provincia option:selected").text();
	provinciaSelected.find("span.text-info").text(selected);
	obj.provincia = selected;

	var slcService = $("#slc_service").empty();
	slcService.empty();
	var provinciaServices = ps.filter(obj => { return obj.n === selected; });

	var provinciaServicesStr = "<option selected='selected' value=''>Despliegue para ver trámites disponibles en esta provincia ...</option>";
	$.each(provinciaServices[0].s, function (i, v) {
		provinciaServicesStr += "<option value=" + s[v].n + ">" + s[v].n + "</option>";
	});
	slcService.append(provinciaServicesStr);

	$("#block_services").show();
});

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
	lbl.append("<span class='fld-help'>Campo obligatorio</span>");
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
	lbl.append("<span class='fld-help'>Campo obligatorio</span>");
});



$("#block_solicitante input[value='Aceptar']").click(function () {

	var pasaporte = $("#intPasaporte").val();
	var apellidos = $("#intApellidos").val();
	var nacimiento = $("#intNacimiento").val();
	var nacionalidad = $("#slt_PaisNac option:selected").text();
	var telefono = $("#intTelefono").val();

	if (!pasaporte || !apellidos || !nacimiento || !nacionalidad || !telefono) {
		$('#block_solicitante .error_list').show();
		return;
	}
	var fecha = $("#intFecha").val();
	var escriba = $("#intEscriba").val();

	$('#block_solicitante .error_list').hide();

	$("#dv_documento_selected").show().find("span.text-info").text(pasaporte);
	$("#dv_apellidos_selected").show().find("span.text-info").text(apellidos);
	$("#dv_nacimiento_selected").show().find("span.text-info").text(nacimiento);
	$("#dv_nacionalidad_selected").show().find("span.text-info").text(nacionalidad);
	$("#dv_fecha_selected").show().find("span.text-info").text(fecha);
	$("#dv_escriba_selected").show().find("span.text-info").text(escriba);
	$("#dv_conexión_selected").show().find("span.text-info").text(telefono);

	$("#block_solicitante").hide();
	$("#block_finish").show();
});


$("#block_solicitante input[value='Volver']").click(function () {
	$("#block_solicitante").hide();
	$("#dv_service_selected").hide();
	$("#block_services").show();
});


$("#block_finish input[value='Enviar']").click(function () {
	alert("ДЕЛАЕМ ЗАПРОС (пока пустой)");
});


$("#block_finish input[value='Volver']").click(function () {
	$("#block_finish").hide();
	$("#block_solicitante").show();
	$("#dv_documento_selected").hide();
	$("#dv_apellidos_selected").hide();
	$("#dv_nacimiento_selected").hide();
	$("#dv_nacionalidad_selected").hide();
	$("#dv_fecha_selected").show().hide();
	$("#dv_escriba_selected").show().hide();
	$("#dv_conexión_selected").show().hide();
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

$("label.required").next(".mf-input__m").change(function(){
	if($(this).val() != ""){
		$(this).removeClass("notCompleted");
	}else{
		$(this).addClass("notCompleted");
	}
});