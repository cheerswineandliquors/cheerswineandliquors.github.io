function selector(number) {
	var dropdown_content = document.getElementsByClassName("dropdown-content");
	dropdown_content[0].classList.remove('show');
	dropdown_content[1].classList.remove('show');
	dropdown_content[2].classList.remove('show');
	dropdown_content[number].classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
		var dropdown_content = document.getElementsByClassName("dropdown-content");
	  	if (dropdown_content[0].classList.contains('show')) {
			dropdown_content[0].classList.remove('show');
	  }
	  if (dropdown_content[1].classList.contains('show')) {
		dropdown_content[1].classList.remove('show');
	  }
	  if (dropdown_content[2].classList.contains('show')) {
		dropdown_content[2].classList.remove('show');
	  }
	}
  }