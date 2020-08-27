
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex +=n );
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-inner");
    if (n > slides.length) {slideIndex=1}
    if (n <1) {slideIndex = slides.length}
    for (i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "grid";
}




const aboutNavs = document.querySelectorAll(".about-nav-item")
aboutNavLinks = document.querySelectorAll(".about-nav-item-link")
aboutNavLinks.forEach(item => item.addEventListener("click", selectItem));

const aboutContent = document.querySelectorAll(".about-content")


function selectItem(i) {
    removeBg();
    removeShow();
    this.parentNode.classList.add("selected");
    const aboutContent = document.querySelector(`#${this.parentNode.id}-content`)
    console.log(aboutContent)
    aboutContent.classList.add("about-content-show")
}


function removeBg() {
    aboutNavs.forEach(item => item.classList.remove("selected"));
}


function removeShow() {
    aboutContent.forEach(item => item.classList.remove("about-content-show"))
}