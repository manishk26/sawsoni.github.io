$(document).ready( ()=> {
	
	setDataInSlider();
	callSetTime();

	function setDataInSlider(){
		var images= ['<img src="image/bgimage.jpg" width="500px",height="350px">','<img src="image/bird.jpg" width="500px",height="400px">','<img src="image/clover.jpg" width="500px",height="400px">','<img src="image/lime.jpg" width="500px",height="400px">','<img src="image/tree.jpg" width="500px",height="400px">'];
		Slider.setData(images);
	}


	var c;

	function updateDomElement(){
		var e = document.getElementById('slideImg');
		e.innerHTML = Slider.slide();
	}

	function callSetTime(){
		 c = setInterval(updateDomElement,1000);
	}
	function clearSetTime(){
		clearInterval(c);
	}
});