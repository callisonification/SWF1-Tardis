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

tardis.prototype.init.prototype = tardis.prototype;