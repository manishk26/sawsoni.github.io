
	function toggleNavPanel(){
		var panel = document.getElementById('section_content_panel');
		var navarrow = document.getElementById("downarrow");
		// var h = document.getElementById('hello');
		var maxH = "300px";


		if(panel.style.height == maxH){
			panel.style.height = "0px";
			navarrow.innerHTML = "&#9662;";
			// h.style.display = 'none';

		}else{

			panel.style.height = maxH;
			navarrow.innerHTML = "&#9652;";
			// h.style.display = 'block';


		}
}