
/*	Holds the status of the XMLHttpRequest.
readyState =>
			0: request not initialized 
			1: server connection established
			2: request received 
			3: processing request 
			4: request finished and response is ready*/

/* *status =>200: "OK"
			403: "Forbidden"
			404: "Not Found"
*/

 function getDocHtml(url){
 	var xHttp = new XMLHttpRequest();
 	/*
onreadystatechange => Defines a function to be called when the readyState property changes*/
 	xHttp.onreadystatechange = function(){
 		if(this.readyState == 4 && this.status == 200){
 			document.getElementById('demo').innerHTML = this.responseText;
 			console.log(xHttp.statusText);
 			// responseText => Returns the response data as a string
 			// responseXML => Returns the response data as XML data
 		}
 	};
 	// 
// To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:
 	xHttp.open('GET',url,true);
 	xHttp.send();
 }

  btn.addEventListener('click',function(){getDocHtml('/HelloSoni.txt')});

/**************************douplicate with parameter**************************************/
  function doplicateGetDocHtml(url,ele){
  	var xHttp = new XMLHttpRequest();
  	xHttp.onreadystatechange = function(){
  		if(this.readyState == 4 && this.status == 200){
  			document.getElementById(ele).innerHTML = this.responseText;
  		}
  	};

  	xHttp.open('GET',url,true);
  	xHttp.send(); 
  }

  // function myFunction1(xHttp){
  // 	document.getElementById('demo').innerHTML = xHttp.responseText;
  // }

  // btn.addEventListener('click',function(){doplicateGetDocHtml('storeData.html','demo'});

/*===============================================================================*/
function getImage(){
	var xHttp = new XMLHttpRequest();
	xHttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('demo1').innerHTML = this.responseText;
		}
	};

	xHttp.open('GET','../image/taste.gif',true);
	xHttp.send();
}

	btn1.addEventListener('click',getImage);

/************************************************************************/
// If you want to send information with the GET method, add the information to the URL:
	function sendInfo(){
		var xHttp = new XMLHttpRequest();

		xHttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200 ){
				document.getElementById('demo3').innerHTML = this.response;
				console.log(xHttp.statusText);
			}
		};

		xHttp.open('GET','storeData.html?fname=soni&lname=saw',true);

		xHttp.send();
	}

	btn2.addEventListener('click',sendInfo);//not working


/************************************************************************/








