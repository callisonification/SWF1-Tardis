// Accordion javascript
var height = tardis("#accordion").getStyle("height");
console.log(height);

var firstDiv = tardis("#accordion .content").elements[0];
console.log(firstDiv);

var accHeight = tardis(firstDiv).getStyle("height");
console.log(accHeight);

firstDiv.style.height = (parseFloat(accHeight) + 50) + "px";
console.log(firstDiv.style.height);

var counter = 1;
var duration = 2000;
var time = 0;
var anim = setInterval(function(){
	time += 30;
	if(time >= duration){
		clearInterval(anim);
		//clearTimeout() = cxls timeouts
		return false;	
	};
	counter *= 1.1;
	firstDiv.style.height = (parseFloat(accHeight) + counter) + "px";
}, 30);