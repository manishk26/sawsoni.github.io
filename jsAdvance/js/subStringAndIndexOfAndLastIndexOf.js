 
 function getNameAndDomainName(){
 	var email = document.getElementById('email').value;
 	var emailName = email.substring(0 , email.indexOf('@'));
 	var domain = email.substring(email.indexOf('@') + 1);//if will not add 1 it will extract(start) from @
 	//now set the value

 	document.getElementById('emailName').value = emailName;
 	document.getElementById('domainName').value = domain;

 }

 document.getElementById('btn').addEventListener('click',getNameAndDomainName);

 	function getDomain(){
 		var url = document.getElementById('url').value;

 		var domain = url.substring(url.lastIndexOf('.'));

 		document.getElementById('textDomain').value = domain;
 	}

 document.getElementById('btn1').addEventListener('click',getDomain);