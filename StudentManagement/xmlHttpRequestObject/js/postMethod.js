
 function postUserInput(){
 	let xHttp = new XMLHttpRequest();

 	xHttp.onreadystatechange = function(){
 		if(this.readyStatus == 4 && this.status == 200){
 			document.getElementById('mms').innerHTML = this.response;
 			console.log(xHttp.statusText);
 		}

 		xHttp.open('POST','storeData.html',true);
 		xHttp.setRequestHeader('content-type','application/x-www-form-urlencoded')
 		// var fName = document.getElementById('fName').value;
 		// var lName = document.getElementById('lName').value;
 		// var obj = {f:fName,lName:lName};
 		// xHttp.send(obj);
 		xHttp.send('fname=soni&lname=saw');
 	}
 }

 // subBtn.addEventListener('click',postUserInput);
 btn1.addEventListener('click',postUserInput);