// Tardis JS library
// Created by Chris Allison

var tardis = function(selector){
	return new tardis.prototype.init(selector);
};

tardis.prototype = {
	init: function(selector){
		//init the library	
		if(typeof selector === "string"){
			this.elements = document.querySelectorAll(selector);
		}else if(selector.nodeType){
			this.elements = [selector];
		};
	},
	
	elements: [],
	
	each: function(fn){
		for(var i=0, j=this.elements.length; i<j; i++){
			fn.call(this.elements[i]);
		};
		return this;
	},
	
	css: function(props){
		for(var prop in props) {
			this.each(function(){
				this.style[prop] = props[prop];	
			});
		};
	},
	
	hasClass: function(name){
		var bool = false;
		this.each(function(){
			var pattern = new RegExp("(^| )" + name + "( |$)");
			if(pattern.test(this.className)){
				bool = true;
			};
		});
		return bool;
	},
	
	addClass: function(name){
		this.each(function(){
			if( !tardis(this).hasClass(name) ){
				this.className += " " + name;
			};	
		});	
	},
	
	removeClass: function(name){
		this.each(function(){
			var pattern = new RegExp("(^| )" + name + "( |$)");
			this.className = this.className.replace(pattern, "$1").replace(/ $/, "");
		});	
	}
};

//Library utility functions - non-Dom methods
/*
	tardis.ajax({				< pass object literal into options argument
		url: "xhr/file.php", 	//example URL
		type: "GET",			//mostly use GET must be in all caps
		success: function(response){},
		error: function(response){},
		timeout: 8000			//sets timeout to 8 seconds
	}); 
*/
tardis.ajax = function(options){
	
	options = {
		url: options.url || "",
		type: options.type || "GET",
		timeout: options.timeout || 8000,
		success: options.success || function(){},
		error: options.error || function(){}
	};
	
	setTimeout(function(){
		if(xhr){
			xhr.abort();			
		}
	}, options.timeOut);
	
	var checkHttp = function(){
		try{
			return !xhr.status && location.protocol === "file:" || 
				( xhr.status >= 200 && xhr.status <300 ) ||
				xhr.status === 304 ||
				navigator.userAgent.indexOf("Safari") >= 0 && xhr.status === "undefined"
			;
		}catch(err){};
		
		return false;
	};
	
	var parseData = function(){
		var ct = xhr.getResponseHeader("content-type");
		var isxml = ct && ct.indexOf("xml")	>= 0;
		return isxml ? xhr.responseXML : xhr.responseText;
	};
	
	var serialize = function(){};
	
	var xhr = new XMLHttpRequest();
	xhr.open(options.type, options.url, true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			var valid = checkHttp();
			if(valid){
				var response = parseData()
				options.success( response )
			}else{
				//fail
				options.error(xhr);
			};
			xhr = undefined;
		};
	};
	xhr.send(null);
	
};

tardis.prototype.init.prototype = tardis.prototype;