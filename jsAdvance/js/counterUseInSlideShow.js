 /**
 This is a slider function, based on closure
 It has closure functions - next and slide
 @param data - an array of objects(text, number, images)
 */
 function Slider(data){
 	var i = 0;
 	var elem ;

	// Closure function next
 	function _next(){
 		i = i + 1;
 		if(i > data.length - 1){
 			i = 0;
 		};
 	}

	// Closure function slide
 	function slide(){ 
 		elem = data[i];
 		_next();
 		return elem;
 	}

 	return {
 		slide
 	}
 }

var arrayText = ['<i>Soni</i>','Moni','Toni','Loni','Nani','<img src="image/pic_bulbon.gif" alt = "img">'];
 var ar = [1,2,3,4,5];
 var images = ['<img src="../image/sea.jpg">','<img src="../image/teacup.jpg">']
 var count = Slider(images);
 console.log(count.slide());
 var c;
/*=================Count end==========*/
 	function callFunction(){
 		var text = document.getElementById('text');
 			text.innerHTML = count.slide();
 			//text.style.opacity = 0.6;

	}
	/*function callSetTimeout(){
		 c = setTimeout(callFunction,1000);
	}*/
	/*function clearSetTimeout(){
		clearTimeout(c);
	}*/
	function callSetTime(){
		 c = setInterval(callFunction,1000);
	}
	function clearSetTime(){
		clearInterval(c);
	}
	
	// window.onload = callSetTime();
	window.addEventListener('load',callSetTime);

	document.getElementById('start').addEventListener('click',callSetTime);
	document.getElementById('ok').addEventListener('click',clearSetTime);




