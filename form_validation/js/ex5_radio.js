
	function checked(){

		var cheackdYes = document.getElementById('continue_yes').checked;
		var cheackdNo = document.getElementById('continue_no').checked;

		if (cheackdYes == "" && cheackdNo == "") {

			alert('cannot be left empty, please select an option')

			return false;

		}else{

			return true;

		}
	}