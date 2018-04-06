 		var content = document.getElementById("changeContent")
 		console.log(content);
 		content.innerHTML = "Hello Dolly.";
 		

		function clickMe(){
		 	var button = document.getElementById('demo');
		 	button.innerHTML = 'Hello javascript!';
		 }

		 function switchOn(){
		 	var bulbOn = document.getElementById('myImage');
		 	  bulbOn.src = 'image/pic_bulbon.gif';
		 }

		 function switchOff(){
		 	var bulbOff = document.getElementById('myImage');
		 	  bulbOff.src = 'image/pic_bulboff.gif';
		 }

		 function changeColor(){
		 	var contentColor = document.getElementById('demo3');
		 	 contentColor.style.color = 'red';
		 	  contentColor.style.fontSize = '20px';
		 }

		 function hideMe(){
		 	var hideContent = document.getElementById('demo4');
		 	 hideContent.style.display = 'none';
		 }

		 function showMe(){
		 	var showContent = document.getElementById('demo4');
		 	showContent.style.display = 'block';
		 }

