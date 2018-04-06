	var fun = (function(){
	var sculpture = document.getElementById('sculpture');
	var sea = document.getElementById('sea');
	var tea = document.getElementById('tea');

	function picLink(){

		var allImageArray = document.querySelectorAll('img');
			

			for(var i = 0; i < allImageArray.length; i++){
				allImageArray[i].className = "hide";
			}

			console.log(allImageArray);

			 var picId = this.attributes["data-img"].value;
			 console.log(picId);

			 var pic = document.getElementById(picId);

			 if(pic.className == "hide"){
			 	pic.className = "";

			 }else{

			 	pic.className = "hide";
			 }
		}
		return picLink;
	})();

	//add event to link

	sculpture.addEventListener('click',fun);
	sea.addEventListener('click',fun);
	tea.addEventListener('click',fun);
