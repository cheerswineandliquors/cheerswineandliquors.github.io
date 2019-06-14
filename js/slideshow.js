function showSlides1() {
    var i;
    var j;
    var k;
    var slides1 = document.getElementsByClassName("mySlides1 fade");
    var slides2 = document.getElementsByClassName("mySlides2 fade");
    var slides3 = document.getElementsByClassName("mySlides3 fade");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";  
    }
    for (j = 0; j < slides2.length; j++) {
        slides2[j].style.display = "none";  
      }
      for (k = 0; k < slides3.length; k++) {
        slides3[k].style.display = "none";  
      }
    slideIndex++;
    if (slideIndex > slides1.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides1[slideIndex-1].style.display = "block"; 
    slides2[slideIndex-1].style.display = "block"; 
    slides3[slideIndex-1].style.display = "block"; 
    //dots[slideIndex-1].className += " active";
    setTimeout(showSlides1, 2000); // Change image every 2 seconds
  }
  /*function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
  }*/