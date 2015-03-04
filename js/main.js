function ShowMenu(id){
	var menu = document.getElementById(id);
	if (menu.children[1].children[0].style.display == "block") {
		menu.children[1].children[0].style.display = "none";
	} 
	else{
		menu.children[1].children[0].style.display = "block";
	};
}
