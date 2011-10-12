// Tooltip Logic Demo
// SFW1
/*
	Logic Workflow:
	1. determine end result
	2. identify needed targets
	3. identify events per target
	4. accomplish result
*/

(function(){
	var tooltips = tardis(".tooltip");
	
	tooltips.on("mouseover", function(evt){
		var tip = this.nextSibling;
		tardis(tip).css({
			display: "block",
			top: (evt.pageY + 2) + "px",
			left: (evt.pageX + 2) + "px"
		});
	});
	
	tooltips.on("mouseout", function(evt){
		var tip = this.nextSibling;
		tardis(tip).hide();
	});
	
	tooltips.on("mousemove", function(evt){
		var tip = this.nextSibling;
		tardis(tip).css({
			top: (evt.pageY + 2) + "px",
			left: (evt.pageX + 2) + "px"
		});
	});
	
})();
