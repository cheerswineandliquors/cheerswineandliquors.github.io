var selectionAccordionMain = document.getElementsByClassName("accordionMain");
var i;
var accordionMainHeight;
var accordionNMainHeight;
var selectionAccordionSec  = document.getElementsByClassName("accordionSec");
var j;
var selectionAccordionNull  = document.getElementsByClassName("accordionNull");
var k;
var panel;
var panelN;
function refresh(panelMain) {
	
	panel=panelMain;
	
}
function refreshN(panelNull) {
	
	panelN=panelNull;
	
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
				panelN.style.maxHeight = panelN.scrollHeight + panelSec.scrollHeight + "px";
			} 
		}
  );
}

for (k = 0; k < selectionAccordionNull.length; k++) 
{
	selectionAccordionNull[k].addEventListener("click", function() {
		this.classList.toggle("selactive");
		var panelNull = this.nextElementSibling;
		if (panelNull.style.maxHeight){
			panelNull.style.maxHeight = null;
		} 
		else {
			panelNull.style.maxHeight =  panelNull.scrollHeight + "px";
			panel.style.maxHeight = panel.scrollHeight + panelNull.scrollHeight + "px";
		
			refreshN(panelNull);
			}
		} 
	
);
}