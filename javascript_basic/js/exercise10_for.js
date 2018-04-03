
 function howMany(selectObject) {
 	var numberSelected = 0;
 	for(var i = 0; i < selectObject.options.length; i++){
 		if(selectObject.options[i].selected){
 			// numberSelected = numberSelected + 1;
 			numberSelected++;
 		}
 	}
 	return numberSelected;
 }

 // ======

 	var btn = document.getElementById('btn');

 	btn.addEventListener('click',function(){
 		alert('Number of option selected: ' + howMany(document.selectForm.musicTypes));
 	});