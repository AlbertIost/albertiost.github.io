window.onload = function() {
	let modal = document.getElementsByClassName('modal_add-user');
	let button = document.querySelectorAll('.add > a');
	let cancel = document.querySelectorAll('.cancel');
	button[0].onclick = function(){
		modal[0].classList.add("active");
	}
	cancel[0].onclick = function(){
		modal[0].classList.remove("active");
	}
}