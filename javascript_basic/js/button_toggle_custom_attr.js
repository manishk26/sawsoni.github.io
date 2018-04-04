//1st way: this is call wet code, codding is so long
 /*
 var seaButton = document.getElementById('sea');// id of 1st <a> element
 var seaImg = document.getElementById('sea-pic');// id of 1st img

 var teaButton = document.getElementById('tea');// id of 2st <a>
 var teaImg = document.getElementById('tea-pic');// id of 2st img

 var fruitButton = document.getElementById('fruit');// id of 3st <a>
 var fruitImg = document.getElementById('fruit-pic');// id of 3st img

*/
 //use addEventListener() method
 //syntex
 //element.addEventListener(event, function, useCapture) 
	/*1. event- Required. A string that specifies the name of the event.
				but donot use the "on" prefix,use 'click' instead 
				of "onclick"

	 2.function - Required.	Specifies the function to run when the event occurs	

	 3.useCapture - Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase.

			Possible values:

    		true - The event handler is executed in the capturing phase
    		false- Default. The event handler is executed in the bub*/


    /* //here i am writng function in side
    seaButton.addEventListener("click",function(){
    	if(seaImg.className == "hide"){
    		seaImg.className = "";
    	}else{
    		seaImg.className = "hide";
    	}
    });

	teaButton.addEventListener("click",function(){
	    	if(teaImg.className == "hide"){
	    		teaImg.className = "";
	    	}else{
	    		teaImg.className = "hide";
	    	}
	    });

	 fruitButton.addEventListener("click",function(){
	    	if(fruitImg.className == "hide"){
	    		 fruitImg.className = "";
	    	}else{
	    		 fruitImg.className = "hide";
	    	}
	    });*/

   //2nd way-:right-way to do

   /* var seaButton = document.getElementById('sea');
   	var teaButton = document.getElementById('tea');
   	var fruitButton = document.getElementById('fruit');

   	seaButton.addEventListener("click",pictureLink);
   	teaButton.addEventListener("click",pictureLink);
   	fruitButton.addEventListener("click",pictureLink);

   		function pictureLink(){
		   		var picId = this.attributes["data-img"].value;
		   		// in html our id value of img and data-img value of li  is same

		   		var pic = document.getElementById(picId);
		   		// in id place store variable which is equal to data-img.value

		   		if(pic.className == "hide"){
		   			pic.className = "";
		   		}else{
		   			pic.className = "hide";
		   		}
    	
     	 }*/


  //3rd way to do
  // if it has to display only one image at a time & cancel the existing one 


  	var seaButton = document.getElementById('sea');
   	var teaButton = document.getElementById('tea');
   	var fruitButton = document.getElementById('fruit');

   	seaButton.addEventListener("click",pictureLink);
   	teaButton.addEventListener("click",pictureLink);
   	fruitButton.addEventListener("click",pictureLink);

   		function pictureLink(){

   			var allImages = document.querySelectorAll("img")

   				//this loop will hide image
   				for(var i = 0; i < allImages.length; i++){
   					allImages[i].className = "hide";
   				}

		   		var picId = this.attributes["data-img"].value;
		   		console.log(this);//this is a anchor tag
		   		// in html our id value of img and data-img value of li  is same

		   		var pic = document.getElementById(picId);
		   		console.log(pic);
		   		// in id place store variable which is equal to data-img.value

		   		if(pic.className == "hide"){
		   			pic.className = "";
		   		}else{
		   			pic.className = "hide";
		   		}
    	
     	 }


















