function showMainSlides() {
    var i;
    var slides = document.getElementsByClassName("mainSlides fade");
    var dots = document.getElementsByClassName("mainDot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    mainslideIndex++;
    if (mainslideIndex > slides.length) {mainslideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[mainslideIndex-1].style.display = "block";  
    dots[mainslideIndex-1].className += " active";
    setTimeout(showMainSlides, 3000); // Change image every 2 seconds
  }
  function showSecondSlides() {
    var i;
    var slides = document.getElementsByClassName("secondSlides fade");
    var dots = document.getElementsByClassName("secondDot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    secondslideIndex++;
    if (secondslideIndex > slides.length) {secondslideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[secondslideIndex-1].style.display = "block";  
    dots[secondslideIndex-1].className += " active";
    setTimeout(showSecondSlides, 3000); // Change image every 2 seconds
  }
  function showWineSlides() {
    var i;
    var slides = document.getElementsByClassName("wineSlides fade");
    var dots = document.getElementsByClassName("wineDot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    wineslideIndex++;
    if (wineslideIndex > slides.length) {wineslideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[wineslideIndex-1].style.display = "block";  
    dots[wineslideIndex-1].className += " active";
    setTimeout(showWineSlides, 3000); // Change image every 2 seconds
  }
  function showLiquorSlides() {
    var i;
    var slides = document.getElementsByClassName("liquorSlides fade");
    var dots = document.getElementsByClassName("liquorDot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    liquorslideIndex++;
    if (liquorslideIndex > slides.length) {liquorslideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[liquorslideIndex-1].style.display = "block";  
    dots[liquorslideIndex-1].className += " active";
    setTimeout(showLiquorSlides, 3000); // Change image every 2 seconds
  }
  
