
// change image once click

//function imageChange(){
	/*i store image tag in sea variable/ then axcess 
	.src property and change image*/
	//var sea = document.getElementById('sea_img');
	//sea.src = "imgs/teacup.jpg";
//}

// change image multiple times onclick
	var x = "y";

	function imageChange(){
		// var x = "y";
		
		var sea =  document.getElementById('sea_img');

		if( x == "y"){

			sea.src = "imgs/teacup.jpg";

			x = "z";

		}else{

			sea.src = "imgs/sea.jpg";

			x = "y";
		}
	}