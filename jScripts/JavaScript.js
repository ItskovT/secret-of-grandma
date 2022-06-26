var currentIndex = 0;

function plusSlides() {
    currentIndex++;
    showSlides(currentIndex);
}

function minusSlides() {
    currentIndex--;
    showSlides(currentIndex);
}

function currentSlide(n) {
    currentIndex = n;
    showSlides(currentIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length-1) {currentIndex = 0} 
    if (n < 0) {currentIndex = slides.length-1} 

    for (i = 0; i < slides.length; i++) { // hide all
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // change the selected dot to the default
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //everything is hide(dots and slides)
    slides[currentIndex].style.display = "block"; // show the currentIndex slide
    dots[currentIndex].className += " active"; // activate the currentIndex dot
}
