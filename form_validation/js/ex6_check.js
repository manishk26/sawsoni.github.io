
	function checked(){
		var frontend = document.getElementById('frontend').checked;
		var backend = document.getElementById('backend').checked;
		var both = document.getElementById('both').checked;

		if( frontend == "" && backend == "" && both == ""  ){
				alert('you can not live all them blank, at list on should be checked');

				return false;

			}else{

				return true;
			}
		
	}




/* means if condition will true (when it will true, if all will be empty) 
	then if (alert box) will exjecute/print
	else if any one will checked then condition will false or else will print */