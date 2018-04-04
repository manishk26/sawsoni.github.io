
var greenDiv1 = document.getElementById('div1');
var greenDiv2 = document.getElementById('div2');
var greenDiv3 = document.getElementById('div3');
var greenDiv4 = document.getElementById('div4');
 	

 	greenDiv1.addEventListener('click',backgroundChange);
 	greenDiv2.addEventListener('click',backgroundChange);
 	greenDiv3.addEventListener('click',backgroundChange);
 	greenDiv4.addEventListener('click',backgroundChange);


 	function backgroundChange(){

 		var allDivs = document.querySelectorAll("div"); //array object

 		//select all children
 		for(var i = 0; i < allDivs.length; i++){ 
 			allDivs[i].className = "green";
 		}

 		var divId = this.attributes['data-div'].value;
 		
 		// here custom attribute(data-) and id attribute value should be same in html

 		 var divColor = document.getElementById(divId);

 		
    	if (divColor.className == "green"){

      			divColor.className = "pink";

    		}else{

    			divColor.className = "green";
    		}


 	}