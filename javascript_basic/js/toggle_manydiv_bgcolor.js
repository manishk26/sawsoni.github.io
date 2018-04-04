
 function changeBackgroundColor(element){

 	var divKids = document.getElementById('main').children;

 	for (var i = 0; i < divKids.length; i++) {
 		divKids[i].className = "style1";
 	}

 	element.className = "style2";
 }