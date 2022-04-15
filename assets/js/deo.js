/////////////////// SIDEBAR MENU
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
  
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});
}

///////////////// READ MORE BUTTON
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


/////////////////// SLIDER
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let sliderDots = document.getElementsByClassName("dotSlider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < sliderDots.length; i++) {
    sliderDots[i].className = sliderDots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  sliderDots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}
/////////////

let secondSlideIndex = 0;
showSecondSlides();

function showSecondSlides() {
  let n;
  let secondSlides = document.getElementsByClassName("mySecondSlides");
  let secondSliderDots = document.getElementsByClassName("seconDotSlider");
  for (n = 0; n < secondSlides.length; n++) {
    secondSlides[n].style.display = "none";  
  }
  secondSlideIndex++;
  if (secondSlideIndex > secondSlides.length) {secondSlideIndex = 1}    
  for (n = 0; n < secondSliderDots.length; n++) {
    secondSliderDots[n].className = secondSliderDots[n].className.replace(" active", "");
  }
  secondSlides[secondSlideIndex-1].style.display = "block";  
  secondSliderDots[secondSlideIndex-1].className += " active";
  setTimeout(showSecondSlides, 5000); // Change image every 2 seconds
}




///////////////// PRIVACY POLICY COLLAPSIBLE
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


//////////////// BACK TO TOP BUTTON
var mybutton = document.getElementById("myScrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
