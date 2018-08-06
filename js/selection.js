var selectionAccordionMain = document.getElementsByClassName("accordionMain");
var i;
var accordionMainHeight;
var selectionAccordionSec  = document.getElementsByClassName("accordionSec");
var j;
var panel;

function refresh(panelMain) {
	
	panel=panelMain;
	
}
for (i = 0; i < selectionAccordionMain.length; i++) 
	{
		selectionAccordionMain[i].addEventListener("click", function() {
			this.classList.toggle("selactive");
			var panelMain = this.nextElementSibling;
			if (panelMain.style.maxHeight){
				panelMain.style.maxHeight = null;
			} 
			else {
				panelMain.style.maxHeight = panelMain.scrollHeight + "px";
				refresh(panelMain);
			} 
		}
  );
}



for (j = 0; j < selectionAccordionSec.length; j++) 
	{
		selectionAccordionSec[j].addEventListener("click", function() {
			this.classList.toggle("selactive");
			var panelSec = this.nextElementSibling;
			if (panelSec.style.maxHeight){
				panelSec.style.maxHeight = null;
			} 
			else {
				panelSec.style.maxHeight =  panelSec.scrollHeight + "px";
				panel.style.maxHeight = panel.scrollHeight + panelSec.scrollHeight + "px";

			} 
		}
  );
}