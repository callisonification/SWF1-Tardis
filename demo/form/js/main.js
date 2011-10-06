(function(){
	/*var formFields = document.querySelectorAll("#myform input");
	
	for(var i=0, j=formFields.length; i<j; i++){
		formFields[i].style.backgroundColor = "black";	
	};*/
	
	var formFields = tardis("#myform input");
	/*for(var i=0, j=formFields.elements.length; i<j; i++){
		formFields.elements[i];	
	};*/
	
	formFields.each(function(){
		//console.log(this);
	});
	formFields.css({
		"backgroundColor": "black",
		"color": "white",
		"padding": "5px"
	});
	
	tardis("div").addClass("testing");
})();