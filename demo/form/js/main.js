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
		//targetting formfields and change CSS properties here
	});
	
	tardis("div").addClass("testing");
})();

///homework code below///

(function(){
	
	var header = tardis(".dssheader");
	
	
	header.css({padding:"20px"})
	var color = header.getStyle("height");
	console.log(color);
	
	header.hide();
	setTimeout(function(){
		header.show();	
	}, 3000);
	
	
	var validationSet = {
		//holds other objects, each object is a validation type;
		email: {
			test: function(elem){
				var pattern = /pattern/;
				return pattern.test(elem.value);	
			},
			message: "Invalid email address"	
		},
		phone: {
			test: function(){},
			message: "Invalid email address"	
		},
		text: {
			test: function(){},
			message: "Invalid email address"	
		},
		password: {
			test: function(){},
			message: "Invalid email address"	
		},
		website: {
			test: function(){},
			message: "Invalid email address"	
		}
	};	
	
	var regFields = tardis("#myform input")
	
	regFields.each(function(){
		this.onkeyup = function(){
			for(var key in validationSet){
				if( tardis(this).hasClass(key) ){
					if( validationSet[key].test(this) ){
						console.log("test fn ran");
					}else{
						console.log("no test ran");
					};
				};
			};
		};
	});
	
})();