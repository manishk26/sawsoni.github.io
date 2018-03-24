
	var anchorVariable = document.getElementById('anchorBtn');

	 anchorVariable.addEventListener("click",hideShow);

	 


function hideShow(){

		var divId = this.attribute["data-viewDiv"].value;

		var divView = document.getElementById(divId);

		// var divView = $(divId);

		

		 if(divView.className == "hide"){
		 	divView.className = " ";
		 }else{
		 	divView.class = "hide";
		 }

		
	}


	/*$('#anchorBtn').on('click',function(evt){
		// evt.prevantaDefault();
		console.log('clicked me');
		 // hideShow();
	});*/
