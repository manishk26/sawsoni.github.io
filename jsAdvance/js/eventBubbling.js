
 var divElement = document.getElementsByTagName('div');

 for(var i = 0; i < divElement.length; i++){

 	divElement[i].onclick = function(event){
 		// event.cancelBubble();//this work in EnternetExaplorer8
 		event.stopPropagation();
 		console.log(event.target);
 		console.log(event.currentTarget);
 		this.style.borderColor = "red";
 		// alert(this.getAttribute("id") + "borderColor change");
 	}
 }


 /*===========*/

 	function changeImage(event){

 		var targetElement = event.target;
 		if(targetElement.tagName == "IMG"){
 			document.getElementById('mainImage').src = targetElement.getAttribute('src');
 		}
 	}

 	divthabnail.addEventListener('click',function(){changeImage(event),thabnailBorderAndCursorChange()});// this div will handal both evebthandler function on click second function i difine down

 	// ============thabnailBorderAndCursorChange() this function get hoisted because i am calling before difining function
 	//now want to change on mouseover thabnail border color and cursor show small hand(pointer)

 	function thabnailBorderAndCursorChange(){

 		var images = document.getElementById('divthabnail').getElementsByTagName('img');//this will give me all thubnail image as array
 		// console.log(images);
 		for(var i = 0; i < images.length; i++){
 			images[i].onmouseover = function(){
 				this.style.cursor = "hand";
 				this.style.borderColor = "black";
 			}
 			images[i].onmouseout = function(){
 				this.style.cursor = "pointer";
 				this.style.borderColor = "green";
 			}
 		}
 	}

 	 // divthabnail.addEventListener('click', thabnailBorderAndCursorChange());




