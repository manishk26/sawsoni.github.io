
 var text_index = 0;
 var text_array = ['Soni','Moni','Loni'];
 var text_elem = document.getElementById('text');//this var can keep in seprate file
 function textIndexNext(){
 	
 	text_index  = text_index + 1;// text_index++;
 	text_elem.style.opacity = 0;// after one again should be zero
 	//again index should start from 1;
 	if(text_index > (text_array.length - 1)){

 		text_index = 0;
	}//after ruunning if program should wait to run(textSlide()) this function
	setTimeout('textSlide()',1000);
	}

 function textSlide(){
 	text_elem.innerHTML = text_array[text_index];//increment index variable

 	text_elem.style.opacity = 1;//change opacity property, this will occure first

 	  setTimeout('textIndexNext()',2000);
 	} 	
