function ShowResult(){
	// calculates the result & shows the result field
	document.getElementById('scr').value = '0';
	var res = document.getElementById('rslt'); 
	res.className = res.className +' show';

	// starts the video
	var vElement = res.children[0];
	vElement.autoplay = "1";
	vElement.load();
}
function Clear(){
	//clear the result & hides the result field
	document.getElementById('scr').value = '';
	var res = document.getElementById('rslt'); 
	res.className = 'result';

	// turn off the autoplay of the video
	var vElement = res.children[0];
	vElement.autoplay = "0";
}