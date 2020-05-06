var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
	clearTimeout(timer);
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	clearTimeout(timer);
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n==undefined){n = ++slideIndex}
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	timer = setTimeout(showSlides, 4000);
}

function openForm() {
	document.getElementById("form-popup").style.display="block";
}

function closeForm() {
	document.getElementById("form-popup").style.display="none";
}

window.onclick = function(event) {
	var modal = document.getElementById('form-popup');
	if (event.target == modal) {
		closeForm();
	}
}