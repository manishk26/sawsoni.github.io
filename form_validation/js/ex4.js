
  function someInfo(){
  	 var username = document.getElementById('username').value;
  	 var password = document.getElementById('password').value;

  	 if(username == "" || password == ""){

  	 		alert("sorry, please fill in all field");

  	 		//if one conditon(i have to field both input) will be true steel alert mms will come

  	 		return false;

  	 	}else{

  	 		return true;		
  	 	}

  }