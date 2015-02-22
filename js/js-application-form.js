function ShowResult(){
	document.getElementById('scr').value = '0';
	var res = document.getElementById('rslt'); 
	res.className = res.className +' show';
}
function Clear(){
	document.getElementById('scr').value = '';
	var res = document.getElementById('rslt'); 
	res.className = 'result';
}